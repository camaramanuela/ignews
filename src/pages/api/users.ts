import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Manu' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'João' },
  ]

  return response.json(users);
}