import { type Knex } from 'knex';

const DATABASE_TABLE_NAME = 'deals';

const DATA_ENTRIES = [
  {
    name: 'The Marina Torch',
    price: '6 500 000 Dhs',
    yeild: '9.25%',
    sold: '75%',
    ticket: '60 000 Dhs',
    daysLeft: '150',
    img: 'https://res.cloudinary.com/deojavjaq/image/upload/v1697740176/zenbit/deals-marina-torch_nyy2zt.jpg',
  },
  {
    name: 'Ocean Peaks',
    price: '7 500 000 Dhs',
    yeild: '19.25%',
    sold: '55%',
    ticket: '20 000 Dhs',
    daysLeft: '50',
    img: 'https://res.cloudinary.com/deojavjaq/image/upload/v1697740731/zenbit/deals-ocean-peaks_vkc3a3.jpg',
  },
  {
    name: 'HHHR Tower',
    price: '17 500 000 Dhs',
    yeild: '29.25%',
    sold: '45%',
    ticket: '120 000 Dhs',
    daysLeft: '20',
    img: 'https://res.cloudinary.com/deojavjaq/image/upload/v1697740730/zenbit/deals-hhhr-tower_kul3ph.jpg',
  },
  {
    name: 'Al Yaqoub Tower',
    price: '5 500 000 Dhs',
    yeild: '12.25%',
    sold: '95%',
    ticket: '40 000 Dhs',
    daysLeft: '120',
    img: 'https://res.cloudinary.com/deojavjaq/image/upload/v1697740731/zenbit/deals-yaqoub-tower_xntswq.jpg',
  },
];

const up = async (knex: Knex): Promise<void> => {
  await knex(DATABASE_TABLE_NAME).insert(DATA_ENTRIES);
};

const down = async (knex: Knex): Promise<void> => {
  await knex(DATABASE_TABLE_NAME).del();
};

export { down, up };
