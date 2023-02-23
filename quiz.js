const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let score = 0;
  const answers = ['A', 'A', 'A', 'A', 'A', 'B', 'A', 'D', 'C', 'A'];
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    /* Add all user answers */
  ];
  userAnswers.forEach((answer, index) => {
    if (answer === answers[index]) {
      score++;
    }
  });
  alert(`You scored ${score+1} out of ${answers.length}!`);
});
