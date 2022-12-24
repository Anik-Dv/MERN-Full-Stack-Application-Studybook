import React from "react";
import Chat from "./Chat";
import Createposts from "./Createpost";
import "./css/Home.css";
import Post from "./Post";
function Home(props) {
   
    return (
        <>
            {/* <div className="blob"></div> */}
            <div className="section">
                <div className="container">
                    <div className="container text-center">
                        <div className="row">
                            <div className="d-flex justify-content-between">
                                <div className="container d-flex  justify-content-center ">
                                    <div className="profile-card">
                                        <div className="upper">
                                            <img
                                                src="https://st3.depositphotos.com/1005147/33512/i/600/depositphotos_335122370-stock-photo-beautiful-blonde-woman-in-sunglasses.jpg"
                                                className="img-fluid"
                                                width="230"
                                                alt="user-banner"
                                            />
                                        </div>

                                        <div className="user text-center">
                                            <div className="profile">
                                                <img
                                                    src="https://st.depositphotos.com/1137241/3726/i/600/depositphotos_37263133-stock-photo-bright-fashion-girl.jpg"
                                                    className="rounded-circle"
                                                    width="90"
                                                    alt="user-profile"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-2 text-center">
                                            <h4 className="mb-0">Anik Dev</h4>
                                            <span className="text-lg d-block mb-2">
                                                Web Developer
                                            </span>

                                            <small className="bio-id">
                                                I'd love to change the world, but they won’t give me the
                                                source code.
                                            </small>

                                            <div className="d-flex justify-content-between align-items-center mt-2">
                                                <div className="stats">
                                                    <h6 className="mb-0">Post</h6>
                                                    <span>185</span>
                                                </div>
                                                <div className="vr"></div>

                                                <div className="stats">
                                                    <h6 className="mb-0">Followers</h6>
                                                    <span>14.7k</span>
                                                </div>
                                                <div className="vr"></div>

                                                <div className="stats">
                                                    <h6 className="mb-0">Following</h6>
                                                    <span>800</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="side-menu">
                                                <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
                                                    <li className="nav-item">
                                                        <span>
                                                            <i className="fas fa-home" style={{ paddingRight: "8px" }}></i>
                                                        </span>
                                                        <a className="nav-link-1" href="/"> Feed </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <i className="fas fa-users" style={{ paddingRight: "3px" }}
                                                        ></i>
                                                        <a className="nav-link-s" href="/"> Connections </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <i className="fas fa-globe-europe" style={{ paddingRight: "8px" }}></i>
                                                        <a className="nav-link-3" href="/">
                                                            Latest News
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <i className="far fa-calendar-alt" style={{ paddingRight: "8px" }}></i>
                                                        <a className="nav-link-4" href="/">
                                                            Events
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <i className="far fa-comments" style={{ paddingRight: "8px" }}></i>
                                                        <a className="nav-link-5" href="/">
                                                            Groups
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <i className="fas fa-bell" style={{ paddingRight: "8px" }}
                                                        ></i>
                                                        <a className="nav-link-6" href="/">
                                                            Notifications
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <i className="fas fa-cog" style={{ paddingRight: "8px" }}
                                                        ></i>
                                                        <a className="nav-link-7" href="/">
                                                            Settings
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Side Menu section Closed here */}
                                <div className="container-sd">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <div className="container bootdey">
                                                <div className="col-md-12 bootstrap snippets">
                                                    <div className="panel">
                                                        <img className="profile-pic mr-1 my-1" src="https://st.depositphotos.com/1137241/3726/i/600/depositphotos_37263133-stock-photo-bright-fashion-girl.jpg" alt="post_img" />
                                                        <div className="flex-columns">
                                                            <h3 className="mb-0 font-weight-normal" style={{ "color": "white" }}>Camilla Perez</h3>
                                                            
                                                            <span>
                                                                <select name="privacy" className="privacy">
                                                                    <option>Public post</option>
                                                                    <option>Private post</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <Createposts showAlert={props.showAlert}/>
                                                </div>
                                                </div>
                                                <hr className="my-3"/>
                                                <Post/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 3rd container here  */}
                                <div className="container-last">
                                    <div className="row">
                                        <div className="col-xs-2">

                                            <div className="containers">
                                                <h2 className="h-line mb-2">Who to follow</h2>
                                                <div className="card-s">
                                                    <img className="card-s__image card-s__images" src="https://img.favpng.com/24/20/16/smile-tooth-dimple-face-png-favpng-hu7btEA1AwuwFzh8uJyrG0360.jpg" alt="Person" />

                                                    <div className="grid-container">

                                                        <div className="grid-child-posts">
                                                            <a className="mb-0 card-s__name" href="/">Etey-Grace</a>
                                                            <p className="mb-0 card-s-text"><small className="text-muted">News anchor</small></p>
                                                        </div>

                                                        <div className="grid-followers-btn">
                                                            <button type="button" className="btn btn-outline-danger"><i className="fas fa-user-plus"></i></button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            {/* 2nd-member-Request-Card */}
                                            <div className="containers">
                                                <div className="card-s">
                                                    <img className="card-s__image card-s__images" src="https://images.unsplash.com/photo-1560365163-3e8d64e762ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNtaWxpbmclMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Person" />

                                                    <div className="grid-container">

                                                        <div className="grid-child-posts">
                                                            <a className="mb-0 card-s__name" href="/">Etey-Grace</a>
                                                            <p className="mb-0 card-s-text"><small className="text-muted">News anchor</small></p>
                                                        </div>

                                                        <div className="grid-followers-btn">
                                                            <button type="button" className="btn btn-outline-danger"><i className="fas fa-user-plus"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            {/* 3rd-member-Request-Card */}
                                            <div className="containers">
                                                <div className="card-s">
                                                    <img className="card-s__image card-s__images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9kXu0mGB_nuM-wPsCYf9V1u8SZZBst1WKoBt82JDFt_cHBwg64qn4wYmVzLCZV5VnAw&usqp=CAU" alt="Person"/>
                                                    <div className="grid-container">
                                                        <div className="grid-child-posts">
                                                            <a className="mb-0 card-s__name" href="/">Etey-Grace</a>
                                                            <p className="mb-0 card-s-text"><small className="text-muted">News anchor</small></p>
                                                        </div>
                                                        <div className="grid-followers-btn">
                                                            <button type="button" className="btn btn-outline-danger"><i className="fas fa-user-plus"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            {/* 4th-member-Request-Card */}
                                            <div className="containers">
                                                <div className="card-s">
                                                    <img className="card-s__image card-s__images" src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Girl-Free-PNG-Image.png" alt="Person" />
                                                    <div className="grid-container">
                                                        <div className="grid-child-posts">
                                                            <a className="mb-0 card-s__name" href="/">Etey-Grace</a>
                                                            <p className="mb-0 card-s-text"><small className="text-muted">News anchor</small></p>
                                                        </div>

                                                        <div className="grid-followers-btn">
                                                            <button type="button" className="btn btn-outline-danger"><i className="fas fa-user-plus"></i></button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            {/* 5th-member-Request-Card */}
                                            <div className="containers">
                                                <div className="card-s">
                                                    <img className="card-s__image card-s__images" src="https://st.depositphotos.com/1137241/3726/i/600/depositphotos_37263133-stock-photo-bright-fashion-girl.jpg" alt="Person" />

                                                    <div className="grid-container">

                                                        <div className="grid-child-posts">
                                                            <a className="mb-0 card-s__name" href="/">Etey-Grace</a>
                                                            <p className="mb-0 card-s-text"><small className="text-muted">News anchor</small></p>
                                                        </div>

                                                        <div className="grid-followers-btn">
                                                            <button type="button" className="btn btn-outline-danger"><i className="fas fa-user-plus"></i></button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="view-Btn">
                                                <div className="d-grid gap-2">
                                                    <button type="button" className="btn btn-outline-primary my-2 mx-2"
                                                        style={{ "--bs-btn-padding-y": ".25rem", "--bs-btn-padding-x": ".5rem", "--bs-btn-font-size": ".75rem" }}>
                                                        view more
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Chat/>
                            
                            {/* Footer section here */}
                            <footer className="footer">
                            <section className="footer_section">
                            <h1>Footer</h1>
                            </section>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
