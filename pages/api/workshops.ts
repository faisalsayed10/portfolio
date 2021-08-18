export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await fetch('https://workshops.hackclub.com/api/workshops').then(r => r.json())
  res.json(data)
}
