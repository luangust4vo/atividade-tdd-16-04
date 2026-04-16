const validatePassword = (password) => {
  const regex = /^(?=.*[A-Z]).{8,}$/;

  return regex.test(password);
};

export { validatePassword };
