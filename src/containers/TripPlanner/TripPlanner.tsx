import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";

import { fetchTrips } from "../../redux/Trips/actions";
import { TripsState } from "../../redux/Trips/models";
import Map from "./Map";
import TripsList from "./TripsList";

interface TripPlannerProps {
  trips: TripsState;
  fetchTrips: () => any;
}

interface TripPlannerState {
  activeItemIndex?: number;
}

class TripPlanner extends React.Component<TripPlannerProps, TripPlannerState> {
  public state = {
    activeItemIndex: undefined
  };

  public constructor(props: TripPlannerProps) {
    super(props);
    props.fetchTrips();

    this.activateItem = this.activateItem.bind(this);
    this.deactivateItem = this.deactivateItem.bind(this);
  }

  public activateItem(activeItemIndex: number) {
    this.setState({ activeItemIndex });
  }

  public deactivateItem(itemIndex: number) {
    this.setState(
      prevState =>
        prevState.activeItemIndex === itemIndex
          ? { activeItemIndex: undefined }
          : { activeItemIndex: itemIndex }
    );
  }

  public render() {
    return (
      <TripPlannerView>
        <TripsList
          tripsList={this.props.trips.list}
          activateItem={this.activateItem}
          deactivateItem={this.deactivateItem}
        />
        <Map
          tripsList={this.props.trips.list}
          tripsLoaded={!this.props.trips.loading}
          activeItemIndex={this.state.activeItemIndex}
        />
      </TripPlannerView>
    );
  }
}

const mapStateToProps = (state: any) => ({
  trips: state.trips
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
