import { db } from '@/database'
import { Entry } from '@/models'
import { TEntry } from '@/types'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { message: string } | TEntry


export const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { method } = req
    const { id } = req.query

    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: 'el id no es valido ' + id })
    }

    switch (method) {
        case 'PUT':
            return updateEntry(req, res)
        case 'GET':
            return getEntryById(req, res)
        default:
            return res.status(400).json({ message: 'error al actualizar, método incorrecto' })
    }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        await db.connected()
        const { id } = req.query
        const entryFindById = await Entry.findById(id)
        const {
            description = entryFindById?.description,
            status = entryFindById?.status
        } = req.body as TEntry

        if (!entryFindById) {
            await db.disconnect()
            return res.status(400).json({ message: 'No existe entrada con el id: ' + id })
        }

        const updateEntry = await Entry.findByIdAndUpdate(id, { description, status, }, { runValidators: true, new: true })
        res.status(200).json(updateEntry!)
        await db.disconnect()

    } catch (error) {
        console.error(error)
        await db.disconnect()
        return res.status(400).json({ message: 'error al actualizar' })
    }
}

const getEntryById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        db.connected()
        const { id } = req.query
        const entry = await Entry.findById(id)
        db.disconnect()
        return res.status(200).json(entry!)
    } catch (error) {
        db.disconnect()
        console.error(error)
        return res.status(200).json({ message: 'error' })
    }
}


export default handler