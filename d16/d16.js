const products = [
    {
      "productId": 234435,
      "colorId": 1,
      "size": "11-M"
    },
    {
      "productId": 443434,
      "colorId": 2,
      "size": "11-M"
    },
    {
      "productId": 343434,
      "colorId": 1,
      "size": "11-L"
    },
    {
      "productId": 322333,
      "colorId": 2,
      "size": "12-M"
    }
  ];
  // use reduce to generate a new object which has productId as key and value will be 
  //an object with `colorId` and `size` property.
  /* E.g entry in the object
  322333: {
     "productId": 322333,
      "colorId": 2,
    }
  */

let generateObj = (acc, prod)=>{
    acc[prod.productId] = {
        "colorId": prod.colorId,
        "size" : prod.size
    };
    return acc;
}

 
  let modifiedObj = products.reduce(generateObj);// final answer here

  console.log(modifiedObj);