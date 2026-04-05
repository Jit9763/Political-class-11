/**
 * Navigation and Dynamic Content Logic for Class 12 Political Science
 */

const chapters = [
  // Book 1: समकालीन विश्व राजनीति
  { id: 1, title: "दो ध्रुवीयता का अंत" },
  { id: 2, title: "सत्ता के समकालीन केंद्र" },
  { id: 3, title: "समकालीन दक्षिण एशिया" },
  { id: 4, title: "अंतर्राष्ट्रीय संगठन" },
  { id: 5, title: "समकालीन विश्व में सुरक्षा" },
  { id: 6, title: "पर्यावरण और प्राकृतिक संसाधन" },
  { id: 7, title: "वैश्वीकरण" },
  // Book 2: स्वतंत्र भारत में राजनीति
  { id: 8, title: "राष्ट्र-निर्माण की चुनौतियाँ" },
  { id: 9, title: "एक दल के प्रभुत्व का दौर" },
  { id: 10, title: "नियोजित विकास की राजनीति" },
  { id: 11, title: "भारत के विदेश संबंध" },
  { id: 12, title: "कांग्रेस प्रणाली: चुनौतियाँ और पुनर्स्थापना" },
  { id: 13, title: "लोकतांत्रिक व्यवस्था का संकट" },
  { id: 14, title: "क्षेत्रीय आकांक्षाएँ" },
  { id: 15, title: "भारतीय राजनीति: नए बदलाव" }
];

document.addEventListener('DOMContentLoaded', () => {
  renderChapters(chapters);

  const searchBar = document.getElementById('searchBar');
  if(searchBar) {
    searchBar.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = chapters.filter(c => c.title.toLowerCase().includes(term));
      renderChapters(filtered);
    });
  }
});

function renderChapters(data) {
  const grid = document.getElementById('chapter-grid');
  if(!grid) return;

  grid.innerHTML = '';

  data.forEach(chapter => {
    const card = document.createElement('div');
    card.className = 'chapter-card';
    card.innerHTML = `
      <div class="chapter-num">${String(chapter.id).padStart(2, '0')}</div>
      <h3 class="chapter-title">${chapter.title}</h3>
      <div class="chapter-actions" style="display:flex; gap:10px; flex-direction: column; margin-top:20px; position:relative; z-index:10;">
        <button class="btn-primary" onclick="window.open('notes_html_view.html?id=${chapter.id}', '_blank')">🌍 संपूर्ण नोट्स देखें (Premium HTML)</button>
      </div>
    `;
    grid.appendChild(card);
  });
}
