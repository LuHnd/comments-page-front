import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default axios.create({
    baseURL: process.env.API_URL || "http://localhost:5000",
    headers: {
        'Content-Type': 'application/json'
    }
});