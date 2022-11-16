import { getScores } from '../api/scores';

const scores = () => {
  const action = (list) => {
    const loading = document.createElement('p');
    loading.classList.add('loading');
    list.replaceChildren(loading);

    getScores().then((scores) => {
      list.dispatchEvent(new CustomEvent('scores', {
        detail: { scores },
      }));
    });
  };

  const scoreshendler = (event) => {
    event.target.replaceChildren('');
    const { scores } = event.detail;

    scores.forEach((score, i) => {
      event.target.insertAdjacentHTML(
        'beforeend',
        `<li class=${i % 2 === 0 ? 'even' : 'odd'}>${score.user}: ${score.score}</li>`
      );
    });
  };

  window.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.score-list');
    const refresh = document.querySelector('.refresh');

    action(list);

    list.addEventListener('scores', scoreshendler);
    refresh.addEventListener('click', () => action(list));
  });

  return `
  <div class="scores container">
    <div class="score-headline">
      <h2>Recent Scores</h2>
      <button class="btn refresh">Refresh</button>
    </div>
  
    <ul class="score-list">
      <p class="loading"></p>
    </ul>
  </div>
  `;
};

export default scores;