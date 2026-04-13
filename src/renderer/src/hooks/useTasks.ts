import type Task from '@renderer/types/Tasks'
import { useCallback, useEffect, useState } from 'react'

type UseTasksReturn = {
  tasks: Task[]
  tasksToday: Task[]
  createTask: (
    title: string,
    description: string,
    status: string,
    targetDate: string
  ) => Promise<void>
  updateTask: (
    id: number,
    title: string,
    description: string,
    status: string,
    targetDate: string,
    updated: string
  ) => Promise<void>
  deleteTask: (id: number) => Promise<void>
}
function useTasks(): UseTasksReturn {
  const [tasks, setTasks] = useState<Task[]>([])
  const [tasksToday, setTasksToday] = useState<Task[]>([])

  const fetchTasks = useCallback(async (): Promise<void> => {
    try {
      const allTasks = await window.api.getAllTasks()
      setTasks(allTasks)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }, [])

  const fetchTasksForToday = useCallback(async (): Promise<void> => {
    try {
      const todayTasks = await window.api.getTasksForToday()
      setTasksToday(todayTasks)
    } catch (error) {
      console.error('Error fetching tasks for today:', error)
    }
  }, [])

  const createTask = async (
    title: string,
    description: string,
    status: string,
    targetDate: string
  ): Promise<void> => {
    try {
      await window.api.createTask(title, description, status, targetDate)
      await fetchTasks() // Refresh the task list after creation
    } catch (error) {
      console.error('Error creating task:', error)
    }
  }

  const updateTask = async (
    id: number,
    title: string,
    description: string,
    status: string,
    targetDate: string,
    updated: string
  ): Promise<void> => {
    try {
      await window.api.updateTask(id, title, description, status, targetDate, updated)
      await fetchTasks() // Refresh the task list after updating
    } catch (error) {
      console.error('Error updating task:', error)
    }
  }

  const deleteTask = async (id: number): Promise<void> => {
    try {
      await window.api.deleteTask(id)
      await fetchTasks() // Refresh the task list after deletion
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  useEffect(() => {
    const loadTasks = async (): Promise<void> => {
      await fetchTasks()
      await fetchTasksForToday()
    }
    loadTasks()
  }, [fetchTasks, fetchTasksForToday])

  return { tasks, tasksToday, createTask, updateTask, deleteTask }
}

export default useTasks
