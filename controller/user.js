const BigPromise = require("../middleware/BigPromise");
const User = require("../model/user");
const Token = require("../util/token");

exports.signup = BigPromise(async (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  if (!(email && firstName && password && lastName))
    return res.status(400).json({ error: "Enter all Fields" });
const existingUser = await User.findOne({email:email})
if(existingUser){
    return res.json({error:"User already exist"})
}
  const newUser = await User.create({
    email,
    firstName,
    lastName,
    password,
  });
  Token(newUser, res);
});


exports.profile = BigPromise(async (req, res) => {
    const profile = await User.findById(req.user.id)
    res.json(profile);
  });


exports.YodaYouhouAllUsers = BigPromise(async (_, res) => {
  const allUsers = await User.find();
  allUsers.firstName = allUsers.map(data=>{
    const rev =  data.firstName.replace(/[a-z]+/gi, (s)=> s.split('').reverse().join(''));
    data.firstName = rev
  })
  console.log(allUsers);

  res.json(allUsers);
});

exports.YodaYouhouDeleteAllUsers = BigPromise(async (_, res) => {
  try {
    await User.deleteMany();
    res.json("Deleted All");
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
});

exports.YodaYouhoudeleteUser = BigPromise(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.json({ error: "User Not Found" });
  }

  await user.remove();

  res.json("Deleted");
});
// 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



