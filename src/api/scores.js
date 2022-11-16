const url = `${process.env.BASE_URL}games/${process.env.GAME_ID}/scores`;

const getScores = async () => {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.json();
    return data.result;
  } catch (err) {
    return Promise.reject(err);
  }
};

const postScore = async (user, score) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, score }),
    });
    const data = await response.json();
    return data.result;
  } catch (err) {
    return Promise.reject(err);
  }
};

export { getScores, postScore };