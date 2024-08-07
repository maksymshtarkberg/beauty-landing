"use client";

// import { MapProvider } from "@/providers/map-provider";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import styles from "./page.module.css";
import LocationItem from "@/ui/location";
import { useEffect, useState } from "react";

import Map from "../../providers/map";

const defaultMapContainerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "15px 0px 0px 15px",
};

const defaultMapCenter = {
  lat: 32.603041,
  lng: 35.289913,
};

const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "satellite",
};

const mapLink = `https://www.google.com/maps/search/?api=1&query=${defaultMapCenter.lat},${defaultMapCenter.lng}`;

const MapComponent = () => {
  return (
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
        {/* <GoogleMap
            mapContainerStyle={defaultMapContainerStyle}
            center={defaultMapCenter}
            zoom={15}
          >
            <Marker position={defaultMapCenter} />
          </GoogleMap> */}
        <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />
      </div>
    </div>
  );
};

export default MapComponent;
