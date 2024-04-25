// api/registry.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(){
  try {
  const registry = await prisma.registry.findMany()
  return Response.json(registry)

  }catch (error) {
    console.log('Error fetching Data:' , error);
    return Response.status(500).json({error: 'Internal server error'});
  }
}
