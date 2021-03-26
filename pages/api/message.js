// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { name, email, message } = JSON.parse(req.body)
  console.log(name, email, message)
  res.status(200).json({ report: true, message: 'Message Received!' })
}
