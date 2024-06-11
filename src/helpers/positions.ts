import { LatLng } from "leaflet";

export const isPositionInsideLimits = (position: LatLng, bounds: LatLng[]): boolean => {
  let isInside = false;

  for (let i = 0, j = bounds.length - 1; i < bounds.length; j = i++) {
      const xi = bounds[i].lng;
      const yi = bounds[i].lat;
      const xj = bounds[j].lng;
      const yj = bounds[j].lat;

      const intersect = yi > position.lat != yj > position.lat && 
          position.lng < ((xj - xi) * (position.lat - yi) / (yj - yi) + xi);
      
      if (intersect) isInside = !isInside;
  }

  return isInside;
}