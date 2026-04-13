import db from '../db'
import type Task from '../../../types/tasks'

function getAllTasks(): Task[] {
  return db.prepare('SELECT * FROM tasks').all()
}

function getTasksForToday(): Task[] {
  return db.prepare('SELECT * FROM tasks WHERE target_date = date("now", "localtime")').all()
}

function createTask(title: string, description: string, status: string, target_date: string): void {
  db.prepare('INSERT INTO tasks (title, description, status, target_date) VALUES (?, ?, ?, ?)').run(
    title,
    description,
    status,
    target_date
  )
}

function updateTask(
  id: number,
  title: string,
  description: string,
  status: string,
  target_date: string,
  updated_at: string
): void {
  db.prepare(
    'UPDATE tasks SET title = ?, description = ?, status = ?, target_date = ?, updated_at = ? WHERE id = ?'
  ).run(title, description, status, target_date, updated_at, id)
}

function deleteTask(id: number): void {
  db.prepare('DELETE FROM tasks WHERE id = ?').run(id)
}

export { getAllTasks, createTask, updateTask, deleteTask, getTasksForToday }

//       {id} INTEGER PRIMARY KEY AUTOINCREMENT,
//       {title} TEXT NOT NULL,
//       {description} TEXT,
//       {status} TEXT NOT NULL DEFAULT 'pending',
//       {created_at} DATETIME DEFAULT CURRENT_TIMESTAMP,
//       {updated_at} DATETIME DEFAULT CURRENT_TIMESTAMP

//version 2.0.0
//function getTaskById(id: number): any {}

//function getTasksByStatus(status: string): any[] {}

// function searchTasks(keyword: string): any[] {}

// function getTasksCreatedAfter(date: Date): any[] {}

// function getTasksUpdatedBefore(date: Date): any[] {}

// function getTaskByDate(date: Date): any[] {}
