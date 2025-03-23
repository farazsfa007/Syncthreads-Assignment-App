import { MapContainer, TileLayer } from "react-leaflet";

const MapView = () => {
    return (
        <MapContainer center={[21.7679, 78.8718]} zoom={5} style={{ height: "100vh", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
    );
};

export default MapView;
