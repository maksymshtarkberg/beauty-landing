/*Since the map was loaded on client side, 
we need to make this component client rendered as well*/
"use client";

import { MapProvider } from "@/providers/map-provider";
//Map component Component from library
import { GoogleMap, Marker } from "@react-google-maps/api";

import styles from "./page.module.css";
import LocationItem from "@/ui/location";
//Map's styling
const defaultMapContainerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "15px 0px 0px 15px",
};

//K2's coordinates
const defaultMapCenter = {
  lat: 32.603041,
  lng: 35.289913,
};

//Default zoom level, can be adjusted
const defaultMapZoom = 18;

//Map options
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "satellite",
};

const mapLink = `https://www.google.com/maps/search/?api=1&query=${defaultMapCenter.lat},${defaultMapCenter.lng}`;

const MapComponent = () => {
  return (
    <MapProvider>
      <div className={styles.contacts}>
        <div className={styles.contactInfo}>
          <h2 className={styles.contactInfo__title}>Contact Us</h2>
          <p className={styles.contactInfo__text}>
            Address: 123 Main Street, New York, NY 10001
          </p>
          <p className={styles.contactInfo__text}>
            Phone:
            <a href="tel:+972538926485" className={styles.contactLink}>
              +1 (123) 456-7890
            </a>
          </p>
          <p className={styles.contactInfo__text}>Email: contact@example.com</p>
          <div className={styles.contactInfo__location}>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactInfo__url}
            >
              <LocationItem />
              Open in Google Maps
            </a>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <GoogleMap
            mapContainerStyle={defaultMapContainerStyle}
            center={defaultMapCenter}
            zoom={15}
          >
            <Marker position={defaultMapCenter} />
          </GoogleMap>
        </div>
      </div>
    </MapProvider>
  );
};

export default MapComponent;
