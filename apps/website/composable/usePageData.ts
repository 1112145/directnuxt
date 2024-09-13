enum Status {
    draft = 'draft',
    published = 'published',
}

export default async (slug: string = '') => {
    const { $directus, $readItems } = useNuxtApp();

    const slugQuery = slug ? {
        _eq: slug
    } : {
        _null: true
    }


    async function fetchPageData(statuses: Status[]) {
        return await useAsyncData('page', () => {
            return $directus.request($readItems('page', {
                filter: {
                    slug: slugQuery,
                    status: {
                        _in: statuses
                    },
                },
                fields: [
                    'name',
                    'slug',
                    'is_public',
                    'status', {
                        seo: ['og_title', 'og_description', 'og_image'],
                    },
                    'blocks.*.*'
                ],
            }))
        });
    }

    const { data: page } = await fetchPageData([Status.published]);

    return unref((page as any))?.at(0);
}




