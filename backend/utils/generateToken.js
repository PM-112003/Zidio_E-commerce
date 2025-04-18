import jwt from "jsonwebtoken";

const generateToken = (userid) => {
  const secretkey = process.env.token_secret_key;
  console.log("secretkey:", secretkey);
  return jwt.sign({ id: userid }, secretkey);
};

export default generateToken;
