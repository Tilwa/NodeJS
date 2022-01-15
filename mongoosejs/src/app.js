const mongoose = require("mongoose");
const validator = require("validator");
mongoose
  .connect("mongodb://localhost:27017/shahrukh")
  .then(() => console.log("Connection Successfull...."))
  .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: [3, "Atlest minimum 3 letter must added"],
    maxlength: 30,
  },
  city: {
    type: String,
    required: true,
    enum: ["isb", "rwp", "kpk"],
  },

  videos: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Videos count should not be negative");
      }
    },
  },
  author: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is inVaild");
      }
    },
  },
  active: Boolean,
});

const Playlist = new mongoose.model("Playlist", playlistSchema);

//Create Document
const createDocument = async () => {
  try {
    // const htmlPlaylist = new Playlist({
    //   name: "HTML",
    //   city: "Isb",
    //   videos: 50,
    //   author: "Shahrukh",
    //   active: true,
    // });
    // const cssPlaylist = new Playlist({
    //   name: "CSS",
    //   city: "Isb",
    //   videos: 30,
    //   author: "Shahrukh",
    //   active: true,
    // });
    // const jsPlaylist = new Playlist({
    //   name: "JavaScript",
    //   city: "Isb",
    //   videos: 90,
    //   author: "Shahrukh",
    //   active: true,
    // });
    const reactPlaylist = new Playlist({
      name: "Python s",
      city: "isb",
      videos: 5,
      author: "Shahrukh",
      email: "shahrukh@gmail.com",
      active: true,
    });

    const result = await Playlist.insertMany([reactPlaylist]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();

const getDocument = async () => {
  try {
    const result = await Playlist.find({ author: "Shahrukh" })
      .select({
        name: 1,
      })
      //   .countDocuments();
      .sort({ name: -1 });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
//getDocument();

//Update the document

const updateDocument = async (_id) => {
  try {
    const result = await Playlist.findByIdAndUpdate(
      { _id },
      {
        $set: {
          name: "JS",
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
//updateDocument("61dd87bafbb5a83979cf5240");

//Delete the document

const deleteDocument = async (_id) => {
  try {
    const result = await Playlist.findByIdAndDelete({ _id });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
//deleteDocument("61dd87bafbb5a83979cf5241");
