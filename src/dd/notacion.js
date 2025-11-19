import { annotate } from 'https://unpkg.com/rough-notation?module';

/* const e = document.querySelector('#text--love');
const a1 = annotate(e, { type: 'box', color: 'orange' }); */

const a1 = annotate(document.querySelector('#text--love'), { type: 'highlight', color: '#B1C29E', multiline: true });
const a2 = annotate(document.querySelector('#text--love02'), { type: 'box', color: 'red' });
const a3 = annotate(document.querySelector('#text--love03'), { type: 'underline', color: '#F0A04B', iterations: 1, multiline: true });
a1.show();
a2.show();
a3.show();