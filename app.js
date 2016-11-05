var quotes = [
	{
		quote : "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.",
		author: "~ A. P. J. Abdul Kalam"
	},
	{
		quote : "How many cares one loses when one decides not to be something but to be someone.",
		author: "~ Gabrielle “Coco” Chanel"
	},
	{
		quote : "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
		author: "~ Dr. Seuss"
	},
	{
		quote : "Imitation is suicide.",
		author: "~ Ralph Waldo Emerson"
	},
	{
		quote : "Do your own thing on your own terms and get what you came here for.",
		author: "~ Oliver James"
	},
	{
		quote : "Flatter yourself critically.",
		author: "~ Willis Goth Regier"
	},
	{
		quote : "Do what you feel in your heart to be right, for you’ll be criticized anyway.",
		author: "~ Eleanor Roosevelt"
	},
	{
		quote : "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
		author: "~ Mark Twain"
	},
	{
		quote : "I will not let anyone walk through my mind with their dirty feet.",
		author: "~ Mahatma Gandhi"
	},
	{
		quote : "Better to write for yourself and have no public, than to write for the public and have no self.",
		author: "~ Cyril Connolly"
	},
	{	quote : "We must not allow other people’s limited perceptions to define us.",
		author: "~ Virginia Satir"
	},
	{
		quote : "Don’t look for society to give you permission to be yourself.",
		author: "~ Steve Maraboli"
	},
	{
		quote : "If things go wrong, don’t go with them.",
		author: "~ Roger Babson"
	},
	{
		quote : "Wanting to be someone else is a waste of who you are.",
		author: "~ Kurt Cobain"
	},
	{
		quote : "Tension is who you think you should be. Relaxation is who you are.",
		author: "~ Chinese Proverb"
	},
	{
		quote : "Where’s your will to be weird?",
		author: "~ Jim Morrison"
	},
	{
		quote : "Some people say you are going the wrong way, when it’s simply a way of your own.",
		author: "~ Angelina Jolie"
	},
	{
		quote : "Remember to always be yourself. Unless you suck.",
		author: "~ Joss Whedon"
	},
	{
		quote : "Do what you can, with what you have, where you are.",
		author: "~ Theodore Roosevelt"
	},
	{
		quote : "Be yourself, everyone else is already taken.",
		author: "~ Oscar Wilde"
	},
	{
		quote : "I took a deep breath and listened to the old bray of my heart. I am. I am. I am.",
		author: "~ Sylvia Plath"
	},
	{
		quote : "There came a time when the risk to remain tight in the bud was more painful than the risk it took to blossom.",
		author: "~ Anaïs Nin"
	},
	{
		quote : "To find yourself, think for yourself.",
		author: "~ Socrates"
	},
	{
		quote : "If you seek authenticity for authenticity’s sake you are no longer authentic.",
		author: "~ Jean Paul Sartre"
	},
	{
		quote : "If you cannot be a poet, be the poem.",
		author: "~ David Carradine"
	},
	{
		quote : "This above all: to thine own self be true.",
		author: "~ William Shakespeare"
	},
	{
		quote : "We must be our own before we can be another’s.",
		author: "~ Ralph Waldo Emerson"
	},
	{
		quote : "Just let awareness have its way with you completely.",
		author: "~ Scott Morrison"
	},
	{
		quote : "Do what you must, And your friends will adjust.",
		author: "~ Robert Brault"
	}
];

$(document).ready(function () {
  getNewQuote();
  var i, quote, author;
	function getNewQuote() {
    i = Math.floor(Math.random() * quotes.length);
    quote = quotes[i].quote;
    author = quotes[i].author;
    
    $(".quote").text('" ' + quote + ' "');
    $(".author").text(author);
  }
  $("#newQuote").on('click', function(){
    getNewQuote();
  });
  $("#tweet").on('click', function(){
    window.open("https://twitter.com/intent/tweet?text=" + quote + " " + author);
  });
});