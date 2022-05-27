import { ILogObject, Logger } from "tslog";

const transportLogs: ILogObject[] = [];

function logToTransport(logObject: ILogObject) {
  transportLogs.push(logObject);
}

const logger: Logger = new Logger();

logger.attachTransport(
  {
    silly: logToTransport,
    debug: logToTransport,
    trace: logToTransport,
    info: logToTransport,
    warn: logToTransport,
    error: logToTransport,
    fatal: logToTransport,
  },
  "debug"
);