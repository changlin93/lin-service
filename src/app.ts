import Koa from "koa";
import Router, { RouterContext } from "@koa/router";

const app = new Koa();
const router = new Router();

router.get("/hello", async (ctx: RouterContext) => {
    ctx.body = "简单？";
});

app.use(router.routes()).use(router.allowedMethods());

const port = 3001;
app.listen(port, () => console.log(`service starts on port ${port}`));
