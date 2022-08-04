import { FC, PropsWithChildren, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';

import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
    entries: Entry[];
};

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Non laboris nulla sunt ad culpa nostrud eu et est ea.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'En-Progreso: Velit reprehenderit ea nisi incididunt.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'Terminadas: Amet anim nostrud reprehenderit incididunt tempor ipsum Lorem cupidatat minim et ullamco sunt anim.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ],
}

export const EntriesProvider: FC<PropsWithChildren<EntriesState>> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = (description: string) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type: '[Entry] - Add-Entry', payload: newEntry })

    };

    const updateEntry = (entry: Entry) => {
        dispatch({ type: '[Entry] - Entry-Updated', payload: entry })
    }


    return (
        <EntriesContext.Provider value={{
            ...state,
            //Metodos
            addNewEntry,
            updateEntry,
        }}>
            {children}
        </EntriesContext.Provider>
    )
};