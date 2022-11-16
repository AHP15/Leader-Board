const showError = (message, element) => {
  const userError = document.querySelector('.user-error');
  const scoreError = document.querySelector('.score-error');

  if (element === 'user') {
    userError.textContent = message;
  } else {
    scoreError.textContent = message;
  }
};

const validateUserName = (text) => {
  const name = text.trim();
  const invalidCharactersPattern = /[\\/:"'*?<>@|&$,%!§;.]+/;

  if (!name) {
    return {
      valid: false,
      message: 'Please enter a user name!',
    };
  }

  if (invalidCharactersPattern.test(name)) {
    return {
      valid: false,
      message: `name should not contain any of ${invalidCharactersPattern}`,
    };
  }

  return { valid: true };
};

const validateScore = (number) => typeof Number(number) === 'number';

export { validateUserName, validateScore, showError };