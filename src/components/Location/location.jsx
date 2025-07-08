import React, { useEffect, useState } from 'react';

const LiveLocation = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        setError('Location access denied or unavailable.');
        console.error(err);
      },
      {
        enableHighAccuracy: true, // Use GPS when available
        maximumAge: 0,
        timeout: 10000,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId); // Stop watching on unmount
  }, []);

  return (
    <div>
      <h2>Live GPS Location</h2>
      {error && <p>{error}</p>}
      {location.lat && location.lng ? (
        <p>Latitude: {location.lat}<br />Longitude: {location.lng}</p>
      ) : (
        <p>Fetching location...</p>
      )}

      <iframe
  width="100%"
  height="400"
  loading="lazy"
  allowFullScreen
  src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
/>

    </div>
  );
};

export default LiveLocation;
