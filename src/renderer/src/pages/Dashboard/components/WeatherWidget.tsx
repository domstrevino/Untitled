import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import useWeather from '@renderer/hooks/useWeather'
import dayImage from '@renderer/assets/day.avif'
import nightImage from '@renderer/assets/night.avif'

function WeatherWidget(): React.JSX.Element {
  const weather = useWeather()

  if (!weather) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <Card
        sx={{
          backgroundImage: `url(${weather?.isDay ? dayImage : nightImage})`,
          backgroundSize: 'cover'
        }}
      >
        <CardHeader
          sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
          title={weather?.city}
        />
        <CardContent sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
          <Typography variant="body2">
            Temp: {weather?.temperature}°F ({weather?.feelsLike}°F)
          </Typography>
          <Typography variant="body2">Humidity: {weather?.humidity}%</Typography>
          <Typography variant="body2">Rain: {weather?.rain}</Typography>
          <Typography variant="body2">Wind: {weather?.windSpeed} mph</Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default WeatherWidget
