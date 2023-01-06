import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Result = ({data}) => {
  return (
    <>
      <div className="result__wrapper">
        <div className="result__container">
          <div className="result__box">
            <div className='result__side'>
              <h2>Search result:</h2>
              <ul>
                <li><p>Country: <span>{data.country_name}</span></p></li>
                <li><p>City: <span>{data.city}</span></p></li>
                <li><p>ISP: <span>{data.org}</span></p></li>
                <li><p>Region: <span>{data.region}</span></p></li>
                <li><p>Postal: <span>{data.postal}</span></p></li>
                <li><p>LAT: <span>{data.latitude}</span></p></li>
                <li><p>LON: <span>{data.longitude}</span></p></li>
              </ul>
            </div>   
            <div className='result__side'>
                <MapContainer center={[data.latitude, data.longitude]} zoom={13} scrollWheelZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[data.latitude, data.longitude]}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
              </MapContainer>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Result;