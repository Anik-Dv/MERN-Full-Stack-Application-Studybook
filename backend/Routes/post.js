const express = require("express")
const router = express.Router();
const { body, validationResult } = require("express-validator");
//import Models posts
const postMessage = require("../models/postMessage");
//import middleware 
const fatchuserdata = require("../middleware/fatchuserdata");
const app = express();


// Creating Route: 1 - User create a New post, Using : POST "/api/post/createpost". Must be Login required.

router.post("/createpost", fatchuserdata, [
    //Add New Posts.
    body("title", "title must be 3 charecters").isLength({ min: 3 }),
    body("message", "description must be atleast 5 charecters").isLength({ min: 5 }),
    body("tag", "Add a Tag"),
    body("creator", "Add Creator Name"),
    body("likeCount").isNumeric({ num: 200 }),
    body("createdAt", "Created Time").isDate()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors) {
            return res.status(400).json({ errors: errors.array() });
        };
        //User Add a New Note Using Title, Descripttion and Tag.
        const { title, message, tag, creator, likeCount, createdAt } = req.body;
        const post = new postMessage({
            title,
            message,
            tag,
            creator,
            likeCount,
            createdAt,
            user: req.user.id,

        })
        //Create a save Note Mathod when
        const savePost = await post.save();
        res.json(savePost)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Saver Error");
    }

});

//Creating Route: 2 - Updating Post User update his Posts, Using : PUT "/api/post/updatepost/:id". Must be Login required.
router.put("/updatepost/:id", fatchuserdata, async (req, res) => {

    const { title, message, tag, creator } = req.body;
    try {
        const newPost = {} // This is a Object.
        //User Update This Part When User Need to Update.
        if (title) {
            newPost.title = title;
        };
        if (message) {
            newPost.message = message;
        };
        if (tag) {
            newPost.tag = tag;
        }
        if (creator) {
            newPost.creator = creator;
        };
        //Find User Post What he Update?
        let post = await postMessage.findById(req.params.id);
        //when Not find any notes then showing this error.
        if (!post) {
            return res.status(404).send("not found anything!");
        }
        //user can only update allowed her/his Post.
        if (post.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed!")
        }
        //Find Post and send the new posts and Update as a response.
        post = await postMessage.findByIdAndUpdate(
            req.params.id,
            { $set: newPost },
            { new: true }
        )
        res.json({ post });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
});

//Creating Route: 3  - Deleting Note User delete his note, Using : delete "/api/post/deletepost/:id". Must be Login required.
router.delete("/deletepost/:id", fatchuserdata, async (req, res) => {
    try {
        let post = await postMessage.findById(req.params.id);
        if (!post) {
            return res.status(404).send("Not Found Anything!")
        };
        //user can only delete allowed to his/her Posts.
        if (post.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed!");
        };
        //Find Post and delete the posts.
        post = await postMessage.findByIdAndDelete(req.params.id);
        res.json({ Success: "Your Post has been deleted", post: post });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something Error Occured");
    }
});

//Creating Route: 4  - GET Fetch User All Posts, Using : GET "/api/post/fetchallpost". Login required.
try {
    router.get("/fetchallpost", fatchuserdata, async(req, res) => {
        const post = await postMessage.find({ user: req.user.id });
        res.json( post );
    });
} catch (error) {
    console.log(error.message);
    res.status(500).send("Somthing Error Occured");
}







module.exports = router;