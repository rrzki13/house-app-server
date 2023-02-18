import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config()

export default {
    mode: process.env.MODE,
    service_name: process.env.SERVICE_NAME,
    mongo_url_dev: process.env.MONGO_URL_DEV,
    port: process.env.PORT,
    rootPath: path.resolve(__dirname, "..")
}