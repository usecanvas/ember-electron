'use strict';

var BrowserWindow = require('browser-window');
var Menu          = require('menu');
var app           = require('app');
var dialog        = require('dialog');
var mainWindow    = null;

var template = [{
  label: 'File',
  submenu: [{
    label: 'Open',
    accelerator: 'Command+O',
    click: function() {
      dialog.showOpenDialog(mainWindow, {
        properties: ['openFile', 'multiSelections', 'createDirectory']
      }, onFileOpen);
    }
  }]
}];

app.on('window-all-closed', function onWindowAllClosed() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function onReady() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  var menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  delete mainWindow.module;

  if (process.env.ELECTRON_ENV === 'development') {
    mainWindow.openDevTools();
    mainWindow.loadUrl('http://localhost:5000');
  } else {
    mainWindow.loadUrl('file://' + __dirname + '/dist/index.html');
  }

  mainWindow.on('closed', function onClosed() {
    mainWindow = null;
  });
});

function onFileOpen(files) {
  if (files && files.length) {
      mainWindow.webContents.send('filesOpened', JSON.stringify(files));
  }
}