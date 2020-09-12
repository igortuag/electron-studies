const electron = require("electron");
const { app, Tray, Menu } = electron;

app.on("ready", () => {
  const tray = new Tray(`${__dirname}/robot.png`);
  tray.setToolTip("Esta é uma aplicação Electron");
  tray.on("click", () => {
    console.log("Você clicou no ícone da aplicação");
  });
  const contextMenu = Menu.buildFromTemplate(menuTemplate);
  tray.setContextMenu(contextMenu);
});

const menuTemplate = [
  {
    label: "Terap",
    click: () => {
      console.log("Você clicou na opção Terap");
    },
  },
  {
    label: "Configuração",
  },
  {
    label: "Ajuda",
  },
];
