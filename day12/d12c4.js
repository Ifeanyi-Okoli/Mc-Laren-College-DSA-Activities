let str = "";
for (let counter = 1; counter <= 6; counter += 2){
    if ((counter + 1) % 3 === 1) {
        str += "**";
    }
    else {
        str += "#";
    }
    console.log(str);
}