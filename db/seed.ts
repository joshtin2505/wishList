import { db, User, Wish } from "astro:db";
import {
  SEED_DATA_PASSWORD,
  SEED_DATA_EMAIL,
  SEED_DATA_USERNAME,
} from "@lib/index";
// https://astro.build/db/seed
export default async function seed() {
  // TODO
  await db.insert(User).values({
    name: SEED_DATA_USERNAME,
    email: SEED_DATA_EMAIL,
    password: SEED_DATA_PASSWORD,
  });
}
