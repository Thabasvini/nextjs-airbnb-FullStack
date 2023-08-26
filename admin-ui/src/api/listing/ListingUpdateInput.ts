import { InputJsonValue } from "../../types";

export type ListingUpdateInput = {
  description?: string | null;
  listingCreatedBy?: string | null;
  locationData?: InputJsonValue;
  locationType?: string | null;
  mapData?: InputJsonValue;
  photos?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string | null;
  price?: number | null;
  title?: string;
};
