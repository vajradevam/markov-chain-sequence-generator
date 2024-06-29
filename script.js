function generateMarkovChain(text) {
    const words = text.trim().split(/\s+/);
    const markovChain = {};

    for (let i = 0; i < words.length - 1; i++) {
        const currentWord = words[i];
        const nextWord = words[i + 1];

        if (!markovChain[currentWord]) {
            markovChain[currentWord] = [];
        }
        markovChain[currentWord].push(nextWord);
    }

    return markovChain;
}

function generateSentence() {
    const inputText = document.getElementById('inputText').value;
    const numWords = document.getElementById('numWords').valueAsNumber;

    const markovChain = generateMarkovChain(inputText);

    let currentWord = Object.keys(markovChain)[Math.floor(Math.random() * Object.keys(markovChain).length)];
    let sentence = currentWord;

    for (let i = 1; i < numWords; i++) {
        const nextWords = markovChain[currentWord];
        const nextWord = nextWords[Math.floor(Math.random() * nextWords.length)];
        sentence += ' ' + nextWord;
        currentWord = nextWord;
    }

    const outputSentence = document.getElementById('outputSentence');
    outputSentence.textContent = sentence;
}
