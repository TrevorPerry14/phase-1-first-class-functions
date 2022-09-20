function receivesAFunction(callback) {
    return callback()
}

recievesAFunction(function () { return "this is a callback"})

function returnsANamedFunction() {
    return function namedFunction() {
        return "this is the return value of my named function"
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        return "anonymous function"
    }
}