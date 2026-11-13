(() => {
  'use strict';

  const $ = (selector) => document.querySelector(selector);
  const screens = { intro: $('#intro'), quiz: $('#quiz'), result: $('#result') };
  const answersNode = $('#answers');
  const questionPanel = $('#question-panel');
  const questionTitle = $('#question-title');
  const nextButton = $('#next-btn');
  const backButton = $('#back-btn');
  const progress = $('.progress-track');
  let current = 0;
  let answers = Array(QUESTIONS.length).fill(null);

  function showScreen(name) {
    Object.entries(screens).forEach(([key, element]) => element.classList.toggle('hidden', key !== name));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderQuestion() {
    const question = QUESTIONS[current];
    const number = String(current + 1).padStart(2, '0');
    $('#question-number').textContent = `ВОПРОС ${number}`;
    $('#progress-count').textContent = `${number} / ${QUESTIONS.length}`;
    $('#progress-fill').style.width = `${((current + 1) / QUESTIONS.length) * 100}%`;
    progress.setAttribute('aria-valuenow', String(current + 1));
    questionTitle.textContent = question.question;
    answersNode.replaceChildren();
    question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'answer-btn';
      button.setAttribute('aria-pressed', String(answers[current] === index));
      if (answers[current] === index) button.classList.add('selected');
      const letter = document.createElement('span');
      letter.className = 'answer-letter';
      letter.textContent = String.fromCharCode(65 + index);
      const text = document.createElement('span');
      text.className = 'answer-text';
      text.textContent = option;
      const check = document.createElement('span');
      check.className = 'answer-check';
      check.setAttribute('aria-hidden', 'true');
      check.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#i-check-circle"></use></svg>';
      button.append(letter, text, check);
      button.addEventListener('click', () => {
        answers[current] = index;
        answersNode.querySelectorAll('.answer-btn').forEach((item, itemIndex) => {
          const selected = itemIndex === index;
          item.classList.toggle('selected', selected);
          item.setAttribute('aria-pressed', String(selected));
        });
        nextButton.disabled = false;
      });
      answersNode.append(button);
    });
    questionPanel.classList.remove('question-enter');
    void questionPanel.offsetWidth;
    questionPanel.classList.add('question-enter');
    backButton.disabled = current === 0;
    nextButton.disabled = answers[current] === null;
    nextButton.firstChild.textContent = current === QUESTIONS.length - 1 ? 'Показать результат ' : 'Далее ';
  }

  function showResult() {
    const score = answers.reduce((total, answer, index) => total + Number(answer === QUESTIONS[index].answer), 0);
    const levels = [
      { max: 8, level: 'A1', name: 'BEGINNER', description: 'Начальный уровень или ниже. Начни с базовых слов и простых предложений — крепкая основа поможет двигаться дальше.' },
      { max: 16, level: 'A2', name: 'ELEMENTARY', description: 'Ты знаком с основами и можешь понимать простые выражения. Продолжай расширять словарный запас и практиковать грамматику.' },
      { max: 25, level: 'B1', name: 'INTERMEDIATE', description: 'Ты уже ориентируешься в распространённых темах и конструкциях. Практика поможет чувствовать себя увереннее.' },
      { max: 34, level: 'B2', name: 'UPPER-INTERMEDIATE', description: 'У тебя хорошая база: ты справляешься с более сложными конструкциями и можешь развивать беглость и точность.' },
      { max: 42, level: 'C1', name: 'ADVANCED', description: 'Ты уверенно работаешь со сложной лексикой и грамматикой. Продолжай оттачивать нюансы английского.' },
      { max: 50, level: 'C2', name: 'PROFICIENT', description: 'Отличный результат: тебе знакомы даже тонкие языковые конструкции. Продолжай развивать и применять свои знания.' }
    ];
    const result = levels.find((item) => score <= item.max);
    $('#result-level').textContent = result.level;
    $('#result-level-name').textContent = result.name;
    $('#result-description').textContent = result.description;
    showScreen('result');
    const scoreNode = $('#result-score');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      scoreNode.textContent = `${score} из ${QUESTIONS.length} правильных ответов`;
    } else {
      const startedAt = performance.now();
      const duration = 900;
      const tick = (now) => {
        const progressValue = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progressValue, 3);
        scoreNode.textContent = `${Math.round(score * eased)} из ${QUESTIONS.length} правильных ответов`;
        if (progressValue < 1) requestAnimationFrame(tick);
      };
      scoreNode.textContent = `0 из ${QUESTIONS.length} правильных ответов`;
      requestAnimationFrame(tick);
    }
  }

  $('#start-btn').addEventListener('click', () => { current = 0; answers = Array(QUESTIONS.length).fill(null); renderQuestion(); showScreen('quiz'); });
  backButton.addEventListener('click', () => { if (current > 0) { current--; renderQuestion(); } });
  nextButton.addEventListener('click', () => { if (answers[current] === null) return; if (current === QUESTIONS.length - 1) showResult(); else { current++; renderQuestion(); } });
  $('#restart-btn').addEventListener('click', () => { current = 0; answers = Array(QUESTIONS.length).fill(null); renderQuestion(); showScreen('quiz'); });
})();
