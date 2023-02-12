const cheerio = require('cheerio'), axios = require('axios'),
    url = 'https://www.banki.ru/products/currency/cb/'

const getData = async (currency) => {
    const array = []
    const response = await axios.get(url)
    const $ = await cheerio.load(response.data)
    const regex = new RegExp(currency)

    $('tr').each((e, i) => {
        if ($(i).text().match(regex)) {
            $(i).children().each((e, x) => array.push($(x).html()))
        }
    })
    return array[3]

}
export default getData;