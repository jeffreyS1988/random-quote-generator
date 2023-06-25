// Define an array of quotes
var quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The only source of knowledge is experience. - Albert Einstein",
    "Change is the only constant in life. - Heraclitus"
];

// Function to generate a random quote
function generateQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomNumber];
}

// Initial quote generation on page load
generateQuote();