import * as mapboxgl from "mapbox-gl/dist/mapbox-gl";
import * as React from "react";

import "./App.css";

(mapboxgl as any).accessToken =
  "pk.eyJ1IjoiZGl2aWRlYnkiLCJhIjoiY2pqaDNhc2N3MDltdDNwcmw4aDNyMTJmcyJ9.XGhJBeOsXtqQqTTNemDQWA";

class App extends React.Component {

  public componentDidMount() {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v10"
    });
    
    map.on("load", () => {
      // hello
    });
  }

  public render() {
    return (
      <div>
        <div id="map" />
      </div>
    );
  }
}

export default App;
