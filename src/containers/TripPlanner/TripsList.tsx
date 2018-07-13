import * as React from "react";
import styled from "styled-components";
import { TripEntity } from "../../redux/Trips/models";

interface TripsProps {
  tripsList: TripEntity[];
  activateItem: (activeItemIndex: number) => void;
  deactivateItem: (deactiveItemIndex: number) => void;
}

class TripsList extends React.Component<TripsProps> {
  public constructor(props: TripsProps) {
    super(props);
  }

  public handleLeave(itemIndex: number) {
    this.props.deactivateItem(itemIndex);
  }

  public handleEnter(activeItemIndex: number) {
    this.props.activateItem(activeItemIndex);
  }

  public render() {
    const { tripsList } = this.props;
    return (
      <TripsListView>
        {tripsList.map((trip, index) => (
          <Trip
            onMouseLeave={() => this.handleLeave(index)}
            onMouseEnter={() => this.handleEnter(index)}
          >
            <div>
              {trip.starttime}: {trip.startStationName}
            </div>
            <div>
              {trip.stoptime}: {trip.endStationName}
            </div>
            <div>{trip.tripduration}</div>
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
  padding: 10px;
  overflow-y: auto;
`;

const Trip = styled.div`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;
