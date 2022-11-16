import { postScore } from '../api/scores';

import { validateUserName, validateScore, showError } from '../validate/addScore';

const form = () => {
  const addScore = (form) => {
    const { user, score } = form.elements;

    postScore(user.value, score.value).then(() => {
      form.dispatchEvent(new CustomEvent('score_added'));
    });
  };

  window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const { user, score } = form.elements;

      const isUserValid = validateUserName(user.value);
      if (!isUserValid.valid) {
        return showError(isUserValid.message, 'user');
      }

      const isScoreValid = validateScore(score.value);
      if (!isScoreValid) {
        return showError('Score should be a number!', 'score');
      }

      return addScore(form);
    });

    form.addEventListener('score_added', () => {
      const { user, score } = form.elements;
      user.value = '';
      score.value = 0;
    });
  });

  return `
  <form class="form container">
    <h2>Add Your Score</h2>
  
    <label for="user">Name</label>
    <input id="user" type="text" name="user" placeholder="Your Name" />
    <p class="error user-error"></p>
  
    <label for="score">Score</label>
    <input id="score" type="number" name="score" placeholder="Your chess rating"/>
    <p class="error score-error"></p>
  
    <div class="btn-container">
      <button type="submit" class="btn">Submit</button>
    </div>
  </form>`;
};
export default form;