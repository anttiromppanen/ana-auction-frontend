const isAdmin = (user) => {
  return user.role === 'admin';
};

export default isAdmin;
