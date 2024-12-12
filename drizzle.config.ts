import type { Config } from 'drizzle-kit';

export default {
  schema: './db/lib/schema.ts',
  out: './db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DB_URI!,
  },
} satisfies Config;
