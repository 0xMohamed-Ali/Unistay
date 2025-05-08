import React from 'react'
 import MapImg  from "../assets/images/google-map3.jpg";
 import './form.css'
 const Map = () => {
  return (
    

    <div
        id="map"
        className="map-section"
        style={{ backgroundImage: `url(${MapImg})` }}
      ></div>
  );
};

export default Map;
