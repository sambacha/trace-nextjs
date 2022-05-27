import { Logger, ILogObject } from "tslog";

const log: Logger = new Logger();

const logWithTrace: ILogObject = log.trace(
  "I am a trace log with a stack trace."
);

console.log(JSON.stringify(logWithTrace, null, 2));