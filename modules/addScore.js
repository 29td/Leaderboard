/* eslint-disable  import/prefer-default-export */

const addScore = async (Name, Score) => {
  const displayScoreSection = document.querySelector('.score-list');
  const row = document.createElement('tr');
  row.innerHTML = `
      <td>${Name}</td>
      <td>${Score}</td>
      `;
  displayScoreSection.appendChild(row);
};

export default addScore;