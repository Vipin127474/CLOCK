const calcAverage=(x, y, z)=>(x + y + z)/3;
console.log(calcAverage(3, 4, 5));

let scoredolphins=calcAverage(44, 23, 71);
let scorekoalas=calcAverage(65, 54, 49);
console.log(scoredolphins, scorekoalas);


const checkWinner=function(avgDolphin, avgKoalas)
{
//     console.log(calcAverage(avgDolphin));
//     console.log(calcAverage(avgKoalas));

    if(avgDolphin >= 2 * avgKoalas)
    {
        console.log(`Dolphins ${avgDolphin} vs ${avgKoalas}`);
    }
    else if(2 * avgDolphin <= avgKoalas)
    {
        console.log(`Koalas ${avgKoalas} vs ${avgDolphin}`);
    }
    else{
    console.log(`draws the match`);
    }
}
checkWinner(scoredolphins, scorekoalas);

// indepentdent from any values.
checkWinner(100, 300)


// test data 2
scoredolphins=calcAverage(85, 54, 41);
scorekoalas=calcAverage(23, 34, 27);
console.log(scoredolphins, scorekoalas);
checkWinner(scoredolphins, scorekoalas)