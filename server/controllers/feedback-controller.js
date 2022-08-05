import {Feedback} from '../models/feedback.js'

class GetFeedbackController{
    async getFeedback(req, res) {

            if (!req.body.name || req.body.name.length < 2) {
              return res.status(403).json({ message: 'Too short length' })
            }
            if (!req.body.email || !req.body.email.includes('@') && !req.body.email.includes('.')) {
              return res.status(403).json({ message: 'Invalid email' })

            }
            if (!req.body.message) {
              return res.status(403).json({ message: 'The field is empty' })
            }
                  
        await Feedback.create({
            firstName: req.body.name,
            email: req.body.email,
            message: req.body.message
          });
        res.json('ok')
    }
}

export default new GetFeedbackController