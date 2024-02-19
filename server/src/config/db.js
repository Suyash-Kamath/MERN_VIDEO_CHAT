import mongoose from "mongoose";
const mongoUri ="mongodb+srv://suyashkamath:<password>@cluster0.c6up6mj.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI || mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export { connectDB };


git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Suyash-Kamath/MERN_VIDEO_CHAT.git
git push -u origin main