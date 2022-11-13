const router = require("express").Router();
const Post = require("../models/Post");
const validateForm = require("../requestValidation");

router.post("/create", async (req, res) => {
  const data = req.body;

  const { error } = validateForm(data);
  if (error) return res.status(400).send(error.details[0].message);

  console.log(req.body);

  const post = new Post({
    name: data.name,
    emailOfDeveloper: data.emailOfDeveloper,
    address: data.address,
    github: data.github,
    text: data.text,
  });

  try {
    await post.save();
    res.send("Post created");
  } catch (error) {
    res.json({ message: error });
  }
});
router.get("/", async (req, res) => {
  const posts = await Post.find({}).sort({ $natural: -1 });
  res.json(posts);
});

module.exports = router;
