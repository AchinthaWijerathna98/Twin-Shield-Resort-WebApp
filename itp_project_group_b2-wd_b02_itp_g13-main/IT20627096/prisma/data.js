const { Prisma } = require('@prisma/client');
const users = [
  {
    email: 'duminda.g.k@gmail.com',
    password: 'pass1234',
    firstName: 'Duminda',
    lastName: 'Kodagoda',
  },
  {
    email: 'abinaya.y.k@gmail.com',
    password: 'pass12345',
    firstName: 'Abinaya',
    lastName: 'Yoganathan',
  },
];

const offers = [
  {
    status: 'active',
    type: 'newyear',
    desc: 'New Year',
    startDate: '2021-11-30 00:00:00.000',
    endDate: '2021-11-30 00:00:00.000',
    offerCode: 'oxflxfdff',
    createDate: '2021-11-30 00:00:00.000',
    discount: new Prisma.Decimal(200),
  },
  {
    status: 'active',
    type: 'newyear',
    desc: 'New Year',
    startDate: '2021-11-30 00:00:00.000',
    endDate: '2021-11-30 00:00:00.000',
    offerCode: 'oxflxfdff',
    createDate: '2021-11-30 00:00:00.000',
    discount: new Prisma.Decimal(200),
  },
  {
    status: 'active',
    type: 'newyear',
    desc: 'New Year',
    startDate: '2021-11-30 00:00:00.000',
    endDate: '2021-11-30 00:00:00.000',
    offerCode: 'oxflxfdff',
    createDate: '2021-11-30 00:00:00.000',
    discount: new Prisma.Decimal(200),
  },
  {
    status: 'active',
    type: 'newyear',
    desc: 'New Year',
    startDate: '2021-11-30 00:00:00.000',
    endDate: '2021-11-30 00:00:00.000',
    offerCode: 'oxflxfdff',
    createDate: '2021-11-30 00:00:00.000',
    discount: new Prisma.Decimal(200),
  },
  {
    status: 'active',
    type: 'newyear',
    desc: 'New Year',
    startDate: '2021-11-30 00:00:00.000',
    endDate: '2021-11-30 00:00:00.000',
    offerCode: 'oxflxfdff',
    createDate: '2021-11-30 00:00:00.000',
    discount: new Prisma.Decimal(200),
  },
  {
    status: 'active',
    type: 'newyear',
    desc: 'New Year',
    startDate: '2021-11-30 00:00:00.000',
    endDate: '2021-11-30 00:00:00.000',
    offerCode: 'oxflxfdff',
    createDate: '2021-11-30 00:00:00.000',
    discount: new Prisma.Decimal(200),
  },
  {
    status: 'active',
    type: 'newyear',
    desc: 'New Year',
    startDate: '2021-11-30 00:00:00.000',
    endDate: '2021-11-30 00:00:00.000',
    offerCode: 'oxflxfdff',
    createDate: '2021-11-30 00:00:00.000',
    discount: new Prisma.Decimal(200),
  },
  {
    status: 'active',
    type: 'newyear',
    desc: 'New Year',
    startDate: '2021-11-30 00:00:00.000',
    endDate: '2021-11-30 00:00:00.000',
    offerCode: 'oxflxfdff',
    createDate: '2021-11-30 00:00:00.000',
    discount: new Prisma.Decimal(200),
  },
  {
    status: 'active',
    type: 'newyear',
    desc: 'New Year',
    startDate: '2021-11-30 00:00:00.000',
    endDate: '2021-11-30 00:00:00.000',
    offerCode: 'oxflxfdff',
    createDate: '2021-11-30 00:00:00.000',
    discount: new Prisma.Decimal(200),
  },
  {
    status: 'active',
    type: 'newyear',
    desc: 'New Year',
    startDate: '2021-11-30 00:00:00.000',
    endDate: '2021-11-30 00:00:00.000',
    offerCode: 'oxflxfdff',
    createDate: '2021-11-30 00:00:00.000',
    discount: new Prisma.Decimal(200),
  },
  {
    status: 'active',
    type: 'newyear',
    desc: 'New Year',
    startDate: '2021-11-30 00:00:00.000',
    endDate: '2021-11-30 00:00:00.000',
    offerCode: 'oxflxfdff',
    createDate: '2021-11-30 00:00:00.000',
    discount: new Prisma.Decimal(200),
  },
  {
    status: 'active',
    type: 'newyear',
    desc: 'New Year',
    startDate: '2021-11-30 00:00:00.000',
    endDate: '2021-11-30 00:00:00.000',
    offerCode: 'oxflxfdff',
    createDate: '2021-11-30 00:00:00.000',
    discount: new Prisma.Decimal(200),
  },
  {
    status: 'active',
    type: 'newyear',
    desc: 'New Year',
    startDate: '2021-11-30 00:00:00.000',
    endDate: '2021-11-30 00:00:00.000',
    offerCode: 'oxflxfdff',
    createDate: '2021-11-30 00:00:00.000',
    discount: new Prisma.Decimal(200),
  },
  {
    status: 'active',
    type: 'newyear',
    desc: 'New Year',
    startDate: '2021-11-30 00:00:00.000',
    endDate: '2021-11-30 00:00:00.000',
    offerCode: 'oxflxfdff',
    createDate: '2021-11-30 00:00:00.000',
    discount: new Prisma.Decimal(200),
  },
  {
    status: 'active',
    type: 'newyear',
    desc: 'New Year',
    startDate: '2021-11-30 00:00:00.000',
    endDate: '2021-11-30 00:00:00.000',
    offerCode: 'oxflxfdff',
    createDate: '2021-11-30 00:00:00.000',
    discount: new Prisma.Decimal(200),
  },
  {
    status: 'active',
    type: 'newyear',
    desc: 'New Year',
    startDate: '2021-11-30 00:00:00.000',
    endDate: '2021-11-30 00:00:00.000',
    offerCode: 'oxflxfdff',
    createDate: '2021-11-30 00:00:00.000',
    discount: new Prisma.Decimal(200),
  },
  {
    status: 'active',
    type: 'newyear',
    desc: 'New Year',
    startDate: '2021-11-30 00:00:00.000',
    endDate: '2021-11-30 00:00:00.000',
    offerCode: 'oxflxfdff',
    createDate: '2021-11-30 00:00:00.000',
    discount: new Prisma.Decimal(200),
  },
];
module.exports = {
  offers,
  users,
};