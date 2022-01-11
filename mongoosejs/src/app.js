const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/shahrukh")
  .then(() => console.log("Connection Successfull...."))
  .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
  name: String,
  city: String,
  videos: Number,
  author: String,
  active: Boolean,
});

const Playlist = new mongoose.model("Playlist", playlistSchema);

//Create Document
const createDocument = async () => {
  try {
    const htmlPlaylist = new Playlist({
      name: "HTML",
      city: "Isb",
      videos: 50,
      author: "Shahrukh",
      active: true,
    });
    const cssPlaylist = new Playlist({
      name: "CSS",
      city: "Isb",
      videos: 30,
      author: "Shahrukh",
      active: true,
    });
    const jsPlaylist = new Playlist({
      name: "JavaScript",
      city: "Isb",
      videos: 90,
      author: "Shahrukh",
      active: true,
    });
    const reactPlaylist = new Playlist({
      name: "React",
      city: "Isb",
      videos: 40,
      author: "Shahrukh",
      active: true,
    });

    const result = await Playlist.insertMany([
      htmlPlaylist,
      cssPlaylist,
      jsPlaylist,
      reactPlaylist,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();
