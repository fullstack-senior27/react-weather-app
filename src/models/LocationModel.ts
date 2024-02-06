import {
  EmptyLocationPositionModel,
  LocationPositionModel,
} from "./LocationPositionModel";

export interface LocationModel {
  city: string;
  position: LocationPositionModel;
  // country: string;
  // locality: string;
}

export const EmptyLocationModel = {
  city: "Tokyo",
  position: EmptyLocationPositionModel,
  // country: "",
  // locality: "",
};