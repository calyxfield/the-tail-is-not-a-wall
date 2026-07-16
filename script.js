const toggle = document.querySelector('#model-toggle');
const chart = document.querySelector('#frontier-chart');
const caption = document.querySelector('#figure-caption');

const captions = {
  closed: 'Static imitation can saturate. That says nothing about systems that act, test, measure, and revise.',
  open: 'Once reality supplies error signals, capability is no longer confined to replaying the archive.'
};

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-pressed') !== 'true';
  toggle.setAttribute('aria-pressed', String(open));
  chart.classList.toggle('chart-open', open);
  caption.textContent = open ? captions.open : captions.closed;
});

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  }
}, { threshold: 0.12 });

for (const element of document.querySelectorAll('.argument, .claim, .protocol article, .loop-step')) {
  element.classList.add('reveal');
  observer.observe(element);
}
