import mongoose from 'mongoose';

const ngoHotelSchema = mongoose.Schema(
  {
    restruantId: {
      type: 'String',
    },
    restruantName: {
      type: 'String',
    },
    foodQty: {
      type: 'String',
    },
    foodType: {
      type: 'String',
    },
    ngoId: {
      type: 'String',
    },
    ngoName: {
      type: 'String',
    },
  },
  {
    timestamps: true,
  }
);

const Ngohotel = mongoose.model('Ngohotel', ngoHotelSchema);

export default Ngohotel;
