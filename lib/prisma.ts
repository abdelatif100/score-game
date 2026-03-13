import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

let connectionString = process.env.DATABASE_URL?.replace('prisma+postgres://', 'postgres://')

// Only apply SSL settings if we actually have a connection string and it looks like a remote DB
if (connectionString?.includes('@') && !connectionString.includes('sslmode')) {
  connectionString += (connectionString.includes('?') ? '&' : '?') + 'sslmode=verify-full'
}

const globalForPrisma = global as unknown as { prisma: PrismaClient }

// Lazily initialize the Prisma client to avoid errors if DATABASE_URL is missing during build
export const prisma =
  globalForPrisma.prisma ||
  (() => {
    if (!connectionString) {
      // Return a basic Prisma client if no DB URL, 
      // though Auth.js will eventually fail, it won't crash the server init
      return new PrismaClient()
    }
    const pool = new pg.Pool({ connectionString })
    const adapter = new PrismaPg(pool as any)
    return new PrismaClient({ adapter })
  })()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
