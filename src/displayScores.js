/* eslint-disable  import/prefer-default-export */

import addScore from './addScores.js';

const displayScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FmoE24YVTNvGFm4xwdfb/scores');
  const data = await response.json();
  const displayScore = document.querySelector('.score-list');
  let scoreArray = data.result;
  scoreArray = scoreArray.sort((a, b) => b.score - a.score);
  displayScore.innerHTML = '';
  scoreArray.forEach((score) => {
    addScore(score.user, score.score);
  });
};

export default displayScores;