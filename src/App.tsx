import 'leaflet/dist/leaflet.css';
import { ImageOverlay, LayerGroup, LayersControl, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import LocationMarker from './components/LocationMarker';
import AddMarker from './components/AddMarker';
import { AMENITIES_MARKERS, GOLF_MARKERS, SPORTS_MARKERS } from './constants/markers';
import lotes from './assets/lotes-light.png';

function App() {


  return (
    <MapContainer
      center={[-35.100476, -58.077903]}
      maxBounds={[
        [-35.089321, -58.090081],
        [-35.089321, -58.065955],
        [-35.109903, -58.065955],
        [-35.109903, -58.090081],
      ]}
      zoom={15.5}
      scrollWheelZoom={false}
      style={{ height: '100vh' }}
    >
      {/* Map Bounds */}
      {/* <Marker position={[-35.089321, -58.090081]} /> */}
      {/* <Marker position={[-35.089321, -58.065955]} /> */}
      {/* <Marker position={[-35.109903, -58.065955]} /> */}
      {/* <Marker position={[-35.109903, -58.090081]} /> */}


      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      <AddMarker />

      <LayersControl position="topright">
        <LayersControl.Overlay name="Deportes">
          <LayerGroup>
            {SPORTS_MARKERS.map(({ icon, title, content, position }) => (
              <Marker position={position} title={title} icon={icon}>
                <Popup>
                  {content || title}
                </Popup>
              </Marker>
            ))}
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Amenities">
          <LayerGroup>
            {AMENITIES_MARKERS.map(({ icon, title, content, position }) => (
              <Marker position={position} title={title} icon={icon}>
                <Popup>
                  {content || title}
                </Popup>
              </Marker>
            ))}
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Golf">
          <LayerGroup>
            {GOLF_MARKERS.map(({ title, icon, position }) => (
              <Marker
                key={title}
                title={title}
                icon={icon}
                position={position}
              >
                <Popup>
                  {title}
                </Popup>
              </Marker>
            ))}
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Ver Lotes">
          <ImageOverlay
            url={lotes}
            opacity={0.9}
            bounds={[
              [-35.08919103, -58.0896666], // top left
              [-35.08919103, -58.0639085], // top right
              [-35.11036208, -58.0639085], // bottom right
              [-35.11036208, -58.0896666], // bottom left
            ]}
          />
        </LayersControl.Overlay>
        {/* <Marker position={[-35.08919103, -58.0896666]} /> */}
        {/* <Marker position={[-35.08919103, -58.0639085]} /> */}
        {/* <Marker position={[-35.11036208, -58.0639085]} /> */}
        {/* <Marker position={[-35.11036208, -58.0896666]} /> */}

      </LayersControl>

    </MapContainer>
  )
}

export default App
