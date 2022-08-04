import { List, Paper } from '@mui/material'
import { FC, useContext, useMemo } from 'react';
import { EntryStatus } from '../../interfaces'
import { EntryCard } from './EntryCard'
import { EntriesContext } from '../../context/entries';

interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries } = useContext(EntriesContext);

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

    return (
        //TODO: aqui haremos drop
        <div>
            <Paper sx={{ height: 'calc(100vh - 200px)', overflow: 'auto', backgroundColor: 'transparent', padding: '1px 5px' }}>

                {/* Todo:  cambiara dependiendo de si estoy haciendo drag o no*/}

                <List sx={{ opacity: 1 }}>
                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }
                </List>
            </Paper>
        </div>
    )
}