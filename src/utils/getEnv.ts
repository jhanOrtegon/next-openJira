export const getEnv = () => {
    const CLIENT_KEY = process.env.NEXT_PUBLIC_CLIENT_KEY

    return{
        CLIENT_KEY
    }
}