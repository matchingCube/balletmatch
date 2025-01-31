
'use client'
import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: -34.9285,      lng: 138.6007,
    },
    zoom: 11,
  };

  return (
    // Important! Alwys set the container height explicitlya

    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
    </GoogleMapReact>
  );
}
