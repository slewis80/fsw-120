import React from "react";
import BlogPostData from "./BlogPostData";

function BlogPost(props) {

    return (
        // What I started... 
        
        // <div id="postPreview">
        //     <div id="blogHeaders">
        //         <h2>{props.title}</h2>
        //         <h3>{props.subTitle}</h3>
        //     </div>
        //     <span className="span" id="author">Posted by {props.author}</span>
        //     <span className="span" id="date"> on {props.date}</span>
        // </div>

        // mostly copied from website and modified for React...
        <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-10 mx-auto">
        <div className="post-preview">
          <a href="">
            <h2 className="post-title">
            {props.title}
            </h2>
            <h3 className="post-subtitle">
            {props.subTitle}
            </h3>
          </a>
          <p className="post-meta">Posted by 
            <a href="#"> {props.author} </a>
            on {props.date} </p>
        </div>
        <hr/>
      </div>
    </div>
  </div>
    )
};

export default BlogPost; 