import React,{useState} from 'react';
import PostContext from "./PostContext";

function PostsState(props) {
    
   const Host = "http://localhost:5000/";
   const postsInitial = []

    // Fetch All Potes Client Side
    const getPost = async ()=>{
      // Call to Api
      const response = await fetch(`${Host}api/post/fetchallpost`, {
        method: "GET",
        headers: {"Content-Type": "application/json",
                  "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2Y2Y1NGQ0NDc1ODE5ODRmMzdiZmJiIn0sImlhdCI6MTY2ODE4OTg3MX0.qDZ2rAUJzBbaVKC7tqKUeaW3HVUp0cJsdsIBRjxjw8Y"
                }
      });
      const json = await response.json();
      setPosts(json);
      console.log(json)
    };
    
   
    const [posts, setPosts] = useState(postsInitial);

      // Add Post 
    const createPosts = async (title, message, tag, creator)=> {
      //Api call Create Post.
      const response = await fetch(`${Host}api/post/createpost`, {
        method: 'POST', 
        mode: 'cors',
        headers: {
          'Content-Type': "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2Y2Y1NGQ0NDc1ODE5ODRmMzdiZmJiIn0sImlhdCI6MTY2ODE4OTg3MX0.qDZ2rAUJzBbaVKC7tqKUeaW3HVUp0cJsdsIBRjxjw8Y",
        },

        body: JSON.stringify({title, message, tag, creator}) 
      });
      const post = await response.json();
      setPosts(posts.concat(post))
    };

    // Delete post 
    const deletePost = async (id)=> {
      //API CALL Delete Notes
      const response = await fetch(`${Host}api/post/deletepost/${id}`, {
        method: "DELETE",
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2Y2Y1NGQ0NDc1ODE5ODRmMzdiZmJiIn0sImlhdCI6MTY2ODE4OTg3MX0.qDZ2rAUJzBbaVKC7tqKUeaW3HVUp0cJsdsIBRjxjw8Y",
        },
      });
      const json = await response.json();
      console.log(json);

      //logic of delete post.
      const newPosts = posts.filter((post)=> {
        return post._id !== id
      })
      setPosts(newPosts);
    };

    // Edit post 
    const editPost = async (id, title, message, tag, creator,)=> {
      //Api call update post.
      const response = await fetch(`${Host}api/post/updatepost/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2Y2Y1NGQ0NDc1ODE5ODRmMzdiZmJiIn0sImlhdCI6MTY2ODE4OTg3MX0.qDZ2rAUJzBbaVKC7tqKUeaW3HVUp0cJsdsIBRjxjw8Y",
        },

        body: JSON.stringify({title, message, tag, creator}) 
      });
      const json = await response.json();
      console.log(json)

      let Newpost = JSON.parse( JSON.stringify(posts));
      for (let index = 0; index < Newpost.length; index++) {
        const element = Newpost[index];
        if (element._id === id) {
          Newpost[index].title = title;
          Newpost[index].message = message;
          Newpost[index].tag = tag;
          Newpost[index].creator = creator;
          break;
        }
      }
      setPosts(Newpost);
    };

  return (
    <PostContext.Provider value={{posts, createPosts, deletePost, editPost, getPost}}>
        {props.children}
    </PostContext.Provider>
  );
}

export default PostsState;
