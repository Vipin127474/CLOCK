const scoredolphins=(97+112+101)/3;
const scorekoalas=(109+95+106)/3;

console.log(scoredolphins, scorekoalas);
if(scoredolphins>scorekoalas && scoredolphins>=100)
{
    console.log("dolphins are winner of competition");
}
else if(scoredolphins<scorekoalas && scorekoalas>=100){
    console.log("koalas are winner of competition");
}
else if(scoredolphins===scorekoalas && scoredolphins>=100
    && scorekoalas>=100){
    console.log("competition is draw");
}
else{
    console.log('no one wines trophy');
}