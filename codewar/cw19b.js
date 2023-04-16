function correct(leaderBoard){
    const arr = leaderBoard.split("\n")
    const myjinxin2015 = arr.find(el => el.includes("myjinxin2015")).split(/ (.*)/)[1]
    const first = arr[0].split(/ (.*)/)[1] // split based on first space occurence
    return leaderBoard.replace(myjinxin2015,first).replace(first,myjinxin2015)
}


console.log(correct(
    `#1 g964
    #2 myjinxin2015
    #3 SteffenVogel_79
    #4 smile67
    #5 Voile`
    ),
    `#1 myjinxin2015
    #2 g964
    #3 SteffenVogel_79
    #4 smile67
    #5 Voile`
    )
    
    console.log(correct(
    `#1 Voile
    #2 g964
    #3 SteffenVogel_79
    #4 smile67
    #5 myjinxin2015`
    ),
    `#1 myjinxin2015
    #2 g964
    #3 SteffenVogel_79
    #4 smile67
    #5 Voile`
    )
    