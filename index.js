var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = function(name) {
  kittens.push(name);
}

var destructivelyPrependKitten = function(name) {
  kittens.unshift(name);
}

var destructivelyRemoveLastKitten = function(name) {
  kittens.pop()
}

var destructivelyRemoveFirstKitten = function(name) {
  kittens.shift()
}

kittens
