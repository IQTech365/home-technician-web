"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "quarterly",
      });
      const { Map } = await loader.importLibrary("maps");
      const locationInMap = {
        lat: 28.4581652,
        lng: 76.992062,
      };
      // Marker
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const options: google.maps.MapOptions = {
        center: locationInMap,
        zoom: 12,
        mapId: "HOME_TECHNICIAN",
      };
      const map = new Map(mapRef.current as HTMLDivElement, options);

      // add marker in the map here

      const marker = new Marker({
        map: map,
        position: locationInMap,
      });
    };
    initializeMap();
  }, []);
  return <div className="h-[400px] rounded-lg" ref={mapRef}></div>;
};

export default MapComponent;
