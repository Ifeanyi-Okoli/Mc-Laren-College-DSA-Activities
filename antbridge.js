// P11 - Ant Bridge
// My pet bridge-maker ants are marching across a terrain from left to right.

// If they encounter a gap, the first one stops and then next one climbs over him, then the next, and the next, until a bridge is formed across the gap.

// What clever little things they are!

// Now all the other ants can walk over the ant-bridge.

// When the last ant is across, the ant-bridge dismantles itself similar to how it was constructed.

// This process repeats as many times as necessary (there may be more than one gap to cross) until all the ants reach the right hand side.

// Challenge
// My little ants are marching across the terrain from left-to-right in the order A then B then C...

// What order do they exit on the right hand side?

// Notes
// - = solid ground
// . = a gap
// The number of ants may differ but there are always enough ants to bridge the gaps
// The terrain never starts or ends with a gap
// Ants cannot pass other ants except by going over ant-bridges
// If there is ever ambiguity which ant should move, then the ant at the back moves first
// Example
// ants = GFEDCBA
// terrain = ------------...-----------
// Output
// result = EDCBAGF
// Details
// Ants moving left to right.

// GFEDCBA
// ------------...-----------
// The first one arrives at a gap.

// GFEDCB     A
// ------------...-----------
// They start to bridge over the gap...

// GFED       ABC
// ------------...-----------
// ...until the ant-bridge is completed!

// GF         ABCDE
// ------------...-----------
// And then the remaining ants can walk across the bridge.

//                F
// G          ABCDE
// ------------...-----------
// And when no more ants need to cross...

//            ABCDE        GF
// ------------...-----------
// ... the bridge dismantles itself one ant at a time....

                
//              CDE      BAGF
// ------------...-----------
// ...until all ants get to the other side

                
//                    EDCBAGF
// ------------...-----------

// let antBridge = function(ants, terrain) {
//     let arr = ants.split('');
//     for (var i=0; i<terrain.length; i++) {
//       if (terrain[i] === '.' || terrain[i-1] === '.' || terrain[i+1] === '.') {
//         arr.unshift(arr.pop());
//       }
//     };
//     return arr.join('');
//   }


//or

let antBridge = function(ants, terrain) {
    let ant = ants.split('')
    let ter = terrain.split('')
  
    for(let i = 0; i < terrain.length; i++){
      if( ter[i] == '.'){
        ant.unshift(ant.pop())
      }
      if( ter[i] == '-' && ter[i - 1] == '.'){
        ant.unshift(ant.pop())
        continue
      }
      if( ter[i] == '-' && ter[i + 1] == '.'){
        ant.unshift(ant.pop())
      }
    }
    return ant.join('')
    return ants;
  }

console.log(antBridge("ABCDEF", "-------...-------..-----.-----"));
console.log(antBridge("DCBA", "---..--..-.------") == "BADC")
console.log(antBridge("IHGFEDCBA", "----.------") == "CBAIHGFED")
console.log(antBridge("HGFEDCBA", "--.....-----.....---...-......------...--") == "GFEDCBAH")
console.log(antBridge("CBA", "--") == "CBA")
console.log(antBridge("HGFEDCBA", "----...---") == "EDCBAHGF")
console.log(antBridge("GFEDCBA", "----..-----.--....------..---") == "CBAGFED")
console.log(antBridge("KJIHGFEDCBA", "----......--........---..-...----") == "DCBAKJIHGFE")
console.log(antBridge("EDCBA", "------.----.------...-.----") == "CBAED")
console.log(antBridge("KJIHGFEDCBA", "--") == "KJIHGFEDCBA")
console.log(antBridge("EDCBA", "--...-...----") == "DCBAE")
console.log(antBridge("LKJIHGFEDCBA", "------") == "LKJIHGFEDCBA")
