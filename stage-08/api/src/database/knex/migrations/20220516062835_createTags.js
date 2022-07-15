
exports.up = knex => knex.schema.createTable("tags", table => {
  table.increments("id");
  table.text("name").notNullable();

  table.timestamp("note_id").references("id").inTable("notes").onDelete("CASCADE");
  table.timestamp("user_id").references("id").inTable("users");

});

exports.down = knex => knex.schema.dropTable("tags");
