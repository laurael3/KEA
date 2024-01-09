// Define an array of possible random answers
const randomAnswers = [
    "You should watch: Fear and Loathing in Las Vegas",
    "You should watch: La La Land",
    "You should watch: Blade Runner: 2049",
    "You should watch: Mad Max: Fury Road",
    "You should watch: Edward Scissorhands",
    "You should watch: Joker",
    "You should watch: Babylon",
    "You should watch: Big Fish",
    "You should watch: Once Upon A Time In Hollywood",
    "You should watch: American Psycho",
    "You should watch: Interstellar",
    "You should watch: The Martian",
    "You should watch: Dune",
    "You should watch: Dunkirk",
    "You should watch: Barbie",
    "You should watch: Drive",
];

// Function to generate and display random text
function generateRandomText() {
    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * randomAnswers.length);
    
    // Get the random answer at the chosen index
    const randomAnswer = randomAnswers[randomIndex];

    // Display the random answer in the HTML
    document.getElementById("randomText").textContent = randomAnswer;
}

// Add a click event listener to the button
document.getElementById("generateButton").addEventListener("click", generateRandomText);


