function nearestChapter(chapterObj,page){
    let chapter="";
    let min =Number.POSITIVE_INFINITY;
    for( key in chapterObj){
      let diff = Math.abs(page-chapterObj[key]);
      if(diff < min){
       min = diff;
       chapter = key;
       }
      if(diff === min){
        if(chapterObj[key]-page > 0){
          chapter = key;
          }
      }
     }
    return chapter; 
    }
    console.log(
    nearestChapter(
      {
        "Chapter 1": 1,
        "Chapter 2": 15,
        "Chapter 3": 37,
      },
      10
    )
  ); //"Chapter 2"
  
  console.log(
    nearestChapter(
      {
        "New Beginnings": 1,
        "Strange Developments": 62,
        "The End?": 194,
        "The True Ending": 460,
      },
      200
    )
  ); //"The End?"
  
  console.log(
    nearestChapter(
      {
        "Chapter 1b": 5,
        "Chapter 1a": 1,
      },
      3
    )
  ); //"Chapter 1b"