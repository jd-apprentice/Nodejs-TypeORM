export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_TYPE: "postgres" | "mysql" | "mongodb";
    }
  }
}
