// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const hello = `Hello from SSR`
  console.log(hello)
  res.statusCode = 200
  await res.json({hello})
}
