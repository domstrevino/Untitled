import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Login from './pages/Login'
import Passwords from './pages/Passwords'
import Calendar from './pages/Calendar'
import Tasks from './pages/Tasks'
import Dashboard from './pages/Dashboard'

function App(): React.JSX.Element {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/passwords" element={<Passwords />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
