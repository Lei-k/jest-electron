const fs = require('fs');

const path = require('path');

module.exports = {
    onAppReady: () => {
        fs.writeFileSync(path.join(__dirname, './test'), 'app ready!')
    }
}