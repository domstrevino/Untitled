import WeatherWidget from './components/WeatherWidget'
import DashboardTitle from './components/DashboardTitle'

function Dashboard(): React.JSX.Element {
  return (
    <div style={{ width: '100%', padding: '1rem' }}>
      <DashboardTitle />
      <WeatherWidget />
    </div>
  )
}

export default Dashboard
