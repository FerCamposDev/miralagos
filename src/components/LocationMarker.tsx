import { LatLng } from "leaflet"
import { useState } from "react"
import { Marker, Popup, useMapEvents } from "react-leaflet"

const LocationMarker = () => {
  const [position, setPosition] = useState<LatLng | null>(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      // map.flyTo(e.latlng, map.getZoom())
    },
  })

  if (position === null) return null;

  return (
    <Marker position={position}>
      <Popup>Usted está aquí</Popup>
    </Marker>
  )
}

export default LocationMarker;
