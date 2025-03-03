import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({
    path:"../.env"

})
dotenv.config();
 // Load environment variables

const uri = process.env.MONGO_URI;

if (!uri) {
  console.error('Error: MONGO_URI is undefined');
  process.exit(1); // Stop execution if URI is missing
}

const databaseConnection = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
export default databaseConnection;