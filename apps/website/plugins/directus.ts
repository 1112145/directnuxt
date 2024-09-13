import { createDirectus, readItems, readSingleton, rest, type RestClient } from '@directus/sdk';

export default async () => {
    
    const config = useRuntimeConfig();

    const directusURL = config.public.NUXT_DIRECTUS_URL as string;

    const directus = createDirectus(directusURL).with(rest());

    const global = await fetchGlobal(directus);


    return {
        provide: {
            directus,
            global, 
            readItems
        }
    }
};


async function fetchGlobal(directus: RestClient<any>) {
    try {
        const global = await directus.request(readSingleton('global'));
        return global;
    } catch (error: any) { 
        if (error.response.status === 403) {
            console.log('You do not have permission to read the global singleton. Please set it to public in the Directus admin panel.');
        }
        return null;
    }
}