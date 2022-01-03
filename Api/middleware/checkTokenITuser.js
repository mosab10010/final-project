const jwt = require("jsonwebtoken")
const { UserEmpolyeeIT } = require("../Model/UserEmpolyeeIT")

const checkTokenITusers = async (req, res, next) => {
  try {
    const token = req.header("Authorization")
    if (!token) return res.status(401).json("token is required")
    const decryptedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
    const userId = decryptedToken.id
    const user = await UserEmpolyeeIT.findById(userId)

    if (!user) return res.status(404).json("user not found")

    req.userId = userId
  } catch (error) {
    return res.status(500).json(error.message)
  }
  next()
}

module.exports = checkTokenITusers
