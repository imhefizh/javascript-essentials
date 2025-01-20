// Global Scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
    // Block scope (a code inside curly bracket is called block)
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

// Printing
// console.log(globalVar);
// console.log(globalLet);
// console.log(globalConst);

// console.log(blockVar);

// In function or Function scope
function show() {
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

// console.log(functionVar);
// console.log(functionLet);
// console.log(functionConst);

