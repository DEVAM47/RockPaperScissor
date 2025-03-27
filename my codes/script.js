// Get DOM elements
const choices = document.querySelectorAll('.choice');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');

// Initialize scores
let player = 0;
let computer = 0;

// Game options
const options = ['rock', 'paper', 'scissors'];

// Add click event listeners to choices
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.id;
        const computerChoice = getComputerChoice();
        
        // Get result
        const result = getResult(playerChoice, computerChoice);
        
        // Update scores
        updateScore(result);
        
        // Display result
        displayResult(result, playerChoice, computerChoice);
    });
});

// Get computer's choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Determine game result
function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    }
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    }
    
    return 'lose';
}

// Update score based on result
function updateScore(result) {
    if (result === 'win') {
        player++;
        playerScore.textContent = player;
    } else if (result === 'lose') {
        computer++;
        computerScore.textContent = computer;
    }
}

// Display result message
function displayResult(result, playerChoice, computerChoice) {
    let message = '';
    
    if (result === 'win') {
        message = `You win! ${playerChoice} beats ${computerChoice}`;
        resultText.style.color = '#4CAF50';
    } else if (result === 'lose') {
        message = `You lose! ${computerChoice} beats ${playerChoice}`;
        resultText.style.color = '#f44336';
    } else {
        message = `It's a draw! Both chose ${playerChoice}`;
        resultText.style.color = '#ffd700';
    }
    
    resultText.textContent = message;
    
    // Add animation to result text
    resultText.style.animation = 'none';
    resultText.offsetHeight; // Trigger reflow
    resultText.style.animation = 'fadeIn 0.5s ease-in-out';
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style); 