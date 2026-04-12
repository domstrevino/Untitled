import { CiHome } from 'react-icons/ci'
import { Link } from 'react-router-dom'

function TopPortion(): React.JSX.Element {
  return (
    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
      <CiHome size={48} />
    </Link>
  )
}

export default TopPortion
