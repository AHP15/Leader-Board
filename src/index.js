import './styles/page.css';
import './styles/form.css';
import './styles/scores.css';

import scores from './modules/scores.js';
import form from './modules/form.js';

const renderContent = () => {
  const page = document.getElementById('page');
  page.insertAdjacentHTML('beforeend', scores());
  page.insertAdjacentHTML('beforeend', form());
};

renderContent();