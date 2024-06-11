import { LatLng, LeafletMouseEvent } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

const AddMarker = () => {
  const currMap = useMap();
  const [position, setPosition] = useState<LatLng | null>(null);

  const onClickEvent = (e: LeafletMouseEvent) => {
    console.log('e :>> ', e);
    setPosition(e.latlng);
  }

  useEffect(() => {
    currMap.addEventListener('click', onClickEvent);

    return () => {
      currMap.removeEventListener('click', onClickEvent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!position) return null;

  return (
    <Marker position={position} title="Marcador">
      <Popup>
        Your Marker
      </Popup>
    </Marker>
  );
}

export default AddMarker