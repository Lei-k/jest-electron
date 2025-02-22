import { app, BrowserWindow, ipcMain } from 'electron';
import { EventsEnum } from '../../utils/constant';
import { WindowPool } from './window-pool';

import plugins from './plugin';

const debugMode = !!process.env.DEBUG_MODE;
const concurrency = Number(process.env.CONCURRENCY);

// all browser window closed, then kill the while application
app.on('window-all-closed', () => {
  app.quit();
});

app.whenReady().then(() => {
  // create a window pool instance
  const windowPool = new WindowPool(concurrency, debugMode);  

  // redirect the test cases data, and redirect test result after running in electron
  process.on(EventsEnum.ProcMessage, ({ test, id, type }) => {
    if (type === EventsEnum.ProcRunTest) {
      // send test data into render proc for running
      windowPool.runTest(id, test).then(({ result, id }) => {
        process.send({ result, id, type: EventsEnum.ProcRunTestResult });
      });
    } else if (EventsEnum.ProcInitialWin) {
      windowPool.clearSaveTests();
      process.send({ type: EventsEnum.ProcInitialWinEnd });
    } else {
      console.error('Invalid message type', type);
    }
  });

  windowPool.init().then(() => {
    let ps = [];

    // after init call plugin
    plugins.forEach(plugin => {
      if(plugin.onAppReady) {
        ps.push(plugin.onAppReady(windowPool.windows));
      }
    });

    Promise.all(ps).then(() => {
        // electron proc ready
        process.send({ type: EventsEnum.ProcReady });
    })

    
  })
});
