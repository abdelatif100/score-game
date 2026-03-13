import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

let connectionString = process.env.DATABASE_URL?.replace('prisma+postgres://', 'postgres://')

// Ensure sslmode=verify-full to silence security warning, but only if it's a remote URL
if (connectionString?.includes('@') && !connectionString.includes('sslmode')) {
  connectionString += (connectionString.includes('?') ? '&' : '?') + 'sslmode=verify-full'
}

const pool = new pg.Pool({ connectionString })
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const adapter = new PrismaPg(pool as any)

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
