import { authGuard } from "../../utilities/authGuard";
import { buildSignedInUser } from "../../utilities/buildProfile";

buildSignedInUser();

authGuard();
