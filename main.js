import Pokemon from "./Pokemon.js";
//osztály példány kisi betű
let pokemon1 = new Pokemon("Ditto","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png","Jó esős reggelt!",$(".pokemonok"))
let pokemon2 = new Pokemon("Charizard","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png","Nem tudom!",$(".pokemonok"))


//pokemon1.nev="DITOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"
pokemon1.szerep="Harcos"
delete pokemon1.mondat
console.log(pokemon1.nev)
console.log(pokemon2.nev)

pokemon1.mondat="Hurrá elállt az eső"
pokemon1.beszel()

console.log(pokemon1)
console.log(pokemon2)