import * as React from "react";
import styled, { css as styledCss } from "../theme";

interface CircleMarkerProps {
  active: boolean;
  label: string;
  scale: number;
  children?: React.ReactChild;
  className?: string;
}

class CircleMarker extends React.Component<CircleMarkerProps, {}> {
  public render() {
    return (
      <CircleMarkerView>
        <div className={this.props.className}>{this.props.children}</div>
        {this.props.active && <Label>{this.props.label}</Label>}
      </CircleMarkerView>
    );
  }
}

const StyledCircleMarker = styled(CircleMarker)`
  width: 10px;
  height: 10px;
  background-color: red;
  ${props =>
    props.active &&
    styledCss`
      background-color: green;
      z-index: 1000;
      transform: scale(${1.5 * props.scale});
  `};
  border-radius: 50%;
  opacity: 1;
  transition: all 0.5s ease-out;
`;

const CircleMarkerView = styled.div``;

const Label = styled.span`
  width: 200px;
  position: absolute;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 10px;
`;

export default StyledCircleMarker;
