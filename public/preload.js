const { contextBridge, ipcRenderer } = require('electron')
console.log('test');

contextBridge.exposeInMainWorld('electronWorld', {
  copyFiles: () => ipcRenderer.invoke('copyFiles'),
  readModuleConfig: () => ipcRenderer.invoke('readModuleConfig')
})