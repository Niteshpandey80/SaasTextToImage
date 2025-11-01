import jwt from 'jsonwebtoken'

const userAuth = async (req, res, next) => {
  try {
    const token = req.headers.token
    if (!token) return res.json({ success: false, message: 'Not Authorized' })

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

export default userAuth
