import * as mapboxgl from "mapbox-gl/dist/mapbox-gl";
import * as React from "react";

(mapboxgl as any).accessToken =
  "pk.eyJ1IjoiZGl2aWRlYnkiLCJhIjoiY2pqaDNhc2N3MDltdDNwcmw4aDNyMTJmcyJ9.XGhJBeOsXtqQqTTNemDQWA";

// export interface IMapProps {
// }

export default class Map extends React.Component<{}, any> {
  public componentDidMount() {
    const map = new mapboxgl.Map({
      container: "habidatum__map",
      style: "mapbox://styles/mapbox/streets-v10"
    });

    map.on("load", () => {
      // hello
    });
  }

  public render() {
    return <div style={{ flex: 1, height: "100%" }} id="habidatum__map" />;
  }
}
