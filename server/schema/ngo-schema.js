import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const ngoSchema = mongoose.Schema(
  {
    name: {
      type: 'String',
      required: true,
    },
    ngoName: {
      type: 'String',
      required: true,
      unique: true,
    },
    address: {
      type: 'String',
      required: true,
    },
    city: {
      type: 'String',
      required: true,
    },
    email: {
      type: 'String',
      required: true,
      unique: true,
    },
    password: {
      type: 'String',
      required: true,
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

ngoSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

ngoSchema.pre('save', async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Ngo = mongoose.model('Ngo', ngoSchema);

export default Ngo;
