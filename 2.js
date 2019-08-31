// Data
const username = 'Bobibasa';
const password = 'boB1basA';

// Function validation name
const validationUser = () => {
      // Regex for username
      const userReg = /^[A-Za-z0-9]{5,9}$/;

      if (userReg.test(username)) {
            document.write('Username is valid!');
            document.write(`<br />`);
            return username;
      } else {
            document.write('Invalid user!');
            document.write(`<br />`);
            return false;
      }
};

// Function validation password
const validationPass = () => {
      // Regex for password
      const passReg = /^[A-Za-z0-9]{8,}$/;

      if (passReg.test(password)) {
            document.write('Password is valid!');
            document.write(`<br />`);
            return password;
      } else {
            document.write('Invalid password!');
            document.write(`<br />`);
            return false;
      }
};

// Test function
const userTest = document.write(validationUser(username) + `<br />`);
const passTest = document.write(validationPass(password) + `<br />`);
