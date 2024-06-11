import 'leaflet/dist/leaflet.css';
import houseIcon from './assets/icons/house.png';
import { ImageOverlay, LayerGroup, LayersControl, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon, divIcon } from 'leaflet';

import LocationMarker from './components/LocationMarker';
import AddMarker from './components/AddMarker';
import { getThree } from './assets/icons/numbers';

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
        <LayersControl.Overlay name="Compras">
          <LayerGroup>
            <Marker position={[-35.102569, -58.082903]} title="Despensa">
              <Popup>
                Despensa
              </Popup>
            </Marker>
            <Marker position={[-35.095238, -58.073415]} title="Club House" icon={new Icon({ iconUrl: houseIcon, iconSize: [32, 32] })}>
              <Popup>
                Club House
              </Popup>
            </Marker>
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Golf">
          <Marker
            title="Hoyo 1"
            // icon={new Icon({ iconUrl: threeIcon, iconSize: [32, 32] })}
            icon={divIcon({
              html: getThree(),
              iconSize: [32, 32],
            })}
            position={[-35.102127, -58.083489]}
          >
            <Popup>
              Hoyo 1
            </Popup>
          </Marker>
        </LayersControl.Overlay>

        <LayersControl.Overlay name="You">
          <Marker position={[-35.102633, -58.086]} title="Your position">
            <Popup>
              Su posición actual
            </Popup>
          </Marker>
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
