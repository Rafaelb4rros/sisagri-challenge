// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  ok: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") return;
  const responseObj: any = {};

  const { password, username, company } = req.body.body;

  if (password !== "123456") {
    responseObj["password"] = {
      msg: "Senha invalida.",
    };
  }
  if (Number(company) !== 1) {
    responseObj["company"] = {
      msg: "Empresa invalida.",
    };
  }
  if (Number(username) !== 4) {
    responseObj["username"] = {
      msg: "Usuario invalido.",
    };
  }

  if (Object.values(responseObj).length)
    return res.status(400).json(responseObj);

  return res.status(200).json({ ok: "true" });
}
