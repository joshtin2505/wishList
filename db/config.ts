import { column, defineDb, defineTable } from "astro:db";

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text({ unique: true }),
    avatar: column.text({ optional: true }),
    password: column.text(),
    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ default: new Date(), onUpdate: () => new Date() }),
  },
});

const Wish = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    userId: column.number({ references: () => User.columns.id }),
    name: column.text(),
    description: column.text(),
    image: column.text(),
    url: column.text(),
    price: column.number({ optional: true }),
    isPublic: column.boolean({ default: false }),
    isFulfilled: column.boolean({ default: false }),
    fulfilledAt: column.date({ optional: true }),
    term: column.date({ optional: true }),
    createdAt: column.date({ default: new Date() }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    User,
    Wish,
  },
});
