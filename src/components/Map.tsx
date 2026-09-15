import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon from '../assets/icons/map-marker.svg';

const location: [number, number] = [
  51.536391,
  -0.116963,
];

const blackMarker = L.icon({
  iconUrl: markerIcon,
  iconSize: [50, 62],
  iconAnchor: [25, 62],
  popupAnchor: [0, -62],
});

export function Map() {
  return (
    <MapContainer
      center={location}
      zoom={16}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={location}
        icon={blackMarker}
      >
        <Popup>
          <strong>Escape Room</strong>
          <br />
          169–171 Caledonian Road
          <br />
          London N1 0SL
        </Popup>
      </Marker>
    </MapContainer>
  );
}