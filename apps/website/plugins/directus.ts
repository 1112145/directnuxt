import { createDirectus, rest } from '@directus/sdk';

export default () => {
    
    const config = useRuntimeConfig();

    const directusURL = config.public.NUXT_DIRECTUS_URL as string;

    const directus = createDirectus(directusURL).with(rest());

    console.log('Directus plugin loaded', directusURL);


    return {
        provide: {
            directus
        }
    }
};