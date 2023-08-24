const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const url = require("url");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // React ile Node.js entegrasyonunu etkinleştirin
    },
  });

  mainWindow.loadURL("http://localhost:3000");

  mainWindow.on("closed", function () {
    mainWindow = null;
  });

  // const mainMenu = Menu.buildFromTemplate();
}

// const mainMenuTemplate = [
// {
// label: "BNet",
// },
// {
// label: "Ayarlar",
// },
// ];

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
