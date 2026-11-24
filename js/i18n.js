// English texts. Arabic is read from the page itself on load.
const EN = {
  title: 'Tafaqod | Care the whole family shares',
  brand: 'Tafaqod',
  navFeatures: 'Features', navDemo: 'Demo', navJoin: 'Beta', navAbout: 'Our story', navFaq: 'FAQ',
  ctaShort: 'Try the app',
  made: 'Made by Saudi hands',
  promise: 'Tafaqod, because our family matters to us.',
  headline: 'Care for everyone you love, in one place',
  sub: 'Tafaqod brings the family into one circle caring for the patient. Medications, readings and appointments live in one place.',
  ctaJoin: 'Join the beta', ctaDemo: 'Take a tour of Tafaqod',
  circleAria: 'A care circle: the mother in the middle and her children around her, each recording what they did',
  momI: 'M', mom: 'Mom', sarahI: 'S', sarah: 'Sara', fahadI: 'F', fahad: 'Fahad', nouraI: 'N', noura: 'Noura',
  b1: 'Sara: gave her blood pressure pill at 8:02 AM',
  b2: 'Fahad: today’s blood pressure is 120/80',
  b3: 'Noura: going with her to the eye appointment on Sunday',
  altCircle: 'The circle screen in Tafaqod', altPlan: 'The care plan screen in Tafaqod', altSimple: 'The medicine question in simplified mode',
  featTitle: 'What Tafaqod does for your family',
  f1Title: 'Care circle',
  f1Text: 'Create a circle for the person you care for, then invite the people who help care for them by phone number. The patient gives consent, and you decide what each member can see and change.',
  f2Title: 'One plan for everyone',
  f2Text: 'When your sister marks your mother’s dose as taken, you see it the moment it happens. No dose is missed or doubled, and the same goes for blood pressure, glucose and appointments.',
  f3Title: 'Simplified mode',
  f3Text: 'Large text and one clear choice. Your father taps “Taken”, and the whole circle knows.',
  demoTitle: 'A tour of Tafaqod',
  demoText: 'Eight minutes, from signing in and setting up the circle to medications, appointments and account settings.',
  joinTitle: 'Be among the first to try it',
  joinLead: 'Tafaqod is now in beta on iPhone and Android. Sign up and we will send the invite to your email.',
  platform: 'Your phone', iphoneModel: 'iPhone model', older: 'iPhone 12 or older',
  androidModel: 'Phone model', androidPh: 'For example, Samsung Galaxy S24',
  name: 'Name', email: 'Email',
  hintIos: 'Use the email linked to your Apple ID. That is where TestFlight sends the invite.',
  hintAndroid: 'Use your Google account email. That is where Google Play sends the invite.',
  forWho: 'Who will you use Tafaqod for? (optional)', pick: 'Choose',
  parent: 'A parent', child: 'My child', self: 'Myself', other: 'Someone else',
  submit: 'Sign me up', sending: 'Sending…',
  errRequired: 'Enter your name and a valid email.',
  errSend: 'Your signup was not sent. Check your connection and try again.',
  doneTitle: 'You are on the list', doneText: 'Your beta invite will reach your inbox within a few days.',
  aboutTitle: 'Why Tafaqod',
  s1: 'In many homes, caring for a parent falls on one person. They keep track of every dose and every appointment, and answer the same question in the family group chat each day: “Did she take her medicine?” We wanted to share that load, so everyone knows what has been done and what is still waiting.',
  s2: 'The idea started with older parents. Then we realized that anyone living with an ongoing health condition needs the same thing. So Tafaqod became a care circle for any patient, with a simplified mode for those who need it.',
  s3: 'Tafaqod is our Portfolio Project at <a href="https://www.holbertonschool.com">Holberton School</a>. We created it in October and November 2026 with Flutter for iOS and Android, and a back end in Flask and PostgreSQL.',
  tlTitle: 'How we built it',
  t1d: 'Oct 18', t1h: 'Laying the foundation', t1: 'The first build of the app, the server and the database.',
  t2d: 'Oct 27', t2h: 'The circle comes together', t2: 'Phone sign-in, circle setup, the medical profile and medications.',
  t3d: 'Nov 3', t3h: 'The plan is complete', t3: 'Blood pressure and glucose readings, and appointments with companions.',
  t4d: 'Mid November', t4h: 'Made for the whole household', t4: 'The Today screen for daily follow-up, and simplified mode for older parents.',
  t5d: 'Late November', t5h: 'In testers’ hands', t5: 'The beta on TestFlight and Google&nbsp;Play.',
  faqTitle: 'Questions? Answers.',
  q1: 'What is Tafaqod?',
  a1: 'A Saudi app that brings the family into one care circle around the patient, so everyone follows medications, readings and appointments from one place.',
  q2: 'Does the patient have to use the app?',
  a2: 'No. The family can follow everything for them without it. If they want to take part, simplified mode is made for them, with large text and one clear choice.',
  q3: 'Who can see the patient’s information?',
  a3: 'Only members of their circle, after the patient gives consent, and only within the permissions the circle leader sets. Read the <a href="https://tfaqud-api.onrender.com/privacy">privacy policy</a>.',
  q4: 'Can I care for more than one person?',
  a4: 'Yes. Each person has their own circle, and you switch between circles in one tap.',
  q5: 'Which devices does Tafaqod work on?',
  a5: 'iPhone and Android phones.',
  q6: 'How do I join the beta, and is it free?',
  a6: 'Yes, it is free. Sign up in the <a href="#join">beta form</a> and the invite will reach your email: through TestFlight on iPhone, and through Google Play on Android.',
  team: 'The team',
  aI: 'A', alanoud: 'Alanoud Aloraydi', alanoudRole: 'Team lead and project manager',
  lI: 'L', leen: 'Leen Algraawi', leenRole: 'Work management, quality assurance and back end',
  repoText: 'All the work, documentation and tests are open to explore.', repoBtn: 'View the repository on GitHub',
  followTitle: 'Follow the Tafaqod journey',
  followLead: 'Real moments from family caregiving, and every app update before anyone else.',
  xText: 'Launch news and updates as they happen', igText: 'Stories from everyday care at home',
  ttText: 'Short videos that show the app step by step', followBtn: 'Follow',
  foot: 'Tafaqod, a Holberton School Portfolio Project, 2026', contact: 'Email us:'
};

const AR = { title: document.title, hintAndroid: 'استخدم بريد حسابك في Google، فإليه تصل دعوة Google Play.',
  sending: 'جارٍ الإرسال…', errRequired: 'اكتب اسمك وبريدًا إلكترونيًا صحيحًا.',
  errSend: 'لم يُرسل التسجيل. تحقّق من اتصالك وحاول مرة أخرى.' };
document.querySelectorAll('[data-i18n]').forEach(el => { AR[el.dataset.i18n] = el.innerHTML; });
document.querySelectorAll('[data-i18n-ph]').forEach(el => { AR[el.dataset.i18nPh] = el.placeholder; });
document.querySelectorAll('[data-i18n-aria]').forEach(el => { AR[el.dataset.i18nAria] = el.getAttribute('aria-label'); });
document.querySelectorAll('[data-i18n-alt]').forEach(el => { AR[el.dataset.i18nAlt] = el.alt; });

let lang = 'ar';
const t = key => (lang === 'en' ? EN : AR)[key];

// Switch every marked text, the page direction and the toggle label
function setLang(next) {
  lang = next;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'en' ? 'ltr' : 'rtl';
  document.title = t('title');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.alt = t(el.dataset.i18nAlt); });
  document.getElementById('lang').textContent = lang === 'en' ? 'العربية' : 'English';
  try { localStorage.setItem('lang', lang); } catch (e) { /* storage blocked */ }
  document.dispatchEvent(new Event('langchange'));
}

document.getElementById('lang').addEventListener('click', () => setLang(lang === 'en' ? 'ar' : 'en'));
try { if (localStorage.getItem('lang') === 'en') setLang('en'); } catch (e) { /* storage blocked */ }
