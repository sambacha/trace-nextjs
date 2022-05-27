import * as Koa from "koa";
import { AsyncLocalStorage } from "async_hooks";
import { customAlphabet } from "nanoid";

const asyncLocalStorage: AsyncLocalStorage<{ requestId: string }> =
  new AsyncLocalStorage();

const log: Logger = new Logger();

const logger: Logger = new Logger({
  name: "Server",
  requestId: (): string => {
    return asyncLocalStorage.getStore()?.requestId as string;
  },
});
export { logger };

const app: Koa = new Koa();

/** START AsyncLocalStorage requestId middleware **/
koaApp.use(async (ctx: Koa.Context, next: Koa.Next) => {
  // use x-request-id or fallback to a nanoid
  const requestId: string =
    ctx.request.headers["x-request-id"] ||
    customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 6)();
  // every other Koa middleware will run within the AsyncLocalStorage context
  await asyncLocalStorage.run({ requestId }, async () => {
    return next();
  });
});
/** END AsyncLocalStorage requestId middleware **/