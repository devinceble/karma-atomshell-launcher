# karma-atomshell-launcher

> Launcher for Github Atom-Shell

Create a simple atom-shell application and Make it the default_app

Rename atom binary to karma-atom

export karma-atom path to your $PATH

or

symlink it to your /usr/bin or /home/<username>/bin

package.json
```json
{
  "name": "Karma Atom Shell Launcher",
  "version": "0.0.1beta",
  "main": "app.js"
}

```

app.js
```javascript
var BrowserWindow, app;

app = require('app');

BrowserWindow = require('browser-window');

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
  return true;
});

app.on('ready', function() {
  var mainWindow;
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    'dark-theme': true,
    'node-integration': 'all',
    'use-content-size': true,
    'web-preferences': {
      'web-security': false
    }
  });
  mainWindow.loadUrl('http://localhost:9876/');
  mainWindow.on('closed', function() {
    mainWindow = null;
    return true;
  });
  mainWindow.toggleDevTools();
  return true;
});
```
