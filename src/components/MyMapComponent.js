import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyMapComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDWmVQA0gK3PQSv5rngRrCf5t3O7r9_160"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* You can add markers, info windows, etc. here */}
      </GoogleMap>
    </LoadScript>
  )
}

export default MyMapComponent;

