import { TripEntity } from "./TripEntity";
export interface TripsState {
  list: TripEntity[];
  loading: boolean;
  error: object;
}
