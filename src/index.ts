import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Kento',
      email: 'kento@prisma.io',
    },
  })
  console.log(user)

  /*
  const user = await prisma.user.create({
    data: {
      name: "kento",
      email: "kento@myaddress",
      posts: {
        create: [
          {
            title: "Hello World",
            published: true,
          },
          {
            title: "My second post",
            content: "This is a second post"
          }
        ]
      }
    }
  })
  */

  /*
  const user = await prisma.post.create({
    data: {
      title: "Kento Book",
      authorId: 2,
    }
  })
  */
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)

    await prisma.$disconnect()

    process.exit(1)
  })

