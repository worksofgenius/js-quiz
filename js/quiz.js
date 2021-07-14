const questions = [
  ['How many planets are in the Solar System?', '8'],
  ['How many continents are there?', '7'],
  ['How many legs does an insect have?', '6'],
  ['What year was JavaScript created?', '1995']
];

const correct = [];
const incorrect = [];
let correctAnswers = 0;

for ( let i = 0; i < questions.length; i++ ) {
  let question = questions[i][0];
  let answer = questions[i][1];
  let response = prompt(question);
  
  if ( response === answer ) {
    correctAnswers ++;
    correct.push(question);
  } else {
    incorrect.push(question);
  }
}

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

let html = `
  <h1>You got ${correctAnswers} question(s) correct!</h1>
  <h2>The following questions were correct:</h2>
  <ol>${ createListItems(correct) }</ol>

  <h2>The following questions were incorrect:</h2>
  <ol>${ createListItems(incorrect) }</ol>
`;

document.querySelector('main').innerHTML = html;
