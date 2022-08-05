import express from 'express'
import { Sequelize } from 'sequelize'
import {Feedback, sequelize} from './models/feedback.js'
import cors from 'cors'
import feedbackRouter from './routes/feedback-router.js'

// const sequelize = new Sequelize('postgres://postgres:1111@localhost:5432/test_task')

try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const PORT = process.env.PORT || 8080

const app = express()
app.use(cors({
    credentials: true,                                 // разрешаем кукки
    origin: true                                      // URL нашего фронтенда
}))

app.use(express.json())

app.use('/', feedbackRouter)


app.get('/', (req, res) => {
    res.send('HELLO')
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`))

