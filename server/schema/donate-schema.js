import mongoose from 'mongoose';

const donateSchema = mongoose.Schema(
  {
    name: {
      type: 'String',
    },
    restruantName: {
      type: 'String',
    },
    foodType: {
      type: 'String',
    },
    foodQty: {
      type: 'Number',
    },
    date: {
      type: 'String',
    },
    time: {
      type: 'String',
    },
    address: {
      type: 'String',
    },
    city: {
      type: 'String',
    },
    zipCode: {
      type: 'Number',
    },
    pic: {
      type: 'String',
      default: 'https://icon-library.com/images/avatar-icon/avatar-icon-5.jpg',
    },
    email: {
      type: 'String',
    },
    mobile: {
      type: 'Number',
    },
    // location: {
    //   type: { type: String, default: 'Point' },
    //   coordinates: [Number],
    // },
  },
  {
    timestamps: true,
  }
);

const Donate = mongoose.model('Donate', donateSchema);

export default Donate;
