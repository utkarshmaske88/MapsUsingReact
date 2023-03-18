import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../App.css';
import Footer from './footer';
import RegionSelector from './form';
import { useSelector } from 'react-redux';
export default function Map() {
    const info = useSelector(state => (state.info));

    return (
        < >
            <RegionSelector />
            <MapContainer key={JSON.stringify(info)} center={info} zoom={5} scrollWheelZoom={false} >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
            <Footer/>
        </>
    );
}
