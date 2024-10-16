import { Route } from '@/types';
import { processItems } from './utils';

const baseURL = 'https://www.mini4k.com';

export const route: Route = {
    path: '/lastAdds',
    url: baseURL,
    categories: ['multimedia'],
    example: '/mini4k/lastAdds',
    parameters: {},
    features: {
        requireConfig: false,
        requirePuppeteer: false,
        antiCrawler: false,
        supportBT: true,
        supportPodcast: false,
        supportScihub: false,
    },
    radar: [],
    name: '最新电影和电视',
    maintainers: ['sijinhui'],
    handler: async (ctx) => {
        const items = await processItems(ctx, baseURL);

        return {
            title: 'mini4k-最新电影和电视',
            link: baseURL,
            description: '',
            item: items,
        };
    },
};
