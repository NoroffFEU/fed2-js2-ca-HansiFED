import { readMyPosts, readPosts } from "../../api/post/read";
import { setLogoutListener } from "../../ui/global/logout";
import { authGuard } from "../../utilities/authGuard";
import { correctHeader } from "../../utilities/correctHeader";

correctHeader();

//Reads data and builds the home page accordingly

setLogoutListener();
readMyPosts();
readPosts();
authGuard();
