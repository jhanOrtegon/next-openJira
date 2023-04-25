import { db, seedData } from '@/database'
import { Entry } from '@/models'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    if (process.env.NODE_ENV === 'production') {
        return res.status(401).json({ message: 'No tienes acceso a este servicio' })
    }

    await db.connected()
    console.log('hola mundo')
    await Entry.deleteMany();
    await Entry.insertMany(seedData);

    await db.disconnect()

    return res.status(200).json({ message: 'Proceso realizado correctamente' })
}

export default handler