const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

// Load env vars
dotenv.config();

// Connect to database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const users = [
  {
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
    phone: "+1-555-0123",
    age: 28,
  },
  {
    name: "James Wilson",
    email: "james.wilson@example.com",
    phone: "+1-555-0124",
    age: 35,
  },
  {
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    phone: "+1-555-0125",
    age: 24,
  },
  {
    name: "Liam Anderson",
    email: "liam.anderson@example.com",
    phone: "+1-555-0126",
    age: 42,
  },
  {
    name: "Olivia Thompson",
    email: "olivia.thompson@example.com",
    phone: "+1-555-0127",
    age: 31,
  },
  {
    name: "Noah Garcia",
    email: "noah.garcia@example.com",
    phone: "+1-555-0128",
    age: 26,
  },
  {
    name: "Ava Lee",
    email: "ava.lee@example.com",
    phone: "+1-555-0129",
    age: 29,
  },
  {
    name: "William Brown",
    email: "william.brown@example.com",
    phone: "+1-555-0130",
    age: 38,
  },
  {
    name: "Isabella Davis",
    email: "isabella.davis@example.com",
    phone: "+1-555-0131",
    age: 33,
  },
  {
    name: "Mason Rodriguez",
    email: "mason.rodriguez@example.com",
    phone: "+1-555-0132",
    age: 45,
  },
];

const importData = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(users);

    console.log("Data imported successfully");
    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
