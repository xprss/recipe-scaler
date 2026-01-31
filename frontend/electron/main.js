const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 800,
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile(path.join(__dirname, '../dist/frontend/browser/index.html'));
}

app.whenReady().then(createWindow);
