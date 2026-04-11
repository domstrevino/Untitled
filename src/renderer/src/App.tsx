import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function App(): React.JSX.Element {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
