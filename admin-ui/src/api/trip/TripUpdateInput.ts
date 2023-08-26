import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripUpdateInput = {
  listings?: ListingWhereUniqueInput | null;
  user?: UserWhereUniqueInput;
};
