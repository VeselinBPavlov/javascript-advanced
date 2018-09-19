function extractParenthesis(elementID) {
    let text = document.getElementById(elementID).textContent;
    let pattern = /\(([^)]+)\)/g;
    let result = [];

    while (match = pattern.exec(text)) {
        result.push(match[1]);
    }

    return result.join('; '); 
}