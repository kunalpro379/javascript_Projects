// Define the CFG
const grammar = {
    "S": ["#NP# #VP#."],
    "NP": ["#Det# #N#", "#Adj# #N#", "#PropN#", "#NP# #PP#"],
    "Det": ["the", "a", "an"],
    "Adj": ["big", "small", "old", "new"],
    "PropN": ["John", "Mary", "London", "Paris"],
    "N": ["cat", "dog", "bird", "car", "book", "man", "woman", "house", "tree"],
    "PP": ["#P# #NP#"],
    "P": ["in", "on", "at", "over", "under", "near", "beside"],
    "VP": ["#V#", "#V# #NP#", "#V# #NP# #PP#"],
    "V": ["chased", "ate", "saw", "read", "is", "was", "seems", "believes", "knows", "loves"],
    "Conj": ["and", "but", "or", "yet", "so"],
    "Adv": ["quickly", "slowly", "happily", "sadly", "eagerly"],
    "AdvP": ["#Adv#", "#AdvP# #Adv#"]
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSentence() {
    return expand("S");
}

function expand(symbol) {
//all possible expansions    
    const expansions = grammar[symbol];

    //choosing one expansom randomly
    const chosenExpansion = expansions[getRandomInt(0, expansions.length - 1)];

    const expanded = chosenExpansion.replace(/#(\w+)#/g, (match, nonTerminal) => {
        return expand(nonTerminal);//expanding non terminals
    });

    return expanded;
}

console.log("Generated sentences:");
for (let i = 0; i < 5; i++) {
    console.log(generateSentence());
}
