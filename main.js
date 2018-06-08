const {app, BrowserWindow} = require('electron');

let mainWindow = null;
app.on('ready', () => {
  // mainWindowを作成
  mainWindow = new BrowserWindow({
      // ウィンドウ作成時のオプション
      "width": 350,
      "height": 450,
      "alwaysOnTop": true,
      "transparent": true,    // ウィンドウの背景を透過
      "frame": false,         // 枠の無いウィンドウ
      "resizable": false      // ウィンドウのリサイズを禁止
  });
  // htmlを絶対パスで指定（相対パスだと動かない）
  mainWindow.loadURL('file://' + __dirname + '/src/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});