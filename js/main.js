var arrOfQoutes=['Beware of what you become in pursuit of what you want.','It\'s not what happens to you, but how you react to it that matters.','The best revenge is massive success.',
'You miss 100% of the shots you don\'t take.','Resentment is like drinking poison and waiting for your enemies to die.','Do not take life too seriously. You will not get out alive.']
var arrOfAuthors=['Jim Rohn','Epictetus','Frank Sinatra', 'Wayne Gretzy','Nelson Mandela', 'Elbert Hubbard']


var i=0;
function getQuote(){
    var rand=Math.floor(Math.random()*(arrOfQoutes.length));
    document.getElementById('quote').innerHTML='" '+arrOfQoutes[rand]+' "';
    document.getElementById('author').innerHTML="--"+arrOfAuthors[rand];
}
