import { stringAvatar } from '@renderer/lib/avatarUtils'
import { Avatar, Stack } from '@mui/material'

function BottomPortion(): React.JSX.Element {
  return (
    <div>
      <Stack direction="row">
        <Avatar {...stringAvatar('Dominick Trevino')} />
      </Stack>
    </div>
  )
}

export default BottomPortion
