// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import handleError from '@/controllers/error/handle_error';
import checkSupportMethod from '@/controllers/error/check_support_method';
import MessageCtrl from '@/controllers/message.ctrl';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const supportedMethods = ['POST'];
  try {
    checkSupportMethod(supportedMethods, method);
    await MessageCtrl.post(req, res);
  } catch (err) {
    console.error(err);
    // 에러처리
    handleError(err, res);
  }
}
