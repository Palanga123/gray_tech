import React, {useRef} from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {

    const mapRef = useRef(null);
    const latitude = 51.505;
    const longitude = -0.09

    return(
        <>
            <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} className="h-96 w-96">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </>
    );
};

export default Map;