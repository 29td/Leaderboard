/* eslint-disable  import/prefer-default-export */

import displayScores from '/modules/displayScore.js';
import  submitScore from '/modules/submit.js';

const addScore = document.querySelector('#add-score');
const refreshScoreBtn = document.querySelector('.refresh-btn');

addScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const playerNameEl = document.getElementById('player-name');
  const playerScoreEl = document.getElementById('player-score');
  const nameValue = playerNameEl.value;
  const scoreValue = playerScoreEl.value;
  submitScore(nameValue, scoreValue);
  playerNameEl.value = '';
  playerScoreEl.value = '';
});

document.addEventListener('DOMContentLoaded', displayScores);

refreshScoreBtn.addEventListener('click', displayScores);
