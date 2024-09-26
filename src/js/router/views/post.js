import { readSinglePost } from "../../api/post/read";
import { buildSinglePost } from "../../utilities/buildSinglePost";

const readPost = await readSinglePost();
buildSinglePost(readPost);
