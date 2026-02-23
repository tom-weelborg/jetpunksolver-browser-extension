/* eslint-disable no-undef */
const s = document.createElement('script');
s.src = chrome.runtime.getURL('resources/override-timer.js');
s.type = 'text/javascript';
(document.head || document.documentElement).appendChild(s);
s.remove();
