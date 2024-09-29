import { readSinglePost } from "../../api/post/read";
import { buildSinglePost } from "../../utilities/buildSinglePost";

//builds the single post page with information provided
const readPost = await readSinglePost();
buildSinglePost(readPost);
