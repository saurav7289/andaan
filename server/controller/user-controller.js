import Ngo from '../schema/ngo-schema.js';
import Donate from '../schema/donate-schema.js';
import Ngohotel from '../schema/ngoHotelSchema.js';
import { generateToken } from '../database/generateToken.js';
import nodemailer from 'nodemailer';

// ngo login api
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // if (!email || !password) {
    //   return res.status(400).json('Enter NgoId or password');
    // }

    const ngoUser = await Ngo.findOne({ email });
    if (!ngoUser) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const checkPassword = await ngoUser.matchPassword(password);
    if (!checkPassword) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    return res.status(200).json({
      _id: ngoUser._id,
      token: generateToken(ngoUser._id),
    });

    // if (ngoUser) {
    //   const checkPassword = await ngoUser.matchPassword(password);
    //   if (!checkPassword) {
    //     return res.status(400).json('Incorrect Ngoid or Password');
    //   } else {
    //     return res.status(200).json({
    //       _id: ngoUser._id,
    //       token: generateToken(ngoUser._id),
    //     });
    //   }
    // } else {
    //   return res.status(400).json('Incorrect Ngoid or Password');
    // }

    // if (ngoUser && (await ngoUser.matchPassword(password))) {
    //   return res.status(200).json({
    //     _id: ngoUser._id,
    //     token: generateToken(ngoUser._id),
    //   });
    // } else {
    //   return res.status(400).json('Incorrect Ngoid or Password');
    // }
  } catch (error) {
    res.status(500).send('server error');
  }
};

// ngo register api
export const register = async (req, res) => {
  const { name, ngoName, email, address, city, password } = req.body;
  try {
    if (!name || !ngoName || !email || !address || !city || !password) {
      res.status(400).json('All fields are mandatory');
    } else {
      const checkemail = await Ngo.findOne({ email });
      if (checkemail) {
        return res.status(400).json('Email already exits');
      }

      const checkName = await Ngo.findOne({ ngoName });
      if (checkName) {
        return res.status(400).json('Ngo already exits');
      }

      const createNgo = await Ngo.create({
        name,
        ngoName,
        email,
        address,
        city,
        password,
      });

      if (createNgo) {
        return res.status(201).json({
          id: createNgo._id,
          token: generateToken(createNgo._id),
        });
      } else {
        return res.status(400).json('server error ngo not created');
      }
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

// hotel register api
export const donate = async (req, res) => {
  const {
    name,
    restruantName,
    foodType,
    foodQty,
    mobile,
    time,
    date,
    pic,
    email,
    address,
    city,
    zipCode,
  } = req.body;

  try {
    if (
      !name ||
      !restruantName ||
      !foodType ||
      !foodQty ||
      !mobile ||
      !time ||
      !date ||
      !email ||
      !address ||
      !city ||
      !zipCode
    ) {
      res.status(400).json('All Field are mandatory');
    }

    const hotelCreate = await Donate.create({
      name,
      restruantName,
      foodType,
      foodQty,
      mobile,
      time,
      date,
      pic,
      email,
      address,
      city,
      zipCode,
    });
    if (hotelCreate) {
      res.status(201).json({
        _id: hotelCreate._id,
      });
    } else {
      res.status(400).json('Failed to created new user');
    }
  } catch (error) {
    console.log(error);
  }
};

//get all hotel api
export const hotels = async (req, res) => {
  try {
    const getHotels = await Donate.find({});
    if (getHotels) {
      return res.status(200).json(getHotels);
    } else {
      return res.status(400).json('db is empty');
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

// remove hotel
export const removeHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteHotel = await Donate.findByIdAndDelete(id);
    if (!deleteHotel) {
      return res.status(400).json(`data not deleted at id ${id}`);
    }
    res.status(200).send('deleted');
  } catch (error) {
    return res.status(400).json(error);
  }
};

// add ngo hotel
export const ngoHotel = async (req, res) => {
  try {
    const { id1, id2 } = req.params;

    const getHotel = await Donate.findById(id1);

    const getNgo = await Ngo.findById(id2);

    const createNgoHotel = await Ngohotel.create({
      restruantId: getHotel._id,
      restruantName: getHotel.restruantName,
      foodQty: getHotel.foodQty,
      foodType: getHotel.foodType,
      ngoId: getNgo._id,
      ngoName: getNgo.ngoName,
    });
    if (!createNgoHotel) {
      res.status(400).json('not created');
    }
    res.status(201).json('created');
  } catch (error) {
    res.status(400).json(error);
  }
};

// get ngo-hotel data
export const getNgoHotel = async (req, res) => {
  try {
    const getHotels = await Ngohotel.find({});
    if (getHotels) {
      return res.status(200).json(getHotels);
    } else {
      return res.status(400).json('db is empty');
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

// send mail
export const sendMail = async (req, res) => {
  try {
    const { id1, id2 } = req.params;
    console.log(id1);
    const getHotel = await Donate.findById(id1);
    const getNgo = await Ngo.findById(id2);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    const info = await transporter.sendMail({
      from: '"Andaan" <andaankutumb@gmail.com>', // sender address
      to: getHotel.email, // receivers
      subject: 'Hello ' + getHotel.restruantName,
      html:
        '<center><b><font color="#FF7C0C" size="5" face="verdana">Andaan</font></b></center><br>Your food' +
        '( ' +
        '🥗' +
        getHotel.foodType +
        ' )' +
        ' is Accepted by an Ngo, They will collect food as per mention time  ' +
        '📅' +
        getHotel.date +
        ' &nbsp;&nbsp;' +
        '⏰' +
        getHotel.time +
        '<br><br><b>NGO - </b>' +
        getNgo.ngoName,
    });
    if (info.messageId) {
      res.status(200).json('mail send successfully...');
    } else {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
