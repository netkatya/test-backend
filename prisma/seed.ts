import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.property.createMany({
    data: [
      {
        title: 'The Marina Torch',
        price: 6500000,
        tiket: 60000,
        yield: 9.25,
        daysLeft: 150,
        soldPercent: 75,
        imageUrl:
          'https://res.cloudinary.com/ddrscp6nz/image/upload/v1771261217/Rectangle_274_b6trwn.jpg',
      },
      {
        title: 'HHHR Tower',
        price: 6500000,
        tiket: 60000,
        yield: 9.25,
        daysLeft: 150,
        soldPercent: 75,
        imageUrl:
          'https://res.cloudinary.com/ddrscp6nz/image/upload/v1771261216/Rectangle_274_1_o0vsra.jpg',
      },
      {
        title: 'Skyline Tower',
        price: 6500000,
        tiket: 60000,
        yield: 9.25,
        daysLeft: 150,
        soldPercent: 75,
        imageUrl:
          'https://res.cloudinary.com/ddrscp6nz/image/upload/v1771261215/Rectangle_274_2_irbyst.jpg',
      },
      {
        title: 'Lagoon View',
        price: 6500000,
        tiket: 60000,
        yield: 9.25,
        daysLeft: 150,
        soldPercent: 75,
        imageUrl:
          'https://res.cloudinary.com/ddrscp6nz/image/upload/v1771261216/Rectangle_274_3_qxdzyn.jpg',
      },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
