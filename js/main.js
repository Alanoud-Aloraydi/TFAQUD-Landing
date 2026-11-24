// Google Form that stores the beta signups.
const GOOGLE_FORM = {
  action: 'https://docs.google.com/forms/d/e/1FAIpQLSeyHchois-KsWf8QaH3gOvcHdzVQqlCR-ij96-lcbEfqHiULQ/formResponse',
  fields: {
    platform: 'entry.1254868608',
    model: 'entry.1788447978',
    name: 'entry.226821506',
    email: 'entry.962160041',
    forWho: 'entry.116500572'
  }
};

// Reveal blocks as they scroll into view
const revealer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealer.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealer.observe(el));

// Features: swap the phone screen to match the step in the middle of the view
const steps = [...document.querySelectorAll('.step')];
const shots = document.querySelectorAll('.shot');
const stepper = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const i = steps.indexOf(e.target);
    steps.forEach((s, j) => s.classList.toggle('is-active', j === i));
    shots.forEach((s, j) => s.classList.toggle('is-active', j === i));
  });
}, { rootMargin: '-45% 0px -45% 0px' });
steps.forEach(s => stepper.observe(s));

// Demo video: HLS stream of the original file, quality adapts to the connection.
// Safari and iPhone play HLS natively; other browsers load hls.js when the video comes near.
const video = document.getElementById('demoVideo');
function attachVideo() {
  if (video.canPlayType('application/vnd.apple.mpegurl')) { video.src = video.dataset.src; return; }
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.17/dist/hls.min.js';
  s.onload = () => {
    if (!window.Hls || !Hls.isSupported()) return;
    const hls = new Hls({ autoStartLoad: false, startLevel: 0, capLevelToPlayerSize: false });
    hls.loadSource(video.dataset.src);
    hls.attachMedia(video);
    video.addEventListener('play', () => hls.startLoad(), { once: true });
  };
  document.head.appendChild(s);
}
const videoWatch = new IntersectionObserver(entries => {
  if (entries.some(e => e.isIntersecting)) { videoWatch.disconnect(); attachVideo(); }
}, { rootMargin: '600px 0px' });
videoWatch.observe(video);

// Highlight the nav link of the section on screen
const links = document.querySelectorAll('.nav a');
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    links.forEach(a => a.classList.toggle('active', a.hash === '#' + e.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => spy.observe(s));

// Signup form
const form = document.getElementById('signup');
const error = document.getElementById('formError');
const hint = document.getElementById('emailHint');
const submit = form.querySelector('.submit');

// Show the model field and email hint that match the chosen phone
function syncPlatform() {
  const ios = form.platform.value === 'iPhone';
  document.getElementById('iphoneField').hidden = !ios;
  document.getElementById('androidField').hidden = ios;
  hint.dataset.i18n = ios ? 'hintIos' : 'hintAndroid';
  hint.innerHTML = t(hint.dataset.i18n);
}
form.addEventListener('change', e => { if (e.target.name === 'platform') syncPlatform(); });

function showError(key) {
  error.dataset.i18n = key;
  error.textContent = t(key);
  error.hidden = false;
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  error.hidden = true;
  if (!form.fullName.value.trim() || !form.email.checkValidity() || !form.email.value) return showError('errRequired');

  const ios = form.platform.value === 'iPhone';
  const f = GOOGLE_FORM.fields;
  const data = new URLSearchParams();
  data.append(f.platform, form.platform.value);
  data.append(f.model, ios ? form.iphoneModel.value : form.androidModel.value.trim());
  data.append(f.name, form.fullName.value.trim());
  data.append(f.email, form.email.value.trim());
  data.append(f.forWho, form.forWho.value);

  submit.disabled = true;
  submit.textContent = t('sending');
  try {
    // Google Forms does not allow reading the reply, so no-cors only tells us the request left
    await fetch(GOOGLE_FORM.action, { method: 'POST', mode: 'no-cors', body: data });
    form.hidden = true;
    document.getElementById('formDone').hidden = false;
  } catch (err) {
    showError('errSend');
  } finally {
    submit.disabled = false;
    submit.textContent = t('submit');
  }
});
