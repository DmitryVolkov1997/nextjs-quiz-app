import axios from "axios"
import app from "@/firebase"

export const getContentType = () => ({
    "Content-Type": "application/json",
})

export const instance = axios.create({
    baseURL: app.options.databaseURL,
    headers: getContentType()
})
