//This file has one job: create a connection to the database and export it for use in other parts of the application.

import { app } from 'electron'
import { join } from 'path'
import { initializeSchema } from './schema'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const Database = require('better-sqlite3')

const dbPath = join(app.getPath('userData'), 'app.db')
const db = new Database(dbPath, { verbose: console.log })

db.pragma('journal_mode = WAL') // Enable Write-Ahead Logging for better concurrency

initializeSchema(db)

export default db
