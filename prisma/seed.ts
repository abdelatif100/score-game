import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

const connectionString = process.env.DATABASE_URL?.replace('prisma+postgres://', 'postgres://')

const pool = new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool as any)

const prisma = new PrismaClient({
  adapter,
})

async function main() {
  console.log('Start seeding...')

  // 1. Clear existing data
  await prisma.consoleGame.deleteMany({})
  await prisma.console.deleteMany({})
  await prisma.game.deleteMany({})

  // 2. Define Games
  const gamesData = [
    { name: 'FIFA 23', description: 'Experience the world\'s game with Hypermotion2 technology.' },
    { name: 'Call of Duty: Modern Warfare II', description: 'The sequel to the 2019 blockbuster Modern Warfare.' },
    { name: 'Spider-Man: Miles Morales', description: 'Experience the rise of Miles Morales as the new Spider-Man.' },
    { name: 'Gran Turismo 7', description: 'The ultimate driving simulator.' },
    { name: 'God of War Ragnarök', description: 'Kratos and Atreus embark on a mythic journey for answers.' },
    { name: 'Grand Theft Auto V', description: 'Explore the sprawling city of Los Santos.' },
    { name: 'NBA 2K23', description: 'Rise to the occasion in NBA 2K23.' },
    { name: 'Horizon Forbidden West', description: 'Join Aloy as she braves the Forbidden West.' },
    { name: 'Elden Ring', description: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring.' },
    { name: 'Halo Infinite', description: 'The Master Chief returns in the most expansive Halo story yet.' },
    { name: 'Forza Horizon 5', description: 'Your ultimate Horizon Adventure awaits!' },
    { name: 'Gears 5', description: 'The world is crumbling. The Swarm has corrupted the Coalition’s robot army.' },
    { name: 'Red Dead Redemption 2', description: 'An epic tale of life in America’s unforgiving heartland.' },
    { name: 'Fortnite', description: 'The high-stakes battle royale game.' },
    { name: 'Rocket League', description: 'High-powered hybrid of arcade-style soccer and vehicular mayhem.' },
    { name: 'Minecraft', description: 'Explore infinite worlds and build everything from the simplest of homes to the grandest of castles.' },
    { name: 'Fall Guys', description: 'The ultimate knockout party game.' },
    { name: 'Sea of Thieves', description: 'Become the pirate you want to be in a shared world adventure.' },
    { name: 'Mario Kart 8 Deluxe', description: 'The ultimate version of Mario Kart 8.' },
    { name: 'The Legend of Zelda: Breath of the Wild', description: 'Step into a world of discovery, exploration, and adventure.' },
    { name: 'Super Mario Odyssey', description: 'Join Mario on a massive, globe-trotting 3D adventure.' },
    { name: 'Animal Crossing: New Horizons', description: 'Escape to a deserted island and create your own paradise.' },
    { name: 'Luigi\'s Mansion 3', description: 'Luigi is invited to the towering Last Resort hotel.' },
    { name: 'Pokémon Scarlet', description: 'The newest chapters in the Pokémon series.' },
    { name: 'Pokémon Violet', description: 'The newest chapters in the Pokémon series.' },
    { name: 'Super Smash Bros. Ultimate', description: 'Legendary game worlds and fighters collide.' },
    { name: 'Splatoon 3', description: 'Enter the Splatlands, a sun-scorched desert inhabited by battle-hardened Inklings and Octolings.' },
    { name: 'Kirby and the Forgotten Land', description: 'Join Kirby in an unforgettable journey through a mysterious world.' },
  ]

  const games: Record<string, any> = {}
  for (const data of gamesData) {
    const game = await prisma.game.create({ data })
    games[game.name] = game
  }

  // 3. Define Consoles & Assign Games
  const consolesData = [
    {
      name: 'PlayStation 5 #1',
      status: 'available',
      games: ['FIFA 23', 'Call of Duty: Modern Warfare II', 'Spider-Man: Miles Morales', 'Gran Turismo 7', 'God of War Ragnarök']
    },
    {
      name: 'PlayStation 5 #2',
      status: 'available',
      games: ['FIFA 23', 'Grand Theft Auto V', 'NBA 2K23', 'Horizon Forbidden West', 'Elden Ring']
    },
    {
      name: 'Xbox Series X',
      status: 'reserved',
      games: ['Halo Infinite', 'Forza Horizon 5', 'Gears 5', 'Red Dead Redemption 2', 'Elden Ring']
    },
    {
      name: 'Xbox Series S',
      status: 'available',
      games: ['Fortnite', 'Rocket League', 'Minecraft', 'Fall Guys', 'Sea of Thieves']
    },
    {
      name: 'Nintendo Switch',
      status: 'available',
      games: ['Mario Kart 8 Deluxe', 'The Legend of Zelda: Breath of the Wild', 'Super Mario Odyssey', 'Animal Crossing: New Horizons', 'Luigi\'s Mansion 3']
    },
    {
      name: 'Nintendo Switch Lite',
      status: 'reserved',
      games: ['Pokémon Scarlet', 'Pokémon Violet', 'Super Smash Bros. Ultimate', 'Splatoon 3', 'Kirby and the Forgotten Land']
    }
  ]

  for (const c of consolesData) {
    const consoleObj = await prisma.console.create({
      data: {
        name: c.name,
        status: c.status as any,
      }
    })

    for (const gameName of c.games) {
      if (games[gameName]) {
        await prisma.consoleGame.create({
          data: {
            consoleId: consoleObj.id,
            gameId: games[gameName].id
          }
        })
      }
    }
  }

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
    await pool.end()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    await pool.end()
    process.exit(1)
  })
