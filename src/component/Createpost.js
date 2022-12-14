import {useContext, useState} from 'react';
import "./css/createPost.css";
import PostContext from "../Context/post/PostContext";

function Createposts (props) {

    // import PostContext/ usecontext
    const Context = useContext(PostContext);
    const {createPosts} = Context;
    const [post, setPost] = useState({title:"", message:"", tag:"", creator:""});

    //submit button input client side submit function
    // const handleClick = (e)=> {
    //     e.preventDefault();
    //     createPosts(post.title, post.message, post.tag, post.creator)
    //     setPost({title:"", message:"", tag:"", creator:""})
    //     props.showAlert("Post Created Successfuly", "success")
    // };
    // console.log(handleClick,"Post Created")

    const handleClick = (e)=> {
        e.preventDefault();
        createPosts(post.title, post.message, post.tag, post.creator)
    }
    const onChange = (e)=> {
        setPost({ ...post, [e.target.name]: e.target.value})
    }

    return (
        <>
            <div className="d-flex">
                <div className="p-2 flex-fill">
                    <div className="row">

                        <div className="section full-height">
                            <input className="modal-btn btn-close-white" type="checkbox" id="modal-btn" name="modal-btn" />
                            <label htmlFor="modal-btn">Create Post &nbsp;<i className="fas fa-mouse"></i></label>
                            <div className="modal">
                                <div className="modal-wrap">
                                    <h3 className='my-1' style={{ "color": "white", "fontWeight": "bold" }}>Create a Creative Post</h3>
                                    <hr style={{ "color": "white", "fontWeight": "bold" }} />
                                    <form>
                                        <div className="panel-body">
                                            <div className="col-md">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="title" name="title" placeholder="type post title here"  onChange={onChange} required minLength={4} value={post.title} />
                                                    <label htmlFor="floatingInputGrid">Type Title</label>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a comment here" id="message" name="message" onChange={onChange} required minLength={4} value={post.message} style={{ "height": "130px" }}></textarea>
                                                <label htmlFor="floatingTextarea2">What are you thinking?</label>
                                            </div>
                                            <hr />
                                            <div className="row g-2">
                                                <div className="col-md">
                                                    <div className="form-floating">
                                                        <input type="tag" className="form-control" id="tag" name="tag" placeholder="type #tag name here"  onChange={onChange}  minLength={2} value={post.tag} />
                                                        <label htmlFor="floatingInputGrid">Type Tag</label>
                                                    </div>
                                                </div>
                                                <div className="col-md">
                                                    <div className="form-floating">
                                                        <select className="form-select" id="creator" name="creator" required onChange={onChange} value={post.creator}>
                                                            <option select="true" >Author</option>
                                                            <option >Page</option>
                                                            <option >Profile</option>
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid">Selects Creator</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mar-top clearfix">
                                                <span className="btn btn-trans btn-icons">
                                                    <label htmlFor="up-video" className="up-video"><i className="f-icon fas fa-video mx-1 my-1"></i>Choose a Video:</label>
                                                    <input type="file" className="inp-video" name="myfile" />
                                                </span>
                                                <span className="btn btn-trans btn-icons"><label htmlFor="up-video" className="up-video"><i className="f-icon fas fa-photo-video mx-1 my-1"></i>Choose a Image:</label>
                                                    <input type="file" className="inp-video" name="myfile" accept="image/png, image/jpeg" /></span>

                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                    <defs>
                                                        <filter id="gooey">
                                                            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                                                            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                                                            <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                                                        </filter>
                                                    </defs>
                                                </svg>
                                                <button id="gooey-button" type='submit' onClick={handleClick}>
                                                    Create Post
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
                                    </form>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Createposts;
