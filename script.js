// Get the boxes for question, answers, next button, and end message
const questionBox = document.getElementById("question"); // This is the question box
const nextBox = document.getElementById("nextButton"); // This is the next button
const end = document.getElementById("end"); // This is the end message box

// Get the answer buttons
const answer1 = document.getElementById("ans1"); // First answer button
const answer2 = document.getElementById("ans2"); // Second answer button
const answer3 = document.getElementById("ans3"); // Third answer button
const answer4 = document.getElementById("ans4"); // Fourth answer button

// Keep track of which question we're on
let count = 1; // Start at question 1
let isValid = false; // This is to check if we answered the question yet
let correct = 0; // This counts how many answers we got right

// When we click on an answer button, do something
answer1.addEventListener('click', (event) => {
    console.log(1); // Print "1" to the console
    quiz(1, event); // Call quiz function for answer 1
});
answer2.addEventListener('click', (event) => {
    console.log(2); // Print "2" to the console
    quiz(2, event); // Call quiz function for answer 2
});
answer3.addEventListener('click', (event) => {
    console.log(3); // Print "3" to the console
    quiz(3, event); // Call quiz function for answer 3
});
answer4.addEventListener('click', (event) => {
    console.log(4); // Print "4" to the console
    quiz(4, event); // Call quiz function for answer 4
});

// This is the function that checks if we chose the right answer
function quiz(pressed, event){
    let inc = `question${count}`; // Make a name for the current question
    let ans = quizData[inc].right; // Get the right answer from the data
    let current = event.target; // The button we clicked
    console.log(`ans is ${ans}`); // Show the correct answer in the console

    // If we chose the right answer, add points
    if (ans === pressed){
        if(!isValid) {
            correct++; // Add one to correct answers if it's right
        }
        isValid = true; // We answered the question
        current.classList.add('correct'); // Add green color for right answer
    } else {
        isValid = true; // We answered the question
        current.classList.add('incorrect'); // Add red color for wrong answer
    };
};

// This is what happens when we click "Next" to go to the next question
function next() {
    if(count === 21) { // If it's the last question
        // Hide the answer buttons and the next button
        answer1.classList.add('hidden');
        answer2.classList.add('hidden');
        answer3.classList.add('hidden');
        answer4.classList.add('hidden');
        nextButton.classList.add('hidden');
        
        // Show a message saying we won with our score
        end.innerText = `HOORRRRRAAAAY YOU WON WITH ${correct}/20`;
        end.classList.add('yes');
        questionBox.classList.add('hidden'); // Hide the question
    }

    // Show the next question and answers
    let inc = `question${count}`;
    questionBox.innerText = quizData[inc].question // Show the question
    answer1.innerText = quizData[inc].answer1 // Show the first answer
    answer2.innerText = quizData[inc].answer2 // Show the second answer
    answer3.innerText = quizData[inc].answer3 // Show the third answer
    answer4.innerText = quizData[inc].answer4 // Show the fourth answer

    isValid = false; // Reset the valid flag for the next question

    // Remove the colors from the answer buttons (correct/incorrect)
    answer1.classList.remove('correct', 'incorrect');
    answer2.classList.remove('correct', 'incorrect');
    answer3.classList.remove('correct', 'incorrect');
    answer4.classList.remove('correct', 'incorrect');
}

// When we click the "Next" button, go to the next question
nextButton.addEventListener('click', () => {
    if(isValid) { // Only go to the next question if we answered
        count++; // Go to the next question
        isValid = false; // Reset the valid flag
        next(); // Show the next question
    }
});

// All the quiz questions and answers
const quizData = {
    question1: {
        question: "What animal represents Australia?", // Question 1
        answer1: "A) Kangaroo", // First answer
        answer2: "B) Lion", // Second answer
        answer3: "C) Bear", // Third answer
        answer4: "D) Eagle", // Fourth answer
        right: 1 // The right answer is answer 1
    },
    question2: {
        question: "What flower is a symbol of the Netherlands?", // Question 2
        answer1: "A) Rose", // First answer
        answer2: "B) Tulip", // Second answer
        answer3: "C) Daisy", // Third answer
        answer4: "D) Sunflower", // Fourth answer
        right: 2 // The right answer is answer 2
    },
    question3: {
        question: "Which bird is the national symbol of the United States?", // Question 3
        answer1: "A) Sparrow", // First answer
        answer2: "B) Bald Eagle", // Second answer
        answer3: "C) Robin", // Third answer
        answer4: "D) Penguin", // Fourth answer
        right: 2 // The right answer is answer 2
    },
    question4: {
        question: "What animal represents Canada?", // Question 4
        answer1: "A) Beaver", // First answer
        answer2: "B) Moose", // Second answer
        answer3: "C) Fox", // Third answer
        answer4: "D) Wolf", // Fourth answer
        right: 1 // The right answer is answer 1
    },
    question5: {
        question: "Which tree is a national symbol of Lebanon?", // Question 5
        answer1: "A) Oak Tree", // First answer
        answer2: "B) Cedar Tree", // Second answer
        answer3: "C) Pine Tree", // Third answer
        answer4: "D) Maple Tree", // Fourth answer
        right: 2 // The right answer is answer 2
    },
    question6: {
        question: "What color is often associated with grass and trees?", // Question 6
        answer1: "A) Blue", // First answer
        answer2: "B) Yellow", // Second answer
        answer3: "C) Green", // Third answer
        answer4: "D) Red", // Fourth answer
        right: 3 // The right answer is answer 3
    },
    question7: {
        question: "Which color is commonly used for warning signs?", // Question 7
        answer1: "A) Blue", // First answer
        answer2: "B) Orange", // Second answer
        answer3: "C) Yellow", // Third answer
        answer4: "D) Purple", // Fourth answer
        right: 3 // The right answer is answer 3
    },
    question8: {
        question: "What color do you get when you mix red and white?", // Question 8
        answer1: "A) Pink", // First answer
        answer2: "B) Brown", // Second answer
        answer3: "C) Purple", // Third answer
        answer4: "D) Orange", // Fourth answer
        right: 1 // The right answer is answer 1
    },
    question9: {
        question: "Which color is associated with the sky and ocean?", // Question 9
        answer1: "A) Green", // First answer
        answer2: "B) Blue", // Second answer
        answer3: "C) Brown", // Third answer
        answer4: "D) Black", // Fourth answer
        right: 2 // The right answer is answer 2
    },
    question10: {
        question: "What color represents danger and is often used for stop signs?", // Question 10
        answer1: "A) Green", // First answer
        answer2: "B) Red", // Second answer
        answer3: "C) White", // Third answer
        answer4: "D) Yellow", // Fourth answer
        right: 2 // The right answer is answer 2
    },
    question11: {
        question: "What is the capital city of France?", // Question 11
        answer1: "A) Berlin", // First answer
        answer2: "B) Paris", // Second answer
        answer3: "C) London", // Third answer
        answer4: "D) Rome", // Fourth answer
        right: 2 // The right answer is answer 2
    },
    question12: {
        question: "Which country is known as the Land of the Rising Sun?", // Question 12
        answer1: "A) China", // First answer
        answer2: "B) Japan", // Second answer
        answer3: "C) India", // Third answer
        answer4: "D) Thailand", // Fourth answer
        right: 2 // The right answer is answer 2
    },
    question13: {
        question: "What is the largest country in the world?", // Question 13
        answer1: "A) Canada", // First answer
        answer2: "B) Russia", // Second answer
        answer3: "C) China", // Third answer
        answer4: "D) USA", // Fourth answer
        right: 2 // The right answer is answer 2
    },
    question14: {
        question: "Which continent is known for its deserts, including the Sahara?", // Question 14
        answer1: "A) Asia", // First answer
        answer2: "B) Africa", // Second answer
        answer3: "C) Europe", // Third answer
        answer4: "D) Australia", // Fourth answer
        right: 2 // The right answer is answer 2
    },
    question15: {
        question: "What language do they speak in Brazil?", // Question 15
        answer1: "A) Spanish", // First answer
        answer2: "B) Portuguese", // Second answer
        answer3: "C) French", // Third answer
        answer4: "D) English", // Fourth answer
        right: 2 // The right answer is answer 2
    },
    question16: {
        question: "How many players are on a soccer team?", // Question 16
        answer1: "A) 9", // First answer
        answer2: "B) 10", // Second answer
        answer3: "C) 11", // Third answer
        answer4: "D) 12", // Fourth answer
        right: 3 // The right answer is answer 3
    },
    question17: {
        question: "Which country won the FIFA World Cup in 2018?", // Question 17
        answer1: "A) Brazil", // First answer
        answer2: "B) Germany", // Second answer
        answer3: "C) France", // Third answer
        answer4: "D) Argentina", // Fourth answer
        right: 3 // The right answer is answer 3
    },
    question18: {
        question: "What does FIFA stand for?", // Question 18
        answer1: "A) Football International Federation", // First answer
        answer2: "B) Federation of International Football Associations", // Second answer
        answer3: "C) Federation of International Football Administrators", // Third answer
        answer4: "D) Football International Federation Association", // Fourth answer
        right: 2 // The right answer is answer 2
    },
    question19: {
        question: "In which year did England win their first World Cup?", // Question 19
        answer1: "A) 1966", // First answer
        answer2: "B) 1970", // Second answer
        answer3: "C) 1982", // Third answer
        answer4: "D) 1990", // Fourth answer
        right: 1 // The right answer is answer 1
    },
    question20: {
        question: "What sport is played in a World Cup tournament every four years?", // Question 20
        answer1: "A) Basketball", // First answer
        answer2: "B) Tennis", // Second answer
        answer3: "C) Soccer (Football in many countries)", // Third answer
        answer4: "D) Baseball", // Fourth answer
        right: 3 // The right answer is answer 3
    }
};
