import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  getAllTasks: () => ipcRenderer.invoke('tasks:getAll'),
  getTasksForToday: () => ipcRenderer.invoke('tasks:getToday'),
  createTask: (title: string, description: string, status: string, target_date: string) =>
    ipcRenderer.invoke('tasks:create', title, description, status, target_date),
  updateTask: (
    id: number,
    title: string,
    description: string,
    status: string,
    target_date: string,
    updated_at: string
  ) => ipcRenderer.invoke('tasks:update', id, title, description, status, target_date, updated_at),
  deleteTask: (id: number) => ipcRenderer.invoke('tasks:delete', id)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
