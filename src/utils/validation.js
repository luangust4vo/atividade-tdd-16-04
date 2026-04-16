const validatePassword = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/;

  return regex.test(password);
};

export { validatePassword };
