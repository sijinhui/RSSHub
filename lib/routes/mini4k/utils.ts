import ofetch from '@/utils/ofetch'; // 统一使用的请求库
import { load } from 'cheerio';

export async function processItems(ctx, baseURL) {
    const response = await ofetch(baseURL);
    const $ = load(response);

    const items = $('h2:contains("新上线")').next('div.block').find('div > ol > li').toArray();

    const process = await Promise.all(
        items.map(async (item) => {
            const link = $(item).find('div.content > a');

            const detailInfo = await ofetch(baseURL);

            return {
                title: link.text(),
                link: link.attr('href'),
                detail: detailInfo,
            };
        })
    );

    // console.log('------,', process);
    return process;
}
