import { db } from '@/database'
import { Entry } from '@/models'
import type { NextApiRequest, NextApiResponse } from 'next'
import { TEntry } from '../../types/entry';

type Data = { message: string } | TEntry[] | TEntry

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    switch (req.method) {
        case ('GET'): return getEntries(res)
        default: return res.status(400).json({ message: 'endPoint not exist' })
    }
}

const getEntries = async (res: NextApiResponse<Data>) => {
    db.connected()
    const listEntries = await Entry.find().sort({ createdAt: 'desc' })
    db.disconnect()
    return res.status(200).json(listEntries)
}

export default handler