import { LatLng } from "leaflet"

// TODO: review, this is a square for the image
export const M_POSITIONS = [
  [-35.104571, -58.089652], // top left
  [-35.089060, -58.072578], // top right
  [-35.095009, -58.064285], // bottom right
  [-35.110012, -58.082277], // bottom left
]

export const M_BOUNDS = M_POSITIONS.map((position) => new LatLng(position[0], position[1]));