import {
    pgTable,
    serial,
    text,
    timestamp,
    uniqueIndex,
    } from "drizzle-orm/pg-core";

export const users = pgTable(
    "users",
    {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    externalUserId: text("externalUserId").unique(),
    bio: text("bio"),
    email:text("email").notNull(),
    image: text("image"),
    createdAt: timestamp("createdAt").defaultNow(),
    updatedAt: timestamp("updatedAt").defaultNow(),
    },
    (users) => {
    return {
    uniqueIdx: uniqueIndex("unique_idx").on(users.id)
    }},
    );