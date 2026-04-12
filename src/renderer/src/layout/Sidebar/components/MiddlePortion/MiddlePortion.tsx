import NavButton from './components/NavButton'

function MiddlePortion(): React.JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
      <NavButton to="/tasks" label="Tasks" />
      <NavButton to="/calendar" label="Calendar" />
      <NavButton to="/passwords" label="Passwords" />
    </div>
  )
}

export default MiddlePortion
