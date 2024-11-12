var i = 0;

async function getQuotes() {
    let a = await fetch("https://dummyjson.com/quotes");
    let response = await a.text()
    
    let json = JSON.parse(response);
    let quotes = []
    let authors = []
    json.quotes.forEach(quoteObj => {
        let quote = quoteObj.quote
        let author = quoteObj.author
        quotes.push(quote)
        authors.push(author)
    });

    document.querySelectorAll(".card").forEach(e => {
        e.querySelector(".q").append(quotes[i])
        e.querySelector(".info").append(authors[i])
        i++;
    })

}

getQuotes();

let button = document.querySelector(".btn")
button.addEventListener("click", ()=> {

    document.querySelectorAll(".card").forEach(e => {
        e.querySelector(".q").innerHTML = ''
        e.querySelector(".info").innerHTML = ''
    })

    i += 6;

    if(i > 30) {
        i = 0;
    }


    getQuotes()
})