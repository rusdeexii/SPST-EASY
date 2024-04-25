import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(request) {
  try {
    const { email, password, name } = await request.json()
    const hashedPassword = bcrypt.hashSync(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    })
    return Response.json({ message: 'User created', user })
  } catch (error) {
    return Response.json({ error: 'User could not be created' })
  }
}