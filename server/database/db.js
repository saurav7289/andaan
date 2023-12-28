import mongoose from 'mongoose';

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('database connected successfully');
  } catch (error) {
    console.log('error while connecting with database', error);
  }
};
export default connection;