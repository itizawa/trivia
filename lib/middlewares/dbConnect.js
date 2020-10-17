import mongoose from 'mongoose';

const connection = {};
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/trivia';

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(mongoUri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
