import { readSinglePost } from "../../api/post/read";
import { setLogoutListener } from "../../ui/global/logout";
import { authGuard } from "../../utilities/authGuard";
import { buildSinglePost } from "../../utilities/buildSinglePost";
import { correctHeader } from "../../utilities/correctHeader";

correctHeader();
setLogoutListener();
authGuard();

//builds the single post page with information provided
const readPost = await readSinglePost();

buildSinglePost(readPost);
