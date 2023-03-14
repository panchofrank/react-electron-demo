const { contextBridge, ipcRenderer } = require('electron')
console.log('test');

contextBridge.exposeInMainWorld('electronWorld', {
  ping: () => ipcRenderer.invoke('ping'),


  // we can also expose variables, not just functions
})