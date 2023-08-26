import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  description: string | null;
  id: string;
  listingCreatedBy: string | null;
  locationData: JsonValue;
  locationType: string | null;
  mapData: JsonValue;
  photos: JsonValue;
  placeSpace: JsonValue;
  placeType: string | null;
  price: number | null;
  title: string;
  trip?: Trip | null;
  updatedAt: Date;
  wishlists?: Array<Wishlist>;
};
