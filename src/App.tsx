import 'leaflet/dist/leaflet.css';
import { ImageOverlay, LayerGroup, LayersControl, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import LocationMarker from './components/LocationMarker';
import AddMarker from './components/AddMarker';
import { AMENITIES_MARKERS, GOLF_MARKERS, SPORTS_MARKERS } from './constants/markers';

function App() {


  return (
    <MapContainer
      center={[-35.100476, -58.077903]}
      zoom={15.5}
      scrollWheelZoom={false}
      style={{ height: '100vh' }}
    >
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
            url='/miralagos-r47-cut.png'
            bounds={[
              [-35.104571, -58.089652], // top left
              [-35.089060, -58.072578], // top right
              [-35.095009, -58.064285], // bottom right
              [-35.110012, -58.082277], // bottom left
            ]}
          />
        </LayersControl.Overlay>

      </LayersControl>

    </MapContainer>
  )
}

export default App
