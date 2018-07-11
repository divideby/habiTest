import * as React from "react";
import styled from "styled-components";

import Map from "./Map";
import Places from "./Places";

export default class TripPlanner extends React.Component<{}, any> {
  public render() {
    return (
      <TripPlannerView>
        <Places />
        <Map />
      </TripPlannerView>
    );
  }
}

const TripPlannerView = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  height: 100vh;
`;
