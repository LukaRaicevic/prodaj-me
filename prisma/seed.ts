import  prisma from '@/app/lib/prisma';

async function main() {
  await prisma.vehicle.createMany({
    data: Array.from({ length: 50 }).map((_, i) => ({ 
      brand: `Brand ${i+1}`, 
      model: `Model ${i+1}`, 
      year: 2020,
      vin: `VIN${i+1}`,
      licensePlate: `LP${i+1}`,
      mileage: Math.floor(Math.random() * 200000),
      hp: 100 + Math.floor(Math.random() * 300)
    }))
  });
}

main()
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });