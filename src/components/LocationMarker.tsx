import { Icon, LatLng } from "leaflet"
import { useState } from "react"
import { Marker, Popup, useMapEvents } from "react-leaflet"
import { othersIcons } from "../assets/icons/others";

const locationIcon = new Icon({ iconUrl: othersIcons.locationGif, iconSize: [24, 24]})

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
    <Marker
      position={position}
      title="Posición"
      icon={locationIcon}
    >
    <Popup>Usted está aquí</Popup>
  </Marker>
  )
}

export default LocationMarker;
