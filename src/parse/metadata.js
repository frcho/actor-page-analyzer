const cheerio = require('cheerio');

function parseMetadata({ html, $ }) {
    if (!$) {
        $ = cheerio.load(html);
    }
    const result = {};
    $('meta').each(function () {
        const $tag = $(this);
        const name = $tag.attr('name') || $tag.attr('property');
        if (name) {
            result[name] = $tag.attr('content');
        }
    });
    $('head title').each(function () {
        result.title = $(this).text();
    });

    return result;
}

module.exports = parseMetadata;
