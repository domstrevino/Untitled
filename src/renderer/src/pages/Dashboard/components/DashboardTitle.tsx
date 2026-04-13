import { Typography } from '@mui/material'

function DashboardTitle(): React.JSX.Element {
  return (
    <div style={{ height: '10rem' }}>
      <Typography variant="h4">Good day, Dominick</Typography>
      <Typography variant="body1">
        Here&apos;s your dashboard overview. You can customize this page with widgets and shortcuts
        to your favorite apps.
      </Typography>
    </div>
  )
}

export default DashboardTitle
