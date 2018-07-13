import * as React from "react";
import styled from "styled-components";
import { TripEntity } from "../../redux/Trips/models";

interface TripsProps {
  tripsList: TripEntity[];
}

class TripsList extends React.Component<TripsProps> {
  public render() {
    const { tripsList } = this.props;
    return (
      <TripsListView>
        {tripsList.map(trip => (
          <Trip>
            <div />
          </Trip>
        ))}
      </TripsListView>
    );
  }
}

export default TripsList;

const TripsListView = styled.div`
  width: 300px;
  outline-style: none;
  box-shadow: none;
`;

const Trip = styled.div``;
