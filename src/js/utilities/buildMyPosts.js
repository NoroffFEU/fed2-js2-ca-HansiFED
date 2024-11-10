/**
 * Builds and renders a list of blog posts on the home page for the user's posts.
 *
 * @function buildMyPosts
 * @param {Array} blogPost - An array of blog post objects to be displayed.
 * @param {Object} blogPost[].media - The media object associated with the post.
 * @param {string} blogPost[].media.url - The URL of the media for the post.
 * @param {string} blogPost[].media.alt - The alt text for the media.
 * @param {string} blogPost[].title - The title of the blog post.
 * @param {string} blogPost[].id - The unique identifier for the blog post.
 * @description
 * This function takes an array of blog post objects and dynamically creates
 * a list of blog posts in the DOM. Each post is clickable and redirects
 * the user to the corresponding post page when clicked. If a media URL or
 * alt text is missing, defaults are used.
 *
 */

export function buildMyPosts(posts) {
  let postList = document.querySelector(".myBlogPosts-list");
  postList.innerHTML = "";

  posts.forEach((post) => {
    let postCard = document.createElement("div");
    let postImage = document.createElement("img");

    let postContent = document.createElement("div");
    let postTitle = document.createElement("h2");
    let postBody = document.createElement("p");
    let separatorLine = document.createElement("img");

    let postFooter = document.createElement("div");
    let footerDetails = document.createElement("div");
    let postAuthor = document.createElement("p");
    let reactionsWrapper = document.createElement("div");

    let commentsWrapper = document.createElement("div");
    let commentsIcon = document.createElement("p");
    let commentsCount = document.createElement("p");

    let postReactions = post.reactions;

    console.log(postReactions);

    postReactions.forEach((symbol) => {
      let reactionItem = document.createElement("div");
      let reactionSymbol = document.createElement("p");
      let reactionCount = document.createElement("p");

      reactionSymbol.innerHTML = symbol.symbol;
      reactionCount.innerHTML = symbol.count;

      reactionItem.append(reactionSymbol, reactionCount);

      reactionItem.className = "flex flex-col items-center";

      reactionsWrapper.append(reactionItem);

      console.log(reactionSymbol, reactionCount);

      console.log("myelements", post);
    });

    postCard.className =
      "cursor-pointer flex flex-col w-96 mb-10 transition duration-200 hover:scale-[1.10] hover:shadow-lg hover:shadow-[10px_10px_5px_3px_rgba(0,0,0,0.232)]";
    postImage.className = "h-96 w-full object-cover";
    postContent.className = "p-5 h-[200px] bg-[#151515] flex flex-col text-white";
    postTitle.className = "text-xl line-clamp-1";
    postBody.className = "line-clamp-3 text-xs";
    postFooter.className = "mt-auto flex flex-col justify-center";
    separatorLine.className = "w-full mb-2";
    footerDetails.className = "flex justify-between items-center";
    reactionsWrapper.className = "flex";
    commentsWrapper.className = "flex flex-col items-center";

    postImage.setAttribute(
      "src",
      post.media?.url ||
        "https://broadbits.com/wp-content/themes/ryse/assets/images/no-image/No-Image-Found-400x264.png"
    );
    postImage.setAttribute("alt", post.media?.alt || "No description available");
    separatorLine.setAttribute("src", "/images/line1.svg");
    separatorLine.setAttribute("alt", "Line divider for the post");
    commentsIcon.setAttribute("src", "/images/comments.svg");

    postTitle.innerHTML = `${post.title}`;
    postBody.innerHTML = `${post.body}`;
    postAuthor.innerHTML = `${post.author.name}`;
    commentsIcon.innerHTML = post._count?.comments !== 0 ? "💬" : "";
    commentsCount.innerHTML = `${post._count?.comments || ""}`;

    postCard.append(postImage);
    postCard.append(postContent);
    postContent.append(postTitle);
    postContent.append(postBody);
    postContent.append(postFooter);
    postFooter.append(separatorLine);
    postFooter.append(footerDetails);
    footerDetails.append(postAuthor);
    footerDetails.append(reactionsWrapper);
    reactionsWrapper.append(commentsWrapper);
    commentsWrapper.append(commentsIcon, commentsCount);

    postList.append(postCard);
    postCard.addEventListener("click", async () => {
      window.location.href = `/post/?id=${post.id}`;
    });
  });
}
