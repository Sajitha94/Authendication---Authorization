export const UserController = (req, res) => {
  const { _id, username, email, gender } = req.user;
  res.status(200).json({
    status: "success",
    message: "This is a protected route",
    data: {
      info: "Some protected information",
      data: { id: _id, username, email, gender },
    },
  });
};
