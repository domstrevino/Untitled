import { ElectronAPI } from '@electron-toolkit/preload'
import type Task from '../types/tasks'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      getAllTasks: () => Promise<Task[]>
      getTasksForToday: () => Promise<Task[]>
      createTask: (
        title: string,
        description: string,
        status: string,
        target_date: string
      ) => Promise<void>
      updateTask: (
        id: number,
        title: string,
        description: string,
        status: string,
        target_date: string,
        updated_at: string
      ) => Promise<void>
      deleteTask: (id: number) => Promise<void>
    }
  }
}
