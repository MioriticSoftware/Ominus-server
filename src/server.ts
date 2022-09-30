import ExpressApp from "express";

const app = ExpressApp()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Ominus server listening on port: ${port}`)
})