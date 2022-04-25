const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//array of all the API Quotes 
let apiQuotes = [];

//Show loading_website bar
function loading_website() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide the loading_website bar
function load_complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//Show new quote
function newQuote() {
    loading_website();
    //picking a random quote from the API array
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    //console.log(quote);
    authorText.textContent = quote.author;

    //checking if Author else print Unknown 
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    }else {
        authorText.textContent = quote.author;
    }

    //adjusting styling based on quote length
    if (quote.text.length > 80){
        quoteText.classList.add('long-quote');
    }else {
        quoteText.classList.remove('long-quote');
    }
    //After quote shows - hide the loader
    quoteText.textContent = quote.text;
    load_complete();
}   

//fetching the data from the API 
async function getQuotes() {
    loading_website();
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
        //throw new Error('test error');
    }catch (error){
        //catching errors here
        counter = 0
        counter++;
        console.log(counter);
        if(counter < 5) {
            load_complete();
            quoteText.textContent = "An unknown error occured";
            authorText.textContent = "Possibly an API error";
            newQuoteBtn.innerText = "Try Again";
            twitterBtn.hidden = true;
        }
    }
}


//Tweeting our quote 
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// //EventListeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//On load of the page
getQuotes();