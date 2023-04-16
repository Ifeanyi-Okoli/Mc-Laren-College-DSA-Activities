//You are given an object in which the keys inside the object are singular and it doesn't represent 
//the information it contains very well. So you as a programmer have been called to create a new 
//object in which the keys are plural so that the new object can represent the information very well.

function fixObject(obj) {
    let obj1 = {}
        for (let key in obj){
               obj1[key + "s"] = obj[key];
    }
    return obj1;
  }
  
  let obj = {
    sibling: 3,
    fav_movie: ['The Matrix', 'Titanic', 'Iron man', 'Avatar'],
    phone_number: [7872300000, 9012312312],
    friend: ['Raj', 'Kunal', 'Akash']
  }
  
  let newObject = fixObject(obj);
  
  console.log(newObject); 
  /*
  Output:
  
  {
    siblings: 3,
    fav_movies: ['The Matrix', 'Titanic', 'Iron man', 'Avatar'],
    phone_numbers: [7872300000, 9012312312],
    friends: ['Raj', 'Kunal', 'Akash']
  }
  */
//   Note: Order of the keys inside object doesn't matter here.