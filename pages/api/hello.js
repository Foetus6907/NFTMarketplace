// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Link from "next/link";

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}