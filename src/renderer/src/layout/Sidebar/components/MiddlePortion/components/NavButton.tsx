import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

interface NavButtonProps {
  to: string
  label: string
}

const NavButton = ({ to, label }: NavButtonProps): React.JSX.Element => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? 'active' : '')}
    style={{ width: '100%' }}
  >
    {({ isActive }) => (
      <Button variant={isActive ? 'contained' : 'outlined'} fullWidth>
        {label}
      </Button>
    )}
  </NavLink>
)

export default NavButton
