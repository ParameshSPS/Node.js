module.exports = {
    // prop === 'email' || 'password' || 'passwordConfirmation'
    getError(errors, prop) {
      try {
        return errors.mapped()[prop].msg;
      } catch (err) {
        return '';
      }
    }
  };

/*
errors.mapped() === {
    email: {
        msg: 'Inavalid email'
    }, 
    password: {
        msg: 'Password too short'
    },
    passwordConfirmation: {
        msg: 'Passwords must match'
    }
}
*/