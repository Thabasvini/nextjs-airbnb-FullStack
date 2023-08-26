import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripCreateInput = {
  listings: ListingWhereUniqueInput | null;
  user: UserWhereUniqueInput;
};
