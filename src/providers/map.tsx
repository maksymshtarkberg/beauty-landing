import { useCallback, useMemo } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Libraries,
} from "@react-google-maps/api";

const libraries: Libraries = ["places", "geometry"]; // Correct type

function Map({ address }: { address: string }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY as string,
    libraries,
  });

  const center = useMemo(
    () => ({
      lat: 32.603041,
      lng: 35.289913,
    }),
    []
  );

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          map.setCenter(results[0].geometry.location);
          new google.maps.Marker({
            position: results[0].geometry.location,
            map,
          });
        } else {
          console.error(
            `Geocode was not successful for the following reason: ${status}`
          );
        }
      });
    },
    [address]
  );

  if (loadError) return <p>Error loading Google Maps: {loadError.message}</p>;

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ height: "400px", width: "100%" }}
      center={center}
      zoom={15}
      onLoad={onLoad}
    >
      <Marker position={center} />
      {/* You can add additional children components here if needed */}
    </GoogleMap>
  ) : (
    <p>Loading map...</p>
  );
}

export default Map;
