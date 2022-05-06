import express from 'express'

import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case'
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer.mail-adapter'

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const prismaResponse = new PrismaFeedbacksRepository()
  const nodemailer = new NodemailerMailAdapter()
  const submitFeedback = new SubmitFeedbackUseCase(
    prismaResponse,
    nodemailer,
  )

  await submitFeedback.execute({
    type,
    comment,
    screenshot,
  })
  
 

  return res.status(201).send();
})