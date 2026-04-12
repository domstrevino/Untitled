import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Passwords from './pages/Passwords'
import Calendar from './pages/Calendar'
import Tasks from './pages/Tasks'

function App(): React.JSX.Element {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/password" element={<Passwords />} />
    </Routes>
  )
}

export default App
