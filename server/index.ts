import mongoose from 'mongoose';

const config = useRuntimeConfig();
mongoose.set('strictQuery', false);

export default async () => {
  try {
    await mongoose.connect(config.mongoUrl);
    console.log('DB connection established.');
  } catch (err) {
    console.error('DB connection failed.', err);
  }
};
