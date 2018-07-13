import * as React from "react";
import ReactMapGL, { Marker, Viewport } from "react-map-gl";

import { CircleMarker } from "../../components";
import { TripEntity } from "../../redux/Trips/models";

interface MapState {
  mapLoaded: boolean;
  viewport: Viewport;
}

interface MapProps {
  tripsList: TripEntity[];
  tripsLoaded: boolean;
  activeItemIndex?: number;
}

class Map extends React.Component<MapProps, MapState> {
  public state = {
    mapLoaded: false,
    viewport: {
      latitude: 40.71958611647166,
      longitude: -74.04311746358871,
      zoom: 12,
      width: 700,
      height: 700,
      mapboxApiAccessToken:
        "pk.eyJ1IjoiZGl2aWRlYnkiLCJhIjoiY2pqaDNhc2N3MDltdDNwcmw4aDNyMTJmcyJ9.XGhJBeOsXtqQqTTNemDQWA"
    }
  };

  public constructor(props: MapProps) {
    super(props);
    this.updateViewport = this.updateViewport.bind(this);
  }

  public updateViewport(viewport: any) {
    this.setState({ viewport });
  }

  public render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={this.updateViewport}
      >
        {this.props.tripsList.map((item, index) => {
          const active = index === this.props.activeItemIndex;
          return (
            <>
              <Marker
                className={active ? "marker__active" : undefined}
                longitude={item.startStationLongitude}
                latitude={item.startStationLatitude}
              >
                <CircleMarker
                  scale={1 + item.tripduration / 1000}
                  label={item.startStationName}
                  active={active}
                />
              </Marker>
              <Marker
                className={active ? "marker__active" : undefined}
                longitude={item.endStationLongitude}
                latitude={item.endStationLatitude}
              >
                <CircleMarker
                  scale={1 + item.tripduration / 1000}
                  label={item.endStationName}
                  active={active}
                />
              </Marker>
            </>
          );
        })}
      </ReactMapGL>
    );
  }
}

export default Map;
