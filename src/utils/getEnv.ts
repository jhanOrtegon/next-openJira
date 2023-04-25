export const getEnv = () => {
    const MONGO_URL = process.env.MONGO_URL

    return{
        MONGO_URL
    }
}