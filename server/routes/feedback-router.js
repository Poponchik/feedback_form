import Router from 'express'
import GetFeedbackController from "../controllers/feedback-controller.js"


const feedbackRouter = new Router()

feedbackRouter.post('/', GetFeedbackController.getFeedback)

export default feedbackRouter