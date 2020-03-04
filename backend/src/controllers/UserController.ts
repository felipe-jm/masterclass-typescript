import { Request, Response } from 'express';

import EmailService from '../services/EmailService';

const users = [
  {name: 'Felipe', email: 'felipemattoseu@gmail.com'}
];

export default {
  async index(req: Request, res: Response){
    return res.json(users);
  },

  async store(req: Request, res: Response){
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: 'Felipe Jung', email: 'Felipe Jung de Mattos' },
      message: { subject: 'Welcome!', body: 'Welcome!' }
    });

    return res.json({ message: 'Email sent successfully!'});
  }
};