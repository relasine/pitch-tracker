exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("classes", table => {
      table.increments("id").primary();
      table.string("teacher");
      table.integer("period");
      table.string("subject");
      table.integer("grade");
    }),

    knex.schema.createTable("students", table => {
      table.increments("id").primary();
      table.string("last_name");
      table.string("first_name");
      table.string("instrument");
      table.integer("class_id").unsigned();
      table.foreign("class_id").references("classes.id");
      table.string("scores");
      table.string("achievements");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("students"),
    knex.schema.dropTable("classes")
  ]);
};
