const validatePassword = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])\S{8,}$/;

  return regex.test(password);
};

export { validatePassword };
