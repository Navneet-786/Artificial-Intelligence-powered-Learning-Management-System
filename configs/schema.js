import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";
export const userTable = pgTable("users", {
  id: serial().primaryKey(),
  name: varchar().notNull(),
  email: varchar().notNull().unique(),
  isMember: boolean().default(false),
});
