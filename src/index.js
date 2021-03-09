module.exports = function check(str, bracketsConfig) {
    let newStack = [];
    let openingBracket = []; 
    let closingBracket = [];
    for (let j = 0; j < bracketsConfig.length; j++) {
        openingBracket[j] = bracketsConfig[j][0];
        closingBracket[j] = bracketsConfig[j][1];
    }
    for (let i = 0; i < str.length; i++) {
        if ((newStack.length === 0) && (openingBracket.indexOf(str[i]) > -1)) {
            newStack.push(str[i]);
        } else if ((closingBracket.indexOf(str[i]) > -1) && (closingBracket.indexOf(str[i]) === openingBracket.indexOf(newStack[newStack.length - 1]))) {
                newStack.pop();
        } else if (openingBracket.indexOf(str[i]) > -1) {
            newStack.push(str[i]);
        } else {
            return false
        }
    }
    return (newStack.length === 0);
}
