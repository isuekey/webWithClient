import {
    app, ipcMain, BrowserWindow, BrowserWindowConstructorOptions,
    Menu, MenuItemConstructorOptions,
} from "electron";

let mainWindow:BrowserWindow|null;

function createWindow(){
  const windowOptions: BrowserWindowConstructorOptions = {
    width: 800,
    height: 600,
    frame: process.platform === "linux",
    titleBarStyle: "hidden",
    backgroundColor: "#272B30",
    show: false,
  };
  const staticUrl = process.env.ELECTRON_START_URL || `file:///${__dirname}/index.html`;
  if (process.env.ELECTRON_START_URL) {
    windowOptions.webPreferences = {
      webSecurity: false,
    };
  }
  mainWindow = new BrowserWindow(windowOptions);
  mainWindow.loadURL(staticUrl);
  mainWindow.maximize();

  mainWindow.on('closed', ()=>{
    mainWindow = null;
  });
  mainWindow.once("ready-to-show", () => {
    mainWindow?.show();
  });

  registerContextMenu(mainWindow);
  /*
  ipcMainProxy = new IpcMainProxy(ipcMain, mainWindow);
  ipcMainProxy.register("RELOAD_APP", onReloadApp);
  ipcMainProxy.register("TOGGLE_DEV_TOOLS", onToggleDevTools);

  const localFileSystem = new LocalFileSystem(mainWindow);
  ipcMainProxy.registerProxy("LocalFileSystem", localFileSystem);
  */
}

function onReloadApp() {
  mainWindow?.reload();
  return true;
}

function onToggleDevTools() {
  mainWindow?.webContents.toggleDevTools();
}
function registerContextMenu(browserWindow: BrowserWindow): void {
  const selectionMenu = Menu.buildFromTemplate([
    { role: "copy", accelerator: "CmdOrCtrl+C" },
    { type: "separator" },
    { role: "selectAll", accelerator: "CmdOrCtrl+A" },
  ]);

  const inputMenu = Menu.buildFromTemplate([
    { role: "undo", accelerator: "CmdOrCtrl+Z" },
    { role: "redo", accelerator: "CmdOrCtrl+Shift+Z" },
    { type: "separator" },
    { role: "cut", accelerator: "CmdOrCtrl+X" },
    { role: "copy", accelerator: "CmdOrCtrl+C" },
    { role: "paste", accelerator: "CmdOrCtrl+V" },
    { type: "separator" },
    { role: "selectAll", accelerator: "CmdOrCtrl+A" },
  ]);

  browserWindow.webContents.on("context-menu", (e, props) => {
    const { selectionText, isEditable } = props;
    if (isEditable) {
      inputMenu.popup({
        window: browserWindow,
      });
    } else if (selectionText && selectionText.trim() !== "") {
      selectionMenu.popup({
        window: browserWindow,
      });
    }
  });

  const menuItems: MenuItemConstructorOptions[] = [
    {
      label: "File", submenu: [
        { role: "quit" },
      ],
    },
    { role: "editMenu" },
    {
      label: "View", submenu: [
        { role: "reload" },
        { type: "separator" },
        { role: "toggleDevTools" },
        { role: "togglefullscreen" },
        { type: "separator" },
        { role: "resetZoom" },
        { role: "zoomIn" },
        { role: "zoomOut" },
      ],
    },
    { role: "windowMenu" },
  ];
  const menu = Menu.buildFromTemplate(menuItems);
  Menu.setApplicationMenu(menu);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.whenReady().then(() => {
  createWindow();
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on("activate", () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
