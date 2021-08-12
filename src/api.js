// const root = "https://stormy-castle-38697.herokuapp.com";
const root = 'http://localhost:5000';
import axios from 'axios';

// Login Function
export const Login = async (email, pass) => {
  const url = root + '/api/auth';
  const data = {
    email: email,
    password: pass,
  };
  const headers = {
    'Content-Type': 'application/json',
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

// Creating New Leave
export const NewLeave = async (data, token) => {
  const url = root + '/api/leaves';
  const headers = {
    'Content-Type': 'application/json',
    'x-auth-token': token,
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

// Manager Emails
export const AllManagers = async (team) => {
  const url = root + '/api/users/manager/' + team;
  const headers = {
    'Content-Type': 'application/json',
  };
  const ret = await axios
    .get(url, {
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

// Remaining Leaves
export const RemainingLeaves = async (year, token) => {
  const url = root + '/api/leaves/remaining/' + year;
  const headers = {
    'Content-Type': 'application/json',
    'x-auth-token': token,
  };
  const ret = await axios
    .get(url, {
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

// Applied Leaves Data
export const AppliedLeaves = async (year, token) => {
  const url = root + '/api/leaves/me/' + year;
  const headers = {
    'Content-Type': 'application/json',
    'x-auth-token': token,
  };
  const ret = await axios
    .get(url, {
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
