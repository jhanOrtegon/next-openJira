import { getEnv } from "@/utils/getEnv";
import mongoose, { ConnectionStates } from "mongoose";

type TMongooConnection = {
    status: ConnectionStates
}

const { MONGO_URL } = getEnv()
console.log(MONGO_URL)
export const mongooConnection: TMongooConnection = {
    status: ConnectionStates.disconnected
}

export const connected = async () => {

    if (mongooConnection.status === ConnectionStates.connected) {
        console.log('estamos conectados')
        return;
    }

    if (mongoose.connections.length > 0) {
        mongooConnection.status = mongoose.connections[0].readyState

        if (mongooConnection.status === ConnectionStates.connected) {
            console.log('usando conexión anterior')
            return
        }


        await mongoose.disconnect()
    }

    await mongoose.connect(MONGO_URL || '')
    console.log('Conectado a mongo')
    mongooConnection.status = ConnectionStates.connected
}

export const disconnect = async () => {

    if (process.env.NODE_ENV === 'development') return

    if (mongooConnection.status === ConnectionStates.disconnected) return

    console.log('estamos desconectados')

    await mongoose.disconnect()
}