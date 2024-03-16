import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

interface MapComponentProps {
  // Define props if needed
}

const LocationMap: React.FC<MapComponentProps> = (props) => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    if (!googleMapsApiKey) {
        console.error('Google Maps API key is not set!');
        return null;
      }
      
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={{ lat: 34.985428, lng: -80.549511 }}
        zoom={8}
      >
        {/* Add markers or other components here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default LocationMap;
