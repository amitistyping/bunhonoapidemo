import { Hono } from "hono";
import { bearerAuth } from "hono/bearer-auth"

const app = new Hono();

const port = parseInt(process.env.PORT) || 3000;

const home = app.get("/", (c) => {
  return c.json({ message: "Hello World!" });
});

const token = 'secretjsontoken'

app.use('/auth/*', bearerAuth({ token }))

app.get('/auth/page', (c) => c.text('you are authorized!'))

console.log(`Running at http://localhost:${port}`);

export default {
  port,
  fetch: home.fetch,
};
