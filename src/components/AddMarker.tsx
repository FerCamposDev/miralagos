import { LatLng, LeafletMouseEvent } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { useSearchParams } from "react-router-dom";
import MarkerTextEditor from "./MarkerTextEditor";

const getPositionFromSearchParams = (searchParams: URLSearchParams): LatLng | null => {
  if (!searchParams.get('lat') || !searchParams.get('lng')) {
    return null;
  }

  const lat = Number(searchParams.get('lat'));
  const lng = Number(searchParams.get('lng'));

  if (Number.isNaN(lat) || Number.isNaN(lng)) return null;

  return new LatLng(lat, lng);
}

const AddMarker = () => {
  const currMap = useMap();
  const [searchParams, setSearchParams] = useSearchParams();

  const [position, setPosition] = useState<LatLng | null>(getPositionFromSearchParams(searchParams));

  const onClickEvent = (e: LeafletMouseEvent) => {
    setPosition(e.latlng);
    
    setSearchParams({
      lat: e.latlng.lat.toString(),
      lng: e.latlng.lng.toString(),
    });
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
        <MarkerTextEditor />
      </Popup>
    </Marker>
  );
}

export default AddMarker