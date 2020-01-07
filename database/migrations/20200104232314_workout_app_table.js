//subject to change
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('username', 128)
      .notNullable()
      .unique()
      tbl.string('password', 128)
      .notNullable()
      tbl.string('email', 128)
      .notNullable()
      .unique()
  })
//   .createTable('workout', tbl => {
//       tbl.increments()
//       tbl.string('name', 128)
//       .notNullable()
//       tbl.string('description', 500)
//       .notNullable()
//   })
  // .createTable('dates', tbl => {
  //     tbl.increments()
  //     tbl.integer('date')
  //     .notNullable()
  // })

//   .createTable('user_workouts_by_date', tbl => {
//       tbl.integer('date_id')
//         .unsigned()
//         .notNullable()
//         .references('id')
//         .inTable('dates')
//       tbl.integer('user_id')
//        .unsigned()
//        .notNullable()
//        .references('id')
//        .inTable('users')
//       tbl.integer('workout_id')
//        .unsigned()
//        .notNullable()
//        .references('id')
//        .inTable('workout')
//       tbl.primary(['date_id', 'user_id', 'workout_id'])
//   })
// if its less than a to-do list
// also, use date instead of integer

  .createTable('workout', tbl => {
    tbl.increments()
    tbl.string('name', 128)
    .notNullable()
    tbl.string('description', 500)
    .notNullable()
    tbl.integer('user_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')

})
  .createTable('exercise', tbl => {
      tbl.increments()
      tbl.string('name', 128)
      .notNullable()
      tbl.integer('sets')
      .notNullable()
      .defaultTo(0)
      tbl.integer('reps')
      .notNullable()
      .defaultTo(0)
      tbl.integer('weight')
      .notNullable()
      .defaultTo(0)
      tbl.integer('workout_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('workout')
  })
};
// name of exercise, sets, reps, weight

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('exercise')
    .dropTableIfExists('workout')
    // .dropTableIfExists('dates')
    .dropTableIfExists('users')
};
