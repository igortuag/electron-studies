// Modules to control application life and create native browser window
const {
  app,
  BrowserWindow,
  ipcMain,
  dialog,
  globalShortcut,
} = require("electron");
const path = require("path");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  globalShortcut.register("CmdOrCtrl+j", () => {
    console.log(new Date().toISOString());
  });

  globalShortcut.register("Alt+j", () => {
    dialog.showMessageBox({
      title: "shortcut teste",
      message: "ok",
    });
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// IPCMAIN

// async
ipcMain.on("async-ipcmain", (event, args) => {
  console.log("async-ipcmain", args);
  event.sender.send("async-ipcrender", "oii ipcmain");
});

ipcMain.on("sync-ipcmain", (event, args) => {
  console.log("sync-ipcmain", args);
  event.returnValue = { msg: "oii ipcmain" };
});

ipcMain.on("dialog-1", (event, args) => {
  dialog.showErrorBox("404", "file not found");
});

ipcMain.on("dialog-2", (event, args) => {
  dialog.showMessageBox(
    {
      title: "Titulo",
      message: "mensagem simples",
      detail: "detalhamento da mensagem",
      buttons: ["OK", "cancel", "teste 1"],
    },
    (response, checkboxChecked) => {
      console.log(response);
    },
  );
});

ipcMain.on("dialog-3", (event, args) => {
  dialog.showOpenDialog(
    {
      title: "Procurando arquivo html...",
      buttonLabel: "arquivo HTML",
      message: "mensagem",
      properties: ["openFile", "multiSelections"],
      filters: [
        {
          name: "All",
          extensions: ["*"],
        },
        {
          name: "Pagina da Web",
          extensions: ["htm", "html"],
        },
      ],
    },
    (filePaths, bookmarks) => {
      console.log(filePaths, bookmarks);
    },
  );
});

ipcMain.on("dialog-4", (event, args) => {
  dialog.showSaveDialog(
    {
      title: "Salvando arquivo html",
      message: "message",
      buttonLabel: "Salvar HTML",
      nameFieldLabel: "Nome Arquivo",
      filters: [
        {
          name: "All",
          extensions: ["*"],
        },
        {
          name: "Texto",
          extensions: ["txt"],
        },
        {
          name: "Pagina da Web",
          extensions: ["htm", "html"],
        },
      ],
    },
    (filename, bookmark) => {
      console.log(filename);
    },
  );
});
