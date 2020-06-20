/*
Immediately Invoked Function Expression, is a common pattern for
creating local scopes.

Example:

    (function () { // the function expression is surrounded by parenthesis
    // variables defined here
    // can't be accessed outside
    })() // the function is immediately invoked
*/

const a = 1; const b = 2; const c = 3;

(function firstFunction () {
    const b = 5; const c = 6;
    (function secondFunction () {
        const b = 8
        console.log(`a: ${a}, b: ${b}, c: ${c}`);

        (function thirdFunction () {
            const a = 7; const c = 9;
            (function fourthFunction () {
                const a = 1; const c = 8
            })()
        })()
    })()
})()
