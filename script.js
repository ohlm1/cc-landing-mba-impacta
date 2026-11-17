'use strict';

(() => {
  const explanations = {
    1: { title: 'Toda soma precisa de um começo.', text: () => 'total = 0 inicializa a variável que vai guardar a soma. Antes da primeira volta do laço, ela vale zero.', why: 'Sem um valor inicial, o programa não teria um acumulador definido para receber os números.', preview: 'O ponto de partida da soma.', previewText: 'total começa em zero. Cada volta do laço vai acrescentar um número a esse valor.' },
    3: { title: 'O último número fica de fora.', text: (limit) => `range(1, ${limit}) começa em 1 e para antes de ${limit}. O laço percorre ${limit === 4 ? 'os números 1, 2 e 3' : 'os números 1, 2, 3, 4 e 5'}.`, why: 'Ela define quais valores serão somados e quantas vezes a instrução seguinte será repetida.', preview: 'O limite também explica a lógica.', previewText: 'O intervalo começa em 1 e para antes de 4. Por isso, o laço percorre 1, 2 e 3.' },
    4: { title: 'O total cresce a cada volta.', text: () => 'total += numero adiciona o número atual ao valor já acumulado. É uma forma curta de escrever total = total + numero.', why: 'Ela acumula a soma. A indentação indica que essa instrução faz parte do laço e se repete para cada número.', preview: 'Cada número entra na conta.', previewText: 'A cada volta, total recebe o valor que já tinha mais o número atual. A indentação mantém a soma dentro do laço.' },
    6: { title: 'O resultado aparece no final.', text: (limit) => `print(total) mostra ${limit === 4 ? '6' : '15'}, o valor acumulado depois que o laço termina. A instrução está fora da repetição.`, why: 'Ela torna o resultado visível. Fora do laço, print apresenta o total uma vez, depois de todas as somas.', preview: 'Uma saída, depois da repetição.', previewText: 'print(total) apresenta o total 6. Como está fora do laço, o resultado aparece uma única vez.' }
  };
  let limit = 4;
  let activeLine = 3;
  const demo = document.querySelector('[data-editor="demo"]');
  const hero = document.querySelector('[data-editor="hero"]');

  function markLine(editor, line) {
    editor.querySelectorAll('button[data-line]').forEach((button) => {
      const selected = Number(button.dataset.line) === line;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }
  function explainLine(line) {
    if (!explanations[line]) return;
    activeLine = line;
    const info = explanations[line];
    markLine(demo, line);
    document.getElementById('explanation-number').textContent = String(line).padStart(2, '0');
    document.getElementById('line-caption').textContent = `Linha ${line}`;
    document.getElementById('explanation-title').textContent = info.title;
    document.getElementById('explanation-text').textContent = info.text(limit);
    document.getElementById('explanation-why').textContent = info.why;
  }
  demo.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-line]');
    if (button) explainLine(Number(button.dataset.line));
  });
  hero.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-line]');
    if (!button) return;
    const line = Number(button.dataset.line);
    markLine(hero, line);
    document.querySelector('[data-hero-number]').textContent = String(line).padStart(2, '0');
    document.querySelector('[data-hero-title]').textContent = explanations[line].preview;
    document.querySelector('[data-hero-text]').textContent = explanations[line].previewText;
  });
  function adaptScenario(value) {
    limit = value === 6 ? 6 : 4;
    let total = 0;
    const values = [];
    const steps = document.createDocumentFragment();
    for (let number = 1; number < limit; number += 1) {
      total += number;
      values.push(number);
      const step = document.createElement('li');
      const operation = document.createElement('span');
      operation.textContent = `Adiciona ${number}`;
      const accumulated = document.createElement('strong');
      accumulated.textContent = `total = ${total}`;
      step.append(operation, accumulated);
      steps.append(step);
    }
    document.getElementById('range-limit').textContent = String(limit);
    document.getElementById('result').textContent = String(total);
    document.getElementById('formula').textContent = `${values.join(' + ')} = ${total}`;
    document.getElementById('execution-steps').replaceChildren(steps);
    explainLine(activeLine);
  }
  document.querySelectorAll('input[name="scenario"]').forEach((radio) => {
    radio.addEventListener('change', () => { if (radio.checked) adaptScenario(Number(radio.value)); });
  });
  // The only conversion action is local navigation. The section receives focus for keyboard users.
  document.querySelectorAll('a.cta').forEach((anchor) => {
    anchor.addEventListener('click', () => {
      const target = document.getElementById('demonstracao');
      target.focus({ preventScroll: true });
    });
  });
  // Expanded FAQ answers are included in browser printouts without changing the normal state afterwards.
  let printStates = [];
  window.addEventListener('beforeprint', () => {
    printStates = [...document.querySelectorAll('.faq-list details')].map((item) => item.open);
    document.querySelectorAll('.faq-list details').forEach((item) => { item.open = true; });
  });
  window.addEventListener('afterprint', () => {
    document.querySelectorAll('.faq-list details').forEach((item, index) => { item.open = printStates[index] ?? false; });
  });
  // A one-time reveal never hides content when JavaScript or motion is unavailable.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.section-heading, .proof-layout, .faq-layout, .closing-layout').forEach((element) => revealObserver.observe(element));
  }
})();
