import express from 'express'
import cors from 'cors'

import categoryRoutes from './routes/categories.routes.js'
import productRoutes from './routes/products.routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/category", categoryRoutes)
app.use("/product", productRoutes)


app.listen(8080, () => {
  console.log('Servexon is ready on 8080');
})

