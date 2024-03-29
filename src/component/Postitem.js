import React, { useContext, useState } from "react";
import "./css/Postitem.css";
import PostContext from "../Context/post/PostContext";

function Postitem(props) {
  const { post, Updateposts } = props;
  const context = useContext(PostContext);
  const { deletePost } = context;

  // Like and unlike post methods
  const [state, setState] = useState(" ");
  const constructor = (props) => {
    this.super(props);
    state = {
      liked: false,
      count: 0
    };
    const handleClick = handleClick.bind(this);
  }
  
  const handleClick = ()=> {
    setState(prevState => {
      return {
        liked: !prevState.liked,
        count: !prevState.liked
      }
    });
  }
  const text = state.liked ? 'UnLike' : '👍';
  const counted = state.liked ? state.count - 1 : state.count + 1;

  return (
    <>
      {/* PostItems here  */}
      <ul className="Vcards">
        <li>
          <div className="Vcard">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
              className="Vcard__image"
              alt=""
            />
            <div className="Vcard__overlay">
              <div className="Vcard__header">
                <svg
                  className="Vcard__arc"
                  xmlns="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
                >
                  <path />
                </svg>
                <img
                  className="Vcard__thumb"
                  src="https://st.depositphotos.com/1137241/3726/i/600/depositphotos_37263133-stock-photo-bright-fashion-girl.jpg"
                  alt=""
                />
                <div className="Vcard__header-text">
                  <h3 className="Vcard__title">Anik Dev</h3>
                  <span className="Vcard__status">{post.creator}</span>
                  <br />
                  <span className="Vcard__status">{post.createdAt}</span>
                </div>
              </div>
              <h3>{post.title}</h3>
              <span>
                <b>{post.tag}</b>
              </span>
              <p className="Vcard__description">{post.message}</p>
              <div className="LikeBtn d-md-flex justify-content-md-start-end">
                <button onClick={() => handleClick()}
                  type="button"
                  className="Post_btn btn btn-outline-info mx-2 my-2"
                >{text} <b>{counted}</b>
                  <span className="badge text-bg-danger" >
                  </span>
                </button>
                <button
                  type="button"
                  className="Post_btn btn btn-outline-success mx-2 my-2"
                  onClick={() => {
                    Updateposts(post);
                  }}
                >
                  <i className="far fa-edit"></i> Edit Post
                </button>
                <button
                  type="button"
                  className="Post_btn btn btn-outline-danger mx-3 my-2"
                  onClick={() => {
                    deletePost(post._id);
                  }}
                >
                  <i className="fas fa-trash"></i> Delete Post
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Postitem;
