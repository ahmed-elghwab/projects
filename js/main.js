var Quotes = [
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken.'
    },
    {'author': 'Marilyn Monroe', 
     'quote': 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.'
    },
    {'author': 'Frank Zappa', 
     'quote': 'So many books, so little time.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

// function Quote(){
//     var random = Math.ceil(Math.random()*Quotes.length);
//     document.getElementById('quotePost').innerHTML = `\"${Quotes[random].quote}\"`;
//     document.getElementById('authorPost').innerHTML = `--${Quotes[random].author}`;
//     console.log( Quotes[random].quote);
// }

var lastRandom = -1; // Store the last generated random number

function Quote() {
    var random;
    do {
        random = Math.floor(Math.random() * Quotes.length); // Generate a new random index
    } while (random === lastRandom); // Ensure it is not the same as the last one

    lastRandom = random; // Update the lastRandom value

    document.getElementById('quotePost').innerHTML = `\"${Quotes[random].quote}\"`;
    document.getElementById('authorPost').innerHTML = `--${Quotes[random].author}`;
    console.log(Quotes[random].quote);
}
