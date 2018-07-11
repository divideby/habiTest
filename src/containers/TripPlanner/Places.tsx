import * as React from "react";
import styled from "styled-components";

class Places extends React.Component<{}, any> {
  public render() {
    const places = [1, 2, 3, 4];
    return (
      <PlacesView>
        {places.map(() => (
          <Place>
            <div>hey</div>
          </Place>
        ))}
      </PlacesView>
    );
  }
}

export default Places;

const PlacesView = styled.div`
  width: 300px;
  outline-style: none;
  box-shadow: none;
`;

const Place = styled.div``;
