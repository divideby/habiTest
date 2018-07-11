import { PlaceEntity } from "./PlaceEntity";
export interface State {
    list: PlaceEntity[];
    loading: boolean;
    error: any;
};