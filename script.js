//variable

let btn = document.querySelector('#new-quote');
let quote= document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
    {
    quote:`"All the world’s a stage, and all the men and women merely players."`,

    person:`William Shakespeare`
},
    {
    quote:`"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."`,

    person:`Steve Jobs`
},
    {
    quote:`"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. "`,

    person:`Oprah Winfrey`
},
    {
    quote:`"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,

    person:`James Cameron`
},
    {
    quote:`"You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."`,

    person:`John Lennon`
},
    {
    quote:`"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."`,

    person:`Martin Luther King Jr.`
},
{
    quote:`"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. "`,
    person:`Helen Keller`
},
{
    quote:`"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
    person:`Mother Teresa`
},
{
    quote:`"Keep smiling, because life is a beautiful thing and there's so much to smile about"`,
    person:`Marilyn Monroe`
},
{
    quote:`"In the depth of winter, I finally learned that within me there lay an invincible summer"`,
    person:`Albert Camus`
},
{
    quote:`"So we beat on, boats against the current, borne back ceaselessly into the past"`,
    person:`F. Scott Fitzgerald`
}
];

btn.addEventListener('click',function(){

    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText =quotes[random].quote;
    person.innerText =quotes[random].person;
})