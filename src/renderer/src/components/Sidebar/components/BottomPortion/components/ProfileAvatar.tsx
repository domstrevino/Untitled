import { Avatar, Stack } from '@mui/material'
import { stringAvatar } from '@renderer/lib/avatarUtils'

function ProfileAvatar(): React.JSX.Element {
  return (
    <Stack direction="row" spacing={1} style={{}}>
      <Avatar {...stringAvatar('Dominick Trevino')} />
    </Stack>
  )
}

export default ProfileAvatar
