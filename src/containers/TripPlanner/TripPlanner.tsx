import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";

import { fetchTrips } from "../../redux/Trips/actions";
import { TripEntity } from "../../redux/Trips/models";
import Map from "./Map";
import TripsList from "./TripsList";

interface TripPlannerProps {
  tripsList: TripEntity[];
  fetchTrips: () => any;
}

class TripPlanner extends React.Component<TripPlannerProps> {
  public constructor(props: TripPlannerProps) {
    super(props);
    props.fetchTrips();
  }

  public render() {
    return (
      <TripPlannerView>
        <TripsList tripsList={this.props.tripsList} />
        <Map />
      </TripPlannerView>
    );
  }
}

const mapStateToProps = (state: any) => ({
  tripsList: state.trips.list
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchTrips: () => dispatch(fetchTrips())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripPlanner);

const TripPlannerView = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  height: 100vh;
`;
