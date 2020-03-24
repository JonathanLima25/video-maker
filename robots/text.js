const algorithmia = require('algorithmia')
const algorithmiaApiKey = require('../credentials/algorithmia.json').apikey


function robot(content) {
    fetchContentFromWikipedia(content)
    // sanitizeContent(content)
    // breakContentIntoSentences(content)

    console.log('Logando se a função "fetchContentFromWikipedia" retorna uma Promise')
    console.log(fetchContentFromWikipedia())

    async function fetchContentFromWikipedia(content) {
        

        const algorithmiaAuthenticated = algorithmia(algorithmiaApiKey)
        const wikipediaAlgorithm = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2')
        const wikipediaResponse = await wikipediaAlgorithm.pipe(content.searchTerm)
        const wikipediaContent = wikipediaResponse.get()
        console.log(wikipediaContent)
    }
}

module.exports = robot