import app from "./app"
import "dotenv/config"
import { logger } from "./utils/logger"
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`Server is running on port http://localhost:${PORT}`);
})