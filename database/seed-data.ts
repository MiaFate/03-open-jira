interface SeedData{
    entries: SeedEntry[];
}

interface SeedEntry{
    description: string;
    status: string;
    createdAt: number;
}


export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Non laboris nulla sunt ad culpa nostrud eu et est ea.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'En-Progreso: Velit reprehenderit ea nisi incididunt.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'Terminadas: Amet anim nostrud reprehenderit incididunt tempor ipsum Lorem cupidatat minim et ullamco sunt anim.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ]
}