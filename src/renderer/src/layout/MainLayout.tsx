import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function MainLayout(): React.JSX.Element {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default MainLayout
