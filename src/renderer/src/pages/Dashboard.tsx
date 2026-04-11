import Body from '@renderer/components/Body'
import Sidebar from '@renderer/components/Sidebar'

function Dashboard(): React.JSX.Element {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <Sidebar />
      <Body />
    </div>
  )
}

export default Dashboard
