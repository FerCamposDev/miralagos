import { LatLng, LeafletMouseEvent } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { useSearchParams } from "react-router-dom";
import MarkerTextEditor from "./MarkerTextEditor";
import { M_BOUNDS } from "../constants/positions";
import { isPositionInsideLimits } from "../helpers/positions";
import toast from "react-hot-toast";

const getPositionFromSearchParams = (searchParams: URLSearchParams): LatLng | null => {
  if (!searchParams.get('lat') || !searchParams.get('lng')) {
    return null;
  }

  const lat = Number(searchParams.get('lat'));
  const lng = Number(searchParams.get('lng'));

  if (Number.isNaN(lat) || Number.isNaN(lng)) return null;

  const position = new LatLng(lat, lng);

  if (isPositionInsideLimits(position, M_BOUNDS)) return position;

  return null
}

const AddMarker = () => {
  const currMap = useMap();
  const [searchParams, setSearchParams] = useSearchParams();

  const [position, setPosition] = useState<LatLng | null>(getPositionFromSearchParams(searchParams));

  const onClickEvent = (e: LeafletMouseEvent) => {
    const position = e.latlng;
    if (isPositionInsideLimits(position, M_BOUNDS)) {
      setPosition(e.latlng);
    
      setSearchParams({
        lat: e.latlng.lat.toString(),
        lng: e.latlng.lng.toString(),
      });
    } else {
      toast.error('Marcador fuera del rango permitido');
    }
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