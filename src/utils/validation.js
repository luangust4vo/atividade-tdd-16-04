const validatePassword = (password) => {
  const regex = /.{8,}/;

  return regex.test(password);
};

export { validatePassword };
