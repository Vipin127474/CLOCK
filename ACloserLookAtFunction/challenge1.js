const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
                               
                           // answer
    registerNewAnswer(){
        const answer= Number(prompt(`${this.question}\n ${this.options.join('\n')}\n
        (Write option number)`));
console.log(answer);                     
 // register answer(update)
   if(typeof answer==='number' && answer < this.answers.length){
       this.answers[answer]++;
    //    console.log(this.answers);
   }
   this.displayResults();
   this.displayResults('string');
},
 
displayResults(type='array')
{
if(type==='array')
{
    console.log(this.answers);
}
else if(type==='string'){
    console.log(`Poll results are ${this.answers.join(', ')}`);
}
}
};
poll.registerNewAnswer();

// we use join() here becuase we want every option in new line first we have to transform
// it into String then use join() method on it to use new line


document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll
    ));

// 'THIS' keyword in registerNewAnswer points to 'document.querySelector('.poll')' so to 
// poll button here. So this is becuase in an event handler fucntion such
// as "poll.registerNewAnswer". The 'THIS' keyword will always point to the 
// element to which it is attached s right now that is "poll.registerNewAnswer".
// Inside of "poll.registerNewAnswer" function 'THIS' keyword will point to the button 
// element that's why 'THIS' keyword returns this button (answer poll)


// here we need to "this.answers" equal to "[5, 2, 3]" this array
// so we have to use call method then we can set 'THIS' keyword manually

poll.displayResults.call({answers:[5, 2, 3]}, 'string');
poll.displayResults.call({answers:[1, 5, 3, 9, 6, 1]}, 'string');
poll.displayResults.call({answers:[1, 5, 3, 9, 6, 1]});