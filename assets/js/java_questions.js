// creating an array and passing the number, questions, options, and answers
let allQuestions = [
    {
    number: 1,
    question: "Which country won the first ever World Cup in 1930?",
    answer: "Uruguay",
    explanation: "The first FIFA World Cup was held in 1930, and the host nation, Uruguay, emerged as the winners by defeating Argentina in the final",
    options: [
      "England",
      "USA",
      "Uruguay",
      "Argentina"
    ]
  },
    {
    number: 2,
    question: "Which country has won the most World Cups?",
    answer: "Brazil",
    explanation: "Brazil has won the FIFA World Cup a record five times (in 1958, 1962, 1970, 1994, and 2002)",
    options: [
      "France",
      "Brazil",
      "Argentina",
      "Germany"
    ]
  },
    {
    number: 3,
    question: "Which country has appeared in three World Cup finals, but never won the competition?",
    answer: "Netherlands",
    explanation: "The Netherlands has reached the World Cup final three times (in 1974, 1978, and 2010) but has never won the competition",
    options: [
      "Greece",
      "Italy",
      "Ukraine",
      "Netherlands"
    ]
  },
    {
    number: 4,
    question: "Which country hosted 2010 world cup?",
    answer: "South Africa",
    explanation: "The 2010 FIFA World Cup was hosted by South Africa, making it the first time the tournament was held on the African continent",
    options: [
      "Ghana",
      "South Africa",
      "Mexico",
      "South Korea"
    ]
  },
    {
    number: 5,
    question: "In which World Cup did Diego Maradona score his infamous 'Hand of God' goal?",
    answer: "Mexico 1986",
    explanation: "Diego Maradona scored his infamous 'Hand of God' goal during the 1986 World Cup in Mexico, in a quarter-final match against England",
    options: [
      "Mexico 1986",
      "Italy 1968",
      "Germany 1986",
      "Argentina 1986"
    ]
  },
  
    {
    number: 6,
    question: "Which club has won the most Champions League titles?",
    answer: "Real Madrid",
    explanation: "Real Madrid has won the UEFA Champions League a record 13 times",
    options: [
      "FC Barcelona",
      "Real Madrid",
      "Chelsea",
      "Liverpool"
    ]
  },
    {
    number: 7,
    question: "Who is the Champions League's top goalscorer of all time?",
    answer: "Cristiano Ronaldo",
    explanation: "Cristiano Ronaldo is the all-time top scorer in the UEFA Champions League",
    options: [
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Diego Maradona",
      "Pelé"
    ]
  },
    {
    number: 8,
    question: "Which outfield player appeared in the Champions League final in three different decades?",
    answer: "Ryan Giggs",
    explanation: "Ryan Giggs appeared in the Champions League final for Manchester United in 1999, 2008, and 2011, making him an outfield player who has played in finals across three different decades",
    options: [
      "Cristiano Ronaldo",
      "Ryan Giggs",
      "Ronaldinho Gaúcho",
      "Lionel Messi"
    ]
  },
    {
    number: 9,
    question: "Which club is sometimes referred to as FC Hollywood?",
    answer: "Bayern Munich",
    explanation: "Bayern Munich, a club based in Germany, is sometimes colloquially referred to as 'FC Hollywood' due to the club's high profile, both on and off the pitch",
    options: [
      "Real Madrid",
      "Manchester United",
      "Tottenham",
      "Bayern Munich"
    ]
  },
    {
    number: 10,
    question: "In which year was the first European Championship held?",
    answer: "1960",
    explanation: "The first European Championship, also known as the UEFA European Championship or the Euros, was held in 1960",
    options: [
      "1960",
      "1961",
      "1962",
      "1963"
    ]
  },
    {
    number: 11,
    question: "Which country hosted the 2018 FIFA World Cup?",
    answer: "Russia",
    explanation: "The 2018 FIFA World Cup was hosted by Russia across multiple cities including Moscow, Saint Petersburg, and Sochi.",
    options: [
      "Qatar",
      "Russia",
      "Brazil",
      "South Africa"
    ]
  },
    {
    number: 12,
    question: "Who won the Golden Boot in the 2014 World Cup?",
    answer: "James Rodríguez",
    explanation: "James Rodríguez of Colombia won the Golden Boot in the 2014 World Cup by scoring six goals.",
    options: [
      "Lionel Messi",
      "Thomas Müller",
      "Neymar",
      "James Rodríguez"
    ]
  },
    {
    number: 13,
    question: "Which country won the World Cup in 2006?",
    answer: "Italy",
    explanation: "Italy won the 2006 FIFA World Cup in Germany by defeating France in the final through a penalty shootout.",
    options: [
      "France",
      "Germany",
      "Italy",
      "Brazil"
    ]
  },
    {
    number: 14,
    question: "Which player holds the record for the most goals scored in World Cup history?",
    answer: "Miroslav Klose",
    explanation: "Miroslav Klose of Germany holds the record with 16 goals scored in World Cup tournaments.",
    options: [
      "Ronaldo",
      "Pele",
      "Miroslav Klose",
      "Diego Maradona"
    ]
  },
    {
    number: 15,
    question: "Which country won the World Cup in 1998?",
    answer: "France",
    explanation: "France won the 1998 FIFA World Cup as the host nation by defeating Brazil 3-0 in the final.",
    options: [
      "France",
      "Brazil",
      "Germany",
      "Netherlands"
    ]
  },
    {
    number: 16,
    question: "Which nation reached their first World Cup final in 2018?",
    answer: "Croatia",
    explanation: "Croatia reached their first ever World Cup final in 2018, where they were defeated by France.",
    options: [
      "Croatia",
      "Belgium",
      "Portugal",
      "Switzerland"
    ]
  },
    {
    number: 17,
    question: "Which city hosted the World Cup final in 2014?",
    answer: "Rio de Janeiro",
    explanation: "The 2014 FIFA World Cup final was held at the Maracanã Stadium in Rio de Janeiro, Brazil.",
    options: [
      "São Paulo",
      "Brasília",
      "Fortaleza",
      "Rio de Janeiro"
    ]
  },
    {
    number: 18,
    question: "Which country hosted the World Cup in 1978?",
    answer: "Argentina",
    explanation: "The 1978 FIFA World Cup was hosted by Argentina, and they also won the tournament that year.",
    options: [
      "West Germany",
      "Brazil",
      "Italy",
      "Argentina"
    ]
  },
    {
    number: 19,
    question: "Who won the Golden Ball award in the 2010 World Cup?",
    answer: "Diego Forlán",
    explanation: "Diego Forlán of Uruguay won the Golden Ball (best player) award in the 2010 World Cup held in South Africa.",
    options: [
      "Diego Forlán",
      "Lionel Messi",
      "Wesley Sneijder",
      "David Villa"
    ]
  },
    {
    number: 20,
    question: "Which country has won the World Cup twice in a row?",
    answer: "Brazil",
    explanation: "Brazil won the World Cup consecutively in 1958 and 1962. Other countries like Italy and Germany have also achieved this feat, but Brazil is notable for doing it twice.",
    options: [
      "Spain",
      "Argentina",
      "France",
      "Brazil"
    ]
  }
];
let questions = getRandomQuestions([...allQuestions]);
// shuffle and get 10 random questions
function getRandomQuestions(arr){
    // Fisher-Yates shuffle
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements
    }
    const result = arr.slice(0, 10); // get first 10 questions after shuffling
    console.log("Returning array of length:", result.length);
    return result;
}