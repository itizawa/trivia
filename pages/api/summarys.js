
// import Post from "@models/Post";
// import dbConnect from "@lib/dbConnect";

// dbConnect();

export default async(req, res) => {
  const post = async() => {
    // const { title, body, tags } = req.body;
    try {
      console.log('hoge');
      // const newPost = new Post({
      //   title,
      //   body,
      //   tags,
      // });
      // await newPost.save();
      return res.status(200).send({});
    }
    catch (err) {
      console.log(err);
      return res.status(400).send({ success: false });
    }
  };

  switch (req.method) {
    case 'POST':
      return post();
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
};
