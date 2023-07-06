import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import usersRoute from './routes/users.js';
import cookieParser from 'cookie-parser';

// variables
const app = express();

dotenv.config();

//Method to connect to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MongoDb !');
  } catch (error) {
    return;
  }
};

//listener for database disconnect
mongoose.connection.on('disconnected', () => {
  console.log('MongoDb disconnected !');
});

//listener for database connected
mongoose.connection.on('connected', () => {
  console.log('MongoDb connected !');
});

//middleware
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

//Error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

//Database connection
app.listen(8800, () => {
  connect();
  console.log('Connected to server !');
});
