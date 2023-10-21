import { type Knex } from 'knex';

const TABLE_NAME = 'deals';

const ColumnName = {
  ID: 'id',
  NAME: 'name',
  PRICE: 'price',
  YEILD: 'yeild',
  SOLD: 'sold',
  TICKET: 'ticket',
  DAYS_LEFT: 'days_left',
  IMG: 'img',
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at',
};

const up = (knex: Knex): Promise<void> => {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments(ColumnName.ID).primary();
    table.string(ColumnName.NAME).notNullable();
    table.string(ColumnName.PRICE).notNullable();
    table.string(ColumnName.YEILD).notNullable();
    table.string(ColumnName.SOLD).notNullable();
    table.string(ColumnName.TICKET).notNullable();
    table.string(ColumnName.DAYS_LEFT).notNullable();
    table.string(ColumnName.IMG).notNullable();
    table
      .dateTime(ColumnName.CREATED_AT)
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .dateTime(ColumnName.UPDATED_AT)
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

const down = (knex: Knex): Promise<void> => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};

export { down, up };
