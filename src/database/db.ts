import mongoose, { ConnectionStates } from "mongoose";

type TMongooConnection = {
    status: ConnectionStates
}

export const mongooConnection:TMongooConnection = {
    status: ConnectionStates.connected
}

export const connected = async () => {
    if(mongooConnection.status === ConnectionStates.connected){
        console.log('estamos conectados')
        return;
    }

    if(mongoose.connections.length > 0){
        mongooConnection.status = mongoose.connections[0].readyState

        if(mongooConnection.status === ConnectionStates.connected){
            console.log('usando conexión anterior')
            return
        }

        await mongoose.disconnect()
    }

    await mongoose.connect('...')
    mongooConnection.status = ConnectionStates.connected   
}

export const disconnect = async () => {
    if(mongooConnection.status !== ConnectionStates.connected)return
    
    await mongoose.disconnect()
}