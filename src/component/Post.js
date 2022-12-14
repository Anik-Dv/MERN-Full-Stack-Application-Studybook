import React, { useContext, useEffect, useRef, useState } from "react";
// import { useNavigate } from 'react-router-dom';
import PostContext from "../Context/post/PostContext";
import Postitem from "./Postitem";
import "./css/Post.css";

function Post() {
    // const navigate = useNavigate()
    const context = useContext(PostContext);
    const { posts, getPost, editPost } = context;
    useEffect(() => {
        getPost();
        // eslint-disable-next-line
    }, []);

    const ref = useRef(null);
    const refClose = useRef(null);
    const [post, setPost] = useState({ id: "", etitle: "", emessage: "", etag: "", ecreator: "" });

    const handleClick = (e) => {
        // e.preventDefault();
        refClose.current.click();
        editPost(post.id, post.etitle, post.emessage, post.etag, post.ecreator)
        console.log("updateing post", post);

    }

    const Updateposts = (currentPost) => {
        ref.current.click();
        setPost({id:currentPost._id, etitle:currentPost.title, emessage:currentPost.message, etag: currentPost.tag, ecreator:currentPost.creator});

    }
    const onChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }


    return (
        <>
            <button ref={ref} className="btn btn-primary d-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                Edit Post
            </button>

            <div className="offcanvas offcanvas-start" style={{ "width": "800px" }} data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Edit Post</h5>
                    <button ref={refClose} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <form>
                            <div className="panel-body">
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="etitle" name="etitle" placeholder="type post title here" onChange={onChange} required minLength={4} value={post.etitle} />
                                        
                                    </div>
                                </div>
                                <hr />
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="emessage" name="emessage" onChange={onChange} required minLength={4} value={post.emessage} style={{ "height": "130px" }}></textarea>
                                </div>
                                <hr />
                                <div className="row g-2">
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="tag" className="form-control" id="etag" name="etag" placeholder="type #tag name here" onChange={onChange} required minLength={2} value={post.etag} />
                                            
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <select className="form-select" id="ecreator" name="ecreator" required onChange={onChange} value={post.ecreator}>
                                                <option select="true" >Author</option>
                                                <option >Page</option>
                                                <option >Profile</option>
                                            </select>
                                            <label htmlFor="floatingSelectGrid">Selects Creator</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mar-top clearfix">
                                    

                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        <defs>
                                            <filter id="gooey">
                                                {/* sourceGraphic */}
                                                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                                                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                                                <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                                            </filter>
                                        </defs>
                                    </svg>

                                    
                                </div>
                            </div>
                        </form>
                        <button type="button" className=" btn btn-close btn-outline-warning CPclose_btn" data-bs-dismiss="offcanvas" aria-label="Close">Close</button>
                                    <button id="gooey-button" type='submit' onClick={handleClick}>
                                        Update Post
                                        <span className="bubbles">
                                            <span className="bubble"></span>
                                            <span className="bubble"></span>
                                            <span className="bubble"></span>
                                            <span className="bubble"></span>
                                            <span className="bubble"></span>
                                            <span className="bubble"></span>
                                            <span className="bubble"></span>
                                            <span className="bubble"></span>
                                            <span className="bubble"></span>
                                            <span className="bubble"></span>
                                        </span>
                                    </button>

                    </div>
                </div>
            </div>


            <div className="my-1" style={{ color: "white" }}>
                <h3 style={{ color: "white", fontWeigth: "bold" }}>Your Posts</h3>
                {posts.length === 0 && "No Post to Display"}
                {posts.map((post) => {
                    return <Postitem key={post._id} post={post} Updateposts={Updateposts} />
                })}
            </div>
        </>
    );
}

export default Post;
