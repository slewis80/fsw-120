import React from "react";
import BlogPostData from "./BlogPostData";
import BlogPost from "./BlogPost";

function BlogList() {
    const postItem = BlogPostData.map(function(post) {
        return <BlogPost title={post.title} subTitle={post.subTitle} author={post.author} date={post.date}/>
      })

    return (
        <main>
        <div>
            <div>
                {postItem}
            </div>
        </div>
        {/* mostly copied from website and modified for React... */}
          <div className="clearfix">
          <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>
        </main>
    )
}

export default BlogList; 