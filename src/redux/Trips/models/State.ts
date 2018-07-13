import { TripEntity } from "./TripEntity";
export interface State {
  list: TripEntity[];
  loading: boolean;
  error: object;
}
