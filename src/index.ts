import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';
import { ApolloServer } from 'apollo-server';
import { join } from 'path';

const schema = loadSchemaSync(join(__dirname, './schema/schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
});

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const schemaWithResolvers = addResolversToSchema({ schema, resolvers });
const server = new ApolloServer({ schema: schemaWithResolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

/*
async function main() {
  const user = await prisma.user.findMany()

  console.log("user = ", user)

  /*
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
*/

