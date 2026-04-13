import fetchWeather from '@renderer/lib/weatherApi'
import { WeatherResponse } from '@renderer/types/weather'
import { useEffect, useState } from 'react'

function useWeather(): WeatherResponse | null {
  const [weather, setWeather] = useState<WeatherResponse | null>(null)

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const data = await fetchWeather()
        setWeather(data)
      } catch (error) {
        console.error('Error fetching weather data: ', error)
      }
    }

    fetchData()
  }, [])

  return weather
}

export default useWeather
