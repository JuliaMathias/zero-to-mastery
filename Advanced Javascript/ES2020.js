// BigInt

typeof 1n

// Optional Chaining Operator

let will_pokemon = {
  pikachu: {
    species: 'Mouse pokemon',
    height: 0.4,
    weight: 6
    power:'lightning'
  }
}

let andrei_pokemon = {
  raichu: {
    species: 'Mouse pokemon',
    height: 0.8,
    weight: 30
  }
}

let weight = will_pokemon.pikachu.weight
console.log('weight:', weight)

let weight3 = andrei_pokemon?.pikachu?.weight

console.log(weight3)

// Nullish Coalescing Operator

let power = will_pokemon?.pikachu?.power ?? 'no power'
