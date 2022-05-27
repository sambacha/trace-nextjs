import { logger } from "./index";

const childLogger = logger.getChildLogger({ name: "ChildLogger" });

childLogger.info("Log containing requestId"); // <-- will contain a requestId