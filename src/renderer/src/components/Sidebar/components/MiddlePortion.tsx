import { NavLink } from 'react-router-dom'

function MiddlePortion(): React.JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
      <NavLink to="/tasks">Task Section</NavLink>
      <NavLink to="/calendar">Calendar Section</NavLink>
      <NavLink to="/password">Password Section</NavLink>
    </div>
  )
}

export default MiddlePortion
