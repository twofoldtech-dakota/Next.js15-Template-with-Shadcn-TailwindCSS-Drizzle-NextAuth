import { neon, neonConfig } from '@neondatabase/serverless';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import ws from 'ws';
neonConfig.webSocketConstructor = ws;
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });