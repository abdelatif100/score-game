import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

const connectionString = process.env.DATABASE_URL?.replace('prisma+postgres://', 'postgres://')

const pool = new pg.Pool({ connectionString })
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    { name: 'فيفا 23', description: 'اختبر لعبة العالم مع تقنية هايبر موشن 2.' },
    { name: 'كول أوف ديوتي: مودرن وورفير 2', description: 'تتمة للعبة مودرن وورفير الأكثر مبيعاً لعام 2019.' },
    { name: 'سبايدر مان: مايلز موراليس', description: 'عش تجربة صعود مايلز موراليس كسبايدر مان الجديد.' },
    { name: 'جران توريزمو 7', description: 'محاكي القيادة النهائي.' },
    { name: 'جود أوف وار راجناروك', description: 'ينطلق كراتوس وأتريوس في رحلة أسطورية بحثاً عن إجابات.' },
    { name: 'جراند ثيفت أوتو 5', description: 'استكشف مدينة لوس سانتوس المترامية الأطراف.' },
    { name: 'إن بي إيه 2K23', description: 'ارتقِ إلى مستوى التحدي في إن بي إيه 2K23.' },
    { name: 'هورايزن فوربيدن ويست', description: 'انضم إلى ألوي وهي تواجه الغرب المحظور.' },
    { name: 'إلدن رينج', description: 'قم يا تيرنيشد، واسترشد بالنعمة لاستخدام قوة إلدن رينج.' },
    { name: 'هالو إنفينيت', description: 'يعود الماستر شيف في أكثر قصة هالو توسعاً حتى الآن.' },
    { name: 'فورزا هورايزن 5', description: 'مغامرة هورايزن النهائية في انتظارك!' },
    { name: 'جيرز 5', description: 'العالم ينهار. لقد أفسد السرب جيش الروبوتات التابع للتحالف.' },
    { name: 'ريد ديد ريدمبشن 2', description: 'قصة ملحمية عن الحياة في قلب أمريكا القاسي.' },
    { name: 'فورتنايت', description: 'لعبة الباتل رويال ذات المخاطر العالية.' },
    { name: 'روكيت ليج', description: 'مزيج عالي القوة بين كرة القدم بأسلوب الآركيد وفوضى المركبات.' },
    { name: 'ماينكرافت', description: 'استكشف عوالم لا نهائية وابنِ كل شيء من أبسط المنازل إلى أفخم القلاع.' },
    { name: 'فال جايز', description: 'لعبة الحفلات النهائية بالضربة القاضية.' },
    { name: 'سي أوف ثيفز', description: 'كن القرصان الذي تريد أن تكونه في مغامرة عالم مشترك.' },
    { name: 'ماريو كارت 8 ديلوكس', description: 'النسخة النهائية من ماريو كارت 8.' },
    { name: 'ذا ليجند أوف زيلدا: بريث أوف ذا وايلد', description: 'ادخل إلى عالم من الاكتشاف والاستكشاف والمغامرة.' },
    { name: 'سوبر ماريو أوديسي', description: 'انضم إلى ماريو في مغامرة ثلاثية الأبعاد ضخمة تجوب العالم.' },
    { name: 'أنيمال كروسينج: نيو هورايزونز', description: 'اهرب إلى جزيرة مهجورة وأنشئ جنتك الخاصة.' },
    { name: 'لويجيز مانشن 3', description: 'تمت دعوة لويجي إلى فندق لاست ريزورت الشاهق.' },
    { name: 'بوكيمون سكارليت', description: 'أحدث فصول سلسلة بوكيمون.' },
    { name: 'بوكيمون فيوليت', description: 'أحدث فصول سلسلة بوكيمون.' },
    { name: 'سوبر سماش بروز التيميت', description: 'عوالم ألعاب ومقاتلون أسطوريون يتصادمون.' },
    { name: 'سبيليتون 3', description: 'ادخل إلى سبلاتلاندز، الصحراء المشمسة التي يسكنها الإنكلينجز والأوكتولينجز المتمرسون في المعارك.' },
    { name: 'كيربي أند ذا فورجوتن لاند', description: 'انضم إلى كيربي في رحلة لا تُنسى عبر عالم غامض.' },
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const games: Record<string, any> = {}
  for (const data of gamesData) {
    const game = await prisma.game.create({ data })
    games[game.name] = game
  }

  // 3. Define Consoles & Assign Games
  const consolesData = [
    {
      name: 'بلايستيشن 5 #1',
      status: 'available',
      games: ['فيفا 23', 'كول أوف ديوتي: مودرن وورفير 2', 'سبايدر مان: مايلز موراليس', 'جران توريزمو 7', 'جود أوف وار راجناروك']
    },
    {
      name: 'بلايستيشن 5 #2',
      status: 'available',
      games: ['فيفا 23', 'جراند ثيفت أوتو 5', 'إن بي إيه 2K23', 'هورايزن فوربيدن ويست', 'إلدن رينج']
    },
    {
      name: 'إكس بوكس سيريس X',
      status: 'reserved',
      games: ['هالو إنفينيت', 'فورزا هورايزن 5', 'جيرز 5', 'ريد ديد ريدمبشن 2', 'إلدن رينج']
    },
    {
      name: 'إكس بوكس سيريس S',
      status: 'available',
      games: ['فورتنايت', 'روكيت ليج', 'ماينكرافت', 'فال جايز', 'سي أوف ثيفز']
    },
    {
      name: 'نينتندو سويتش',
      status: 'available',
      games: ['ماريو كارت 8 ديلوكس', 'ذا ليجند أوف زيلدا: بريث أوف ذا وايلد', 'سوبر ماريو أوديسي', 'أنيمال كروسينج: نيو هورايزونز', 'لويجيز مانشن 3']
    },
    {
      name: 'نينتندو سويتش لايت',
      status: 'reserved',
      games: ['بوكيمون سكارليت', 'بوكيمون فيوليت', 'سوبر سماش بروز التيميت', 'سبيليتون 3', 'كيربي أند ذا فورجوتن لاند']
    }
  ]

  for (const c of consolesData) {
    const consoleObj = await prisma.console.create({
      data: {
        name: c.name,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
