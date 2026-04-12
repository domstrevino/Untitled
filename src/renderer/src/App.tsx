import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Login from './pages/Login'
import Calendar from './pages/Calendar'
import Tasks from './pages/Tasks'
import Dashboard from './pages/Dashboard'
import SecureVault from './pages/SecureVault'

function App(): React.JSX.Element {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/secure-vault" element={<SecureVault />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
