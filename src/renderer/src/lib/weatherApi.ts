import { WeatherResponse } from '@renderer/types/weather'

const fetchWeather = async (): Promise<WeatherResponse> => {
  const response = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=39.7294&longitude=-104.8319&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,is_day,windspeed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto'
  )
  const data = await response.json()
  return {
    temperature: data.current.temperature_2m,
    feelsLike: data.current.apparent_temperature,
    humidity: data.current.relative_humidity_2m,
    rain: data.current.rain,
    isDay: data.current.is_day === 1,
    windSpeed: data.current.windspeed_10m,
    city: data.timezone.split('/')[1].replace('_', ' ')
  }
}

export default fetchWeather
