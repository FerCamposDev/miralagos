import { useState, useEffect } from "react"

export default function useGeolocation(options?: PositionOptions) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<GeolocationPositionError | null>(null);
  const [data, setData] = useState<GeolocationCoordinates | null>(null);

  const successHandler = (position: GeolocationPosition) => {
    setLoading(false)
    setError(null)
    setData(position.coords)
  }

  const errorHandler = (positionError: GeolocationPositionError | null) => {
    setError(positionError)
    setLoading(false)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options
    )

    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    )
    return () => navigator.geolocation.clearWatch(id)
  }, [options]);

  return {
    loading,
    error,
    data
  };
}