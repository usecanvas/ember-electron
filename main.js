'use strict';

var app           = require('app');
var BrowserWindow = require('browser-window');
var mainWindow    = null;

app.on('window-all-closed', function onWindowAllClosed() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function onReady() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function onClosed() {
    mainWindow = null;
  });
});
