module.exports = {
  development: {
    url: "postgres://pyybkudk:BkXapjBJXjl9R8ClEL7GG6vaUCzIsEax@abul.db.elephantsql.com/pyybkudk",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
