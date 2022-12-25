const Token = async (user, res) => {
  try {
    const token = await user.getJwtToken();

    res.json({ token });
  } catch (err) {
    console.log(err);
  }
};

module.exports = Token;
