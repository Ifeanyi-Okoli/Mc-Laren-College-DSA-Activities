function random_bg_color() {
    Math.random()*255;
    let x = Math.ceil(Math.random()*256);
    let y = Math.trunc(Math.random()*256);
    let z = Math.floor(Math.random()*256);
   
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    
    console.log(bgColor);
    /* for testing it you can paste the below code in browser console and it will change the 
    background color for the current page.
    */
   // document.body.style.background = bgColor;
    
}

random_bg_color();