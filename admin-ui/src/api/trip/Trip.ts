import { Listing } from "../listing/Listing";
import { User } from "../user/User";

export type Trip = {
  createdAt: Date;
  id: string;
  listings?: Listing | null;
  updatedAt: Date;
  user?: User;
};
