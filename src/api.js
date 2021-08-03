const root = "https://stormy-castle-38697.herokuapp.com";
import axios from "axios";

export const Login = async (email, pass) => {
  const url = root + "/api/auth";
  const data = {
    email: email,
    password: pass,
  };
  const headers = {
    "Content-Type": "application/json",
  };
  const ret = await axios
    .post(url, data, {
      headers: headers,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return ret;
};
