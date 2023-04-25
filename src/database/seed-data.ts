import { EntryStatus } from "@/types"

interface seedEntry {
    description: string,
    createdAt: number,
    status: EntryStatus
}

export const seedData: seedEntry[] = [
    {
        description: 'Duis irure enim ea magna deserunt sunt.',
        status: 'pending',
        createdAt: Date.now() - 10000,
    },
    {
        description: 'Duis irure enim ea magna deserunt sunt.',
        status: 'pending',
        createdAt: Date.now(),
    },
    {
        description: 'Duis irure enim ea magna deserunt sunt.',
        status: 'pending',
        createdAt: Date.now() - 20000,
    },
]