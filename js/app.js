// variables
let btn = document.querySelector('#new-qoute');
let qoute = document.querySelector('.qoute');
let movie = document.querySelector('.movie');

const qoutes = [
    {qoute: "Hello Friend!",
    movie: "Elliot"},
    {qoute: "May the Force be with you.",
    movie: "-Star Wars, 1977"},
    {qoute: "There's no place like home.",
    movie:"-The Wizard of Oz, 1939"},
    {qoute: "I'll be back.",
    movie: " -The Terminator, 1984"},
    {qoute: "Just keep swimming.",
    movie: "-Finding Nemo, 2003"},
    {qoute: "Today, I consider myself the luckiest man on the face of the earth.",
    movie:"-The Pride of the Yankees, 1942"},
    {qoute: "You is kind. You is smart. You is important.",
    movie: "-The Help, 2011"},
    {qoute: "To infinity and beyond!",
    movie: " -Toy Story, 1995"},
    {qoute: "I don't have friends. I got family.",
    movie:"-Furious 7 (2015)"},
    {qoute: "I just wanted to take another look at you.",
    movie: "A Star Is Born (2018)"},
    {qoute: "This is how I win.",
    movie: "-Uncut Gems (2019)"},
    {qoute: "I am Groot",
    movie:"-Guardians of the Galaxy (2014)"},
    {qoute: "I want to play a game.",
    movie: "-Saw (2004)"},
    {qoute: "This is Sparta!",
    movie: "-300 (2006)"},
    {qoute: "The law says that you cannot touch. But I think I see a lot of lawbreakers up in this house tonight.",
    movie:"-Magic Mike (2012)"},
    {qoute: "Why so serious?",
    movie: "-The Dark Knight (2008)"},
    {qoute: "Is this your king?",
    movie: "-Black Panther (2018)"},
    {qoute: "But what I do have are a very particular set of skills, skills I have acquired over a very long career, skills that make me a nightmare for people like you.",
    movie:"-Taken (2008)"},
    {qoute: "Look at me. Look at me. I am the captain now.",
    movie: "-Captain Phillips (2013)"},
    {qoute: "My wife!",
    movie: "-Borat (2006)"},
    {qoute: "You sit on a throne of lies.",
    movie:"-Elf (2003)"},
    {qoute: "A million dollars isn't cool. You know what's cool?",
    movie: "The Social Network (2010)"},
    {qoute: "I wish I knew how to quit you.",
    movie: "-Brokeback Mountain (2005)"},
    {qoute: "If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you.",
    movie:"-Taken (2008)"},
    {qoute: "“Savvy?”",
    movie:"-Jack Sparrow (Pirates of the Caribbean)"},
    {qoute: "How dare you do exactly what I would do if I were you.?",
    movie: "-Jack Sparrow (Pirates of the Caribbean)"},
    {qoute: "Why fight when you can negotiate?.",
    movie: "-Jack Sparrow (Pirates of the Caribbean)"},
    {qoute: "This Is The Day You Will Always Remember As The Day You Almost Caught Captain Jack Sparrow.",
    movie:"-Jack Sparrow (Pirates of the Caribbean)"},
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()* qoutes.length);
    qoute.innerText = qoutes[random].qoute;
    movie.innerText = qoutes[random].movie;
});