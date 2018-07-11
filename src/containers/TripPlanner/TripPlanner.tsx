import * as React from "react";
import Map from "./Map";
import Places from "./Places";

export default class TripPlanner extends React.Component<{}, any> {
  public render() {
    return (
      <div>
        <Map />
        <Places />
      </div>
    );
  }
}
