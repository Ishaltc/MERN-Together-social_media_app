const User = require("../models/User");

// exports.validateEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(/^([a-z\d\.-]+)\.([a-z]{2-12})(\.[a-z]{2,12})?$/);
// };

//email validation
exports.validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

exports.validateLength = (text, min, max) => {
  if (text.length > max || text.length < min) {
    return false;
  }
  return true;
};

exports.validUserName = async (username) => {
  let a = false;
  do {
    const check = await User.findOne({ username });
    if (check) {
      //change username
      username += (+new Date() * Math.random()).toString().substring(0, 1);
      a = true;
    } else {
      a = false;
    }
  } while (a);
  {
    return username;
  }
};
