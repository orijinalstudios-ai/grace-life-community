/**
 * Grace Life Community Church - Interactive Web Engine
 * Includes: Admin Portal, Dynamic Data Store, Scroll-Spy Nav,
 * Audio Player, Video Modal, Giving Module, and Real-Time Systems.
 */

/* ==========================================================================
   1. Dynamic Content Data Store (with localStorage persistence)
   ========================================================================== */

const DEFAULT_EVENTS = [
  {
    id: 'ev-1',
    key: 'conference',
    title: 'Grace Encounter Conference 2024',
    category: 'Flagship',
    categoryColor: 'bg-lime-soft text-secondary',
    month: 'NOV',
    day: '15',
    time: 'Nov 15–17 • 6:00 PM Daily',
    location: 'Main Worship Sanctuary',
    description: 'A 3-day life-altering spiritual immersion with guest speakers, worship artists, and dynamic breakout sessions.',
    isCustom: false
  },
  {
    id: 'ev-2',
    key: 'midweek',
    title: 'Midweek Word & Worship Encounter',
    category: 'Midweek',
    categoryColor: 'bg-sky-tint text-[#0288D1]',
    month: 'NOV',
    day: '21',
    time: 'Thursday • 5:30 PM',
    location: 'Chapel Hall & YouTube Live',
    description: 'Refuel your soul midway through the week with unhurried acoustic praise, communion, and corporate intercession.',
    isCustom: false
  },
  {
    id: 'ev-3',
    key: 'youth',
    title: 'Youth & Young Adults Retreat',
    category: 'Youth',
    categoryColor: 'bg-lime-soft text-secondary',
    month: 'DEC',
    day: '07',
    time: 'Dec 7–9 • All Day',
    location: 'Camp Whispering Pines',
    description: 'Igniting passion, creativity, and biblical conviction in the next generation. Games, bonfires, and real talk.',
    isCustom: false
  },
  {
    id: 'ev-4',
    key: 'outreach',
    title: '#EachOneReachOne Community Outreach & Discipleship Drive',
    category: 'Outreach',
    categoryColor: 'bg-forest-tint text-primary',
    month: 'DEC',
    day: '14',
    time: 'Saturday • 9:00 AM',
    location: 'Community Center & Borikiri Neighborhood',
    description: 'Living out our authentic faith through practical love. Blessing families across Borikiri with care packages, discipleship, and intentional connection.',
    isCustom: false
  }
];

const DEFAULT_ARTICLES = [
  {
    id: 'art-1',
    title: "Grace Doesn't Wait for You to Be Perfect: Living Out the Divine Life",
    author: 'Pst. Inaifie Allaputa',
    category: 'Devotional',
    categoryColor: 'bg-white/90 text-primary',
    readTime: '5 min read',
    date: 'Oct 18, 2024',
    scripture: '2 Peter 1:3',
    summary: "Grace doesn't wait for you to be 'perfect' before it equips you. You aren't trying to earn His lifestyle; you're learning to live out of the divine life He already placed inside you.",
    content: "Grace doesn't wait for you to be 'perfect' before it equips you. The moment you accepted Christ, He didn't hold back. He gave you everything that pertains to life and godliness right then and there (2 Peter 1:3). You aren't striving to earn His approval or manufacture a holy lifestyle through self-effort; you are learning to live out of the divine life and nature He has already deposited inside your spirit. When you understand that you are already equipped, condemnation falls away, and you begin to walk boldly as an authentic believer—reaching out to touch lives through #EachOneReachOne.",
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1aDQLb7u5y0wa3mu795j1lFAdE0DDEmjec846qL7BWNKNreZrDbSCmPFEDTiiCJNMrAMKSGwsno-Mm8gTWTh_i-RVM5VEMUJGq8wfGthztUx2ytEXXOT_34SVSy1exUb_B2zoPGuNb1HFOgD063Msy2Z9_YuoOP9kHHn4FzL5tFZsL0VuxB7kyeYxOOpH0CHoeyEpiY_RmCB94EK1rx368JmMv95kYMFIGzbKfe-Q4g8B1ENqYjo4',
    isCustom: false
  },
  {
    id: 'art-2',
    title: 'From Burnout to Overflow: Michael and Joy’s Testimony',
    author: 'Community Editorial Team',
    category: 'Life Stories',
    categoryColor: 'bg-white/90 text-secondary',
    readTime: '7 min read',
    date: 'Oct 11, 2024',
    scripture: 'Psalm 23:5',
    summary: 'How finding an authentic Life Group community turned our marriage around when executive stress nearly derailed our purpose.',
    content: "We thought church was simply something you attended on Sundays. But when our startup hit turbulence and pressure mounted, we discovered we couldn't walk alone. Joining a Grace Life Group gave us brothers and sisters who prayed with us at midnight and reminded us of our true identity in Christ.",
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDYwYXBdLOnZRTIyrNVVHbdX-mo2gxf8n6-wcazXbisjBFl1in9CTWd8-9WkWkKPnewHbRxjGCZjkmJrvk9RiBnaybckb0a111U300zuelSnkWIycJTsgRubdiXqf2C5ledkL3zUNqc1Zc8RseTyxS_-Dr2K1Ogi0y-48hjnY4C7cmvcbhCd4geLpnWOHKm4ck0GzlAXNMb6GB85Ywu-WnVtkRgx8NMVsoFwSNMe3SlEClWV13Jk1H',
    isCustom: false
  },
  {
    id: 'art-3',
    title: 'Grace in Leadership: Leading by Serving First',
    author: 'Pst. Inaifie Allaputa',
    category: 'Leadership',
    categoryColor: 'bg-white/90 text-[#0288D1]',
    readTime: '6 min read',
    date: 'Sep 30, 2024',
    scripture: 'Mark 10:45',
    summary: 'Practical tenets of servant leadership in the contemporary workplace, building team trust through psychological safety and kindness.',
    content: "True leadership does not demand homage; it creates atmospheres where people flourish. Jesus redefined greatness not by how many served Him, but by how many He served. When leaders walk in extravagant grace, they replace fear-driven performance with creative courage.",
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnewmESZMuJ8rpl_oHlVMnx9X_s_JIuDWiRhXftlqf0pzNx4zesMCN4RGUZg61IcuGZg5y4yNQ2b6k_9q8RLTRLTtfDsQqK64zzY06ZoTgAs_aTs8asuW4oLOYMPV2gE3ISLP2ixa5Imf5TBsQfgdx4bsyojTut1dKPyo9foNIRcuRupkybIvQfnCY1h9r-bV22ShwJ0-QT3UHPbpXdj6zHkckKGHxqVw7QtDzhi3hgoXsa6rUeKdK',
    isCustom: false
  }
];

class ChurchDataStore {
  constructor() {
    this.EVENTS_KEY = 'glc_events_v3';
    this.ARTICLES_KEY = 'glc_articles_v3';
  }

  getEvents() {
    try {
      const data = localStorage.getItem(this.EVENTS_KEY);
      return data ? JSON.parse(data) : DEFAULT_EVENTS;
    } catch (e) {
      return DEFAULT_EVENTS;
    }
  }

  saveEvents(events) {
    try {
      localStorage.setItem(this.EVENTS_KEY, JSON.stringify(events));
    } catch (e) {}
  }

  addEvent(event) {
    const events = this.getEvents();
    events.unshift(event);
    this.saveEvents(events);
    return events;
  }

  deleteEvent(id) {
    let events = this.getEvents();
    events = events.filter(e => e.id !== id);
    this.saveEvents(events);
    return events;
  }

  getArticles() {
    try {
      const data = localStorage.getItem(this.ARTICLES_KEY);
      return data ? JSON.parse(data) : DEFAULT_ARTICLES;
    } catch (e) {
      return DEFAULT_ARTICLES;
    }
  }

  saveArticles(articles) {
    try {
      localStorage.setItem(this.ARTICLES_KEY, JSON.stringify(articles));
    } catch (e) {}
  }

  addArticle(article) {
    const articles = this.getArticles();
    articles.unshift(article);
    this.saveArticles(articles);
    return articles;
  }

  deleteArticle(id) {
    let articles = this.getArticles();
    articles = articles.filter(a => a.id !== id);
    this.saveArticles(articles);
    return articles;
  }

  resetAll() {
    localStorage.removeItem(this.EVENTS_KEY);
    localStorage.removeItem(this.ARTICLES_KEY);
  }
}

const dataStore = new ChurchDataStore();

/* ==========================================================================
   2. Main Initialization Lifecycle
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollSpy();
  initMobileMenu();
  initCountdown();
  initAudioPlayer();
  initVideoModal();
  initSermonFilters();
  initGivingModule();
  initModals();
  initSearch();
  initAccordion();
  initAdminPortal();
  initScrollAnimations();
  
  // Render dynamic content
  renderEvents();
  renderArticles();
});

/* ==========================================================================
   3. Toast Notification System
   ========================================================================== */
function showToast(message, title = 'Grace Life Community', icon = 'check_circle') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-5 right-5 z-[110] flex flex-col gap-3 pointer-events-none max-w-sm w-full px-4';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'pointer-events-auto bg-surface-card border border-primary/20 shadow-2xl rounded-2xl p-4 flex items-start gap-3 transform translate-y-6 opacity-0 transition-all duration-300';
  toast.innerHTML = `
    <span class="material-symbols-outlined text-primary text-2xl mt-0.5 shrink-0" style="font-variation-settings: 'FILL' 1;">${icon}</span>
    <div class="flex-1 pr-2">
      <h5 class="font-headline text-sm font-bold text-forest-dark">${title}</h5>
      <p class="font-body text-xs text-on-surface-variant mt-0.5 leading-relaxed">${message}</p>
    </div>
    <button type="button" class="text-on-surface-variant hover:text-primary transition-colors p-1 text-sm shrink-0" onclick="this.parentElement.remove()">
      <span class="material-symbols-outlined text-base">close</span>
    </button>
  `;

  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-6', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

/* ==========================================================================
   4. Scroll-Spy & Fixed Header Navigation
   ========================================================================== */
function initScrollSpy() {
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('.desktop-nav-link');
  const sections = document.querySelectorAll('section[id], main > section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md', 'bg-white/95');
      header.classList.remove('bg-surface-container-lowest/90');
    } else {
      header.classList.remove('shadow-md', 'bg-white/95');
      header.classList.add('bg-surface-container-lowest/90');
    }

    // Scroll-Spy detection
    let currentSection = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = section.getAttribute('id');
      }
    });

    if (currentSection) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
          link.classList.add('text-primary', 'font-semibold', 'border-b-2', 'border-primary');
          link.classList.remove('text-on-surface-variant');
        } else {
          link.classList.remove('text-primary', 'font-semibold', 'border-b-2', 'border-primary');
          link.classList.add('text-on-surface-variant');
        }
      });
    }
  });
}

/* ==========================================================================
   5. Dynamic Rendering: Events & Calendar Exports (.ics)
   ========================================================================== */
function renderEvents() {
  const container = document.getElementById('events-grid-container');
  if (!container) return;

  const events = dataStore.getEvents();

  container.innerHTML = events.map(ev => `
    <div class="bg-surface-card rounded-2xl p-6 border border-primary/10 custom-warm-shadow flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 relative group">
      ${ev.isCustom ? `
        <span class="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary text-white shadow-xs">
          New
        </span>
      ` : ''}
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="text-center px-3.5 py-2 bg-forest-tint rounded-xl border border-primary/20">
            <span class="block text-xs font-bold text-primary uppercase tracking-wide">${ev.month}</span>
            <span class="block text-xl font-headline font-bold text-forest-dark">${ev.day}</span>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${ev.categoryColor || 'bg-forest-tint text-primary'}">
            ${ev.category}
          </span>
        </div>
        <h3 class="font-headline text-lg font-bold text-forest-dark mb-2 group-hover:text-primary transition-colors leading-snug">${ev.title}</h3>
        <p class="text-xs text-on-surface-variant mb-4 leading-relaxed">${ev.description}</p>
        <div class="space-y-1.5 text-xs text-on-surface-variant mb-6">
          <div class="flex items-center gap-1.5"><span class="material-symbols-outlined text-sm text-primary">schedule</span> ${ev.time}</div>
          <div class="flex items-center gap-1.5"><span class="material-symbols-outlined text-sm text-primary">location_on</span> ${ev.location}</div>
        </div>
      </div>
      <div class="space-y-2 pt-2 border-t border-primary/10">
        <button class="w-full text-center py-2.5 px-3 rounded-full bg-primary text-white text-xs font-semibold hover:bg-forest-dark transition-colors cursor-pointer shadow-xs active:scale-[0.98]" onclick="window.registerEvent('${ev.id}')">
          Register Free Pass
        </button>
        <button class="w-full text-center py-1.5 px-3 rounded-full border border-primary/20 hover:bg-forest-tint text-primary text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer" onclick="window.downloadCustomICS('${ev.id}')">
          <span class="material-symbols-outlined text-xs">event</span> Add to Calendar (.ics)
        </button>
      </div>
    </div>
  `).join('');
}

window.downloadCustomICS = function(eventId) {
  const events = dataStore.getEvents();
  const ev = events.find(e => e.id === eventId) || events[0];
  if (!ev) return;

  const now = new Date();
  const year = now.getFullYear();
  const monthMap = { 'JAN': '01', 'FEB': '02', 'MAR': '03', 'APR': '04', 'MAY': '05', 'JUN': '06', 'JUL': '07', 'AUG': '08', 'SEP': '09', 'OCT': '10', 'NOV': '11', 'DEC': '12' };
  const monthNum = monthMap[ev.month.toUpperCase()] || '11';
  const dayNum = String(ev.day).padStart(2, '0');

  const dtStart = `${year}${monthNum}${dayNum}T180000Z`;
  const dtEnd = `${year}${monthNum}${dayNum}T210000Z`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Grace Life Community Church//Events Portal//EN',
    'BEGIN:VEVENT',
    `SUMMARY:${ev.title}`,
    `DESCRIPTION:${ev.description}`,
    `LOCATION:${ev.location}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `${ev.title.replace(/[^a-zA-Z0-9]/g, '_')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast(`Added '${ev.title}' to your calendar!`, 'Calendar Event Saved', 'calendar_month');
};

window.registerEvent = function(eventId) {
  const events = dataStore.getEvents();
  const ev = events.find(e => e.id === eventId) || { title: 'Gathering' };
  showToast(`Your seat for '${ev.title}' has been successfully reserved. Check your email for check-in QR codes.`, 'Registration Confirmed', 'verified');
};

/* ==========================================================================
   6. Dynamic Rendering: Blog & Pastor's Desk Articles
   ========================================================================== */
function renderArticles() {
  const container = document.getElementById('articles-grid-container');
  if (!container) return;

  const articles = dataStore.getArticles();

  container.innerHTML = articles.map(art => `
    <article class="bg-surface-card rounded-2xl overflow-hidden border border-primary/10 custom-warm-shadow custom-hover-shadow flex flex-col group cursor-pointer" onclick="window.readFullArticle('${art.id}')">
      <div class="relative h-48 bg-forest-tint overflow-hidden">
        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="${art.title}" src="${art.imageUrl || 'assets/logo.png'}"/>
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${art.categoryColor || 'bg-white/90 text-primary'} backdrop-blur-sm">
          ${art.category}
        </span>
        ${art.isCustom ? `
          <span class="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-secondary text-on-secondary shadow-xs">
            Admin Post
          </span>
        ` : ''}
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 text-xs text-on-surface-variant mb-2">
            <span>${art.readTime || '5 min read'}</span> • <span>${art.date}</span>
          </div>
          <h3 class="font-headline text-lg font-bold text-forest-dark mb-2 group-hover:text-primary transition-colors leading-snug">${art.title}</h3>
          <p class="font-body text-xs text-on-surface-variant line-clamp-3 leading-relaxed">${art.summary}</p>
        </div>
        <div class="pt-4 mt-4 border-t border-primary/10 text-xs font-semibold text-primary flex items-center justify-between">
          <span>By ${art.author}</span>
          <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </div>
      </div>
    </article>
  `).join('');
}

window.readFullArticle = function(articleId) {
  const articles = dataStore.getArticles();
  const art = articles.find(a => a.id === articleId) || articles[0];
  if (!art) return;

  const modal = document.getElementById('article-reader-modal');
  if (!modal) return;

  document.getElementById('reader-title').textContent = art.title;
  document.getElementById('reader-author').textContent = `By ${art.author} • ${art.date} • ${art.readTime || '5 min'}`;
  document.getElementById('reader-category').textContent = art.category;
  document.getElementById('reader-summary').textContent = art.summary;
  document.getElementById('reader-content').textContent = art.content || art.summary;
  
  if (art.scripture) {
    document.getElementById('reader-scripture').textContent = `Scripture Anchor: ${art.scripture}`;
    document.getElementById('reader-scripture-container').classList.remove('hidden');
  } else {
    document.getElementById('reader-scripture-container').classList.add('hidden');
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('overflow-hidden');
};

window.closeArticleReader = function() {
  const modal = document.getElementById('article-reader-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }
};

/* ==========================================================================
   7. Dedicated Admin Portal Management System
   ========================================================================== */
function initAdminPortal() {
  const adminModal = document.getElementById('admin-modal');
  const adminClose = document.getElementById('admin-modal-close');
  const adminTabs = document.querySelectorAll('.admin-tab-btn');
  const adminPanels = document.querySelectorAll('.admin-tab-panel');

  window.openAdminPortal = function() {
    if (!adminModal) return;
    adminModal.classList.remove('hidden');
    adminModal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
    renderAdminManageList();
  };

  window.closeAdminPortal = function() {
    if (!adminModal) return;
    adminModal.classList.add('hidden');
    adminModal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  };

  if (adminClose) adminClose.addEventListener('click', window.closeAdminPortal);

  // Tab switching inside admin portal
  adminTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      adminTabs.forEach(t => {
        t.className = 'admin-tab-btn px-4 py-2 text-xs font-semibold rounded-lg text-on-surface-variant hover:text-primary transition-colors';
      });
      tab.className = 'admin-tab-btn px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-white shadow-xs';

      adminPanels.forEach(p => {
        if (p.id === `admin-panel-${target}`) {
          p.classList.remove('hidden');
        } else {
          p.classList.add('hidden');
        }
      });
    });
  });

  // Admin: Create Event Form
  const eventForm = document.getElementById('admin-event-form');
  if (eventForm) {
    eventForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('admin-event-title').value.trim();
      const month = document.getElementById('admin-event-month').value.trim().toUpperCase();
      const day = document.getElementById('admin-event-day').value.trim();
      const category = document.getElementById('admin-event-category').value;
      const time = document.getElementById('admin-event-time').value.trim();
      const location = document.getElementById('admin-event-location').value.trim();
      const description = document.getElementById('admin-event-desc').value.trim();

      const newEvent = {
        id: 'ev-' + Date.now(),
        title,
        month,
        day,
        category,
        categoryColor: category === 'Flagship' ? 'bg-lime-soft text-secondary' : category === 'Midweek' ? 'bg-sky-tint text-[#0288D1]' : 'bg-forest-tint text-primary',
        time,
        location,
        description,
        isCustom: true
      };

      dataStore.addEvent(newEvent);
      renderEvents();
      renderAdminManageList();
      eventForm.reset();
      showToast(`'${title}' is now live on the public church calendar!`, 'Event Published', 'event_available');
    });
  }

  // Admin: Publish Blog / Pastor's Article Form
  const articleForm = document.getElementById('admin-article-form');
  if (articleForm) {
    articleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('admin-art-title').value.trim();
      const author = document.getElementById('admin-art-author').value.trim();
      const category = document.getElementById('admin-art-category').value;
      const scripture = document.getElementById('admin-art-scripture').value.trim();
      const readTime = document.getElementById('admin-art-readtime').value.trim() || '5 min read';
      const summary = document.getElementById('admin-art-summary').value.trim();
      const content = document.getElementById('admin-art-content').value.trim();
      const imageUrl = document.getElementById('admin-art-image').value.trim() || 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1aDQLb7u5y0wa3mu795j1lFAdE0DDEmjec846qL7BWNKNreZrDbSCmPFEDTiiCJNMrAMKSGwsno-Mm8gTWTh_i-RVM5VEMUJGq8wfGthztUx2ytEXXOT_34SVSy1exUb_B2zoPGuNb1HFOgD063Msy2Z9_YuoOP9kHHn4FzL5tFZsL0VuxB7kyeYxOOpH0CHoeyEpiY_RmCB94EK1rx368JmMv95kYMFIGzbKfe-Q4g8B1ENqYjo4';

      const newArticle = {
        id: 'art-' + Date.now(),
        title,
        author,
        category,
        categoryColor: category === 'Devotional' ? 'bg-white/90 text-primary' : category === 'Leadership' ? 'bg-white/90 text-[#0288D1]' : 'bg-white/90 text-secondary',
        scripture,
        readTime,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        summary,
        content: content || summary,
        imageUrl,
        isCustom: true
      };

      dataStore.addArticle(newArticle);
      renderArticles();
      renderAdminManageList();
      articleForm.reset();
      showToast(`'${title}' has been published to the Pastor's Desk & Blog!`, 'Article Published', 'post_add');
    });
  }

  // Keyboard shortcut: Shift + A opens Admin Portal
  document.addEventListener('keydown', (e) => {
    if (e.shiftKey && (e.key === 'A' || e.key === 'a') && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      window.openAdminPortal();
    }
    if (e.key === 'Escape' && adminModal && !adminModal.classList.contains('hidden')) {
      window.closeAdminPortal();
    }
  });

  // Attach to trigger buttons
  document.querySelectorAll('[data-open-admin]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.openAdminPortal();
    });
  });
}

function renderAdminManageList() {
  const container = document.getElementById('admin-manage-container');
  if (!container) return;

  const events = dataStore.getEvents();
  const articles = dataStore.getArticles();

  container.innerHTML = `
    <div class="space-y-6">
      <div>
        <div class="flex items-center justify-between mb-3">
          <h4 class="font-headline font-bold text-sm text-forest-dark flex items-center gap-1.5">
            <span class="material-symbols-outlined text-primary text-base">event</span> Church Gatherings (${events.length})
          </h4>
        </div>
        <div class="divide-y divide-surface-warm max-h-48 overflow-y-auto bg-surface-canvas rounded-xl p-2 border border-primary/10">
          ${events.map(ev => `
            <div class="py-2.5 px-3 flex items-center justify-between text-xs">
              <div>
                <span class="font-bold text-forest-dark">${ev.title}</span>
                <span class="text-on-surface-variant block text-[11px]">${ev.month} ${ev.day} • ${ev.time}</span>
              </div>
              <div class="flex items-center gap-2">
                ${ev.isCustom ? `
                  <button type="button" class="text-error hover:text-red-700 p-1 font-semibold" onclick="window.adminDeleteEvent('${ev.id}')">
                    Delete
                  </button>
                ` : `<span class="text-on-surface-variant/60 text-[10px]">Default</span>`}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between mb-3">
          <h4 class="font-headline font-bold text-sm text-forest-dark flex items-center gap-1.5">
            <span class="material-symbols-outlined text-primary text-base">edit_note</span> Articles &amp; Blog Posts (${articles.length})
          </h4>
        </div>
        <div class="divide-y divide-surface-warm max-h-48 overflow-y-auto bg-surface-canvas rounded-xl p-2 border border-primary/10">
          ${articles.map(art => `
            <div class="py-2.5 px-3 flex items-center justify-between text-xs">
              <div>
                <span class="font-bold text-forest-dark">${art.title}</span>
                <span class="text-on-surface-variant block text-[11px]">By ${art.author} • ${art.category}</span>
              </div>
              <div class="flex items-center gap-2">
                ${art.isCustom ? `
                  <button type="button" class="text-error hover:text-red-700 p-1 font-semibold" onclick="window.adminDeleteArticle('${art.id}')">
                    Delete
                  </button>
                ` : `<span class="text-on-surface-variant/60 text-[10px]">Default</span>`}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="pt-2 border-t border-primary/10 flex justify-between items-center">
        <button type="button" class="text-xs text-error hover:underline flex items-center gap-1" onclick="window.adminResetData()">
          <span class="material-symbols-outlined text-xs">restart_alt</span> Reset All to Church Defaults
        </button>
        <span class="text-[11px] text-on-surface-variant">Changes save automatically to local storage</span>
      </div>
    </div>
  `;
}

window.adminDeleteEvent = function(id) {
  dataStore.deleteEvent(id);
  renderEvents();
  renderAdminManageList();
  showToast('Event removed successfully.', 'Admin Update', 'delete');
};

window.adminDeleteArticle = function(id) {
  dataStore.deleteArticle(id);
  renderArticles();
  renderAdminManageList();
  showToast('Article removed successfully.', 'Admin Update', 'delete');
};

window.adminResetData = function() {
  if (confirm('Reset all custom events and articles back to official default content?')) {
    dataStore.resetAll();
    renderEvents();
    renderArticles();
    renderAdminManageList();
    showToast('All content has been reset to defaults.', 'Content Reset', 'refresh');
  }
};

/* ==========================================================================
   8. "What We Believe" Interactive Accordion
   ========================================================================== */
function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item.querySelector('.accordion-content');
      const icon = header.querySelector('.accordion-icon');
      const isOpen = !content.classList.contains('hidden');

      // Close all
      document.querySelectorAll('.accordion-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.accordion-icon').forEach(i => i.textContent = 'expand_more');

      if (!isOpen) {
        content.classList.remove('hidden');
        if (icon) icon.textContent = 'expand_less';
      }
    });
  });
}

/* ==========================================================================
   9. Real-Time Service Countdown Engine (Thursday 5:30 PM & Sunday 7:30 / 9:00 AM)
   ========================================================================== */
function initCountdown() {
  const daysEl = document.getElementById('countdown-days');
  const hoursEl = document.getElementById('countdown-hours');
  const minutesEl = document.getElementById('countdown-minutes');
  const serviceNameEl = document.getElementById('countdown-service-name');

  if (!daysEl || !hoursEl || !minutesEl) return;

  function getNextChurchService() {
    const now = new Date();
    const upcomingSlots = [];

    // Scan the next 8 days for upcoming gathering slots
    for (let dayOffset = 0; dayOffset <= 8; dayOffset++) {
      const candidate = new Date(now);
      candidate.setDate(now.getDate() + dayOffset);
      const dayOfWeek = candidate.getDay(); // 0 = Sunday, 4 = Thursday

      if (dayOfWeek === 4) {
        // Thursday Midweek Encounter at 5:30 PM (17:30)
        const slot = new Date(candidate);
        slot.setHours(17, 30, 0, 0);
        if (slot.getTime() > now.getTime()) {
          upcomingSlots.push({ date: slot, name: 'Thursday Midweek Word & Worship (5:30 PM)' });
        }
      } else if (dayOfWeek === 0) {
        // Sunday 1st Service at 7:30 AM
        const slot1 = new Date(candidate);
        slot1.setHours(7, 30, 0, 0);
        if (slot1.getTime() > now.getTime()) {
          upcomingSlots.push({ date: slot1, name: 'Sunday 1st Service (7:30 AM)' });
        }

        // Sunday 2nd Service at 9:00 AM
        const slot2 = new Date(candidate);
        slot2.setHours(9, 0, 0, 0);
        if (slot2.getTime() > now.getTime()) {
          upcomingSlots.push({ date: slot2, name: 'Sunday 2nd Service (9:00 AM)' });
        }
      }
    }

    upcomingSlots.sort((a, b) => a.date.getTime() - b.date.getTime());
    return upcomingSlots[0] || { date: new Date(now.getTime() + 86400000), name: 'Next Gathering' };
  }

  let nextService = getNextChurchService();

  function update() {
    const now = new Date();
    let diff = nextService.date.getTime() - now.getTime();

    if (diff <= 0) {
      nextService = getNextChurchService();
      diff = nextService.date.getTime() - now.getTime();
    }

    if (serviceNameEl) {
      serviceNameEl.textContent = nextService.name;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
  }

  update();
  setInterval(update, 1000 * 30);
}

/* ==========================================================================
   10. Interactive Audio Player (Web Audio Ambient Synth)
   ========================================================================== */
function initAudioPlayer() {
  const playBtn = document.getElementById('sermon-play-btn');
  const scrubber = document.getElementById('sermon-scrubber');
  const progressBar = document.getElementById('sermon-progress-bar');
  const timeCurrentEl = document.getElementById('sermon-time-current');
  const timeTotalEl = document.getElementById('sermon-time-total');
  const downloadAudioBtn = document.getElementById('download-audio-btn');
  const downloadStudyBtn = document.getElementById('download-study-btn');

  let isPlaying = false;
  let totalDuration = 48 * 60 + 15;
  let currentTime = 18 * 60 + 42;
  let playInterval = null;

  let audioCtx = null;
  let oscillator = null;
  let gainNode = null;

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function updateUI() {
    if (timeCurrentEl) timeCurrentEl.textContent = formatTime(currentTime);
    if (timeTotalEl) timeTotalEl.textContent = formatTime(totalDuration);
    if (progressBar) {
      const percentage = (currentTime / totalDuration) * 100;
      progressBar.style.width = `${percentage}%`;
    }
  }

  function startAudioSynth() {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') audioCtx.resume();
      oscillator = audioCtx.createOscillator();
      gainNode = audioCtx.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(220, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + 1);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.start();
    } catch (e) {}
  }

  function stopAudioSynth() {
    if (gainNode && audioCtx) {
      try {
        gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.5);
        setTimeout(() => {
          if (oscillator) {
            oscillator.stop();
            oscillator.disconnect();
            oscillator = null;
          }
        }, 500);
      } catch (e) {}
    }
  }

  function togglePlay() {
    isPlaying = !isPlaying;
    if (playBtn) {
      const icon = playBtn.querySelector('.material-symbols-outlined');
      const text = playBtn.querySelector('.btn-label');
      if (isPlaying) {
        if (icon) icon.textContent = 'pause';
        if (text) text.textContent = 'Pause Audio';
        startAudioSynth();
        showToast("Playing 'Grace Doesn't Wait for You to Be Perfect' (2 Peter 1:3)", "Now Playing", "volume_up");
        playInterval = setInterval(() => {
          currentTime += 1;
          if (currentTime >= totalDuration) {
            currentTime = 0;
            togglePlay();
          }
          updateUI();
        }, 1000);
      } else {
        if (icon) icon.textContent = 'play_arrow';
        if (text) text.textContent = 'Play Audio';
        stopAudioSynth();
        clearInterval(playInterval);
      }
    }
  }

  if (playBtn) playBtn.addEventListener('click', togglePlay);

  if (scrubber) {
    scrubber.addEventListener('click', (e) => {
      const rect = scrubber.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
      currentTime = ratio * totalDuration;
      updateUI();
    });
  }

  if (downloadAudioBtn) {
    downloadAudioBtn.addEventListener('click', () => {
      showToast("Downloading 'Grace Doesn't Wait for You to Be Perfect.mp3'...", "Audio Download", "download");
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("Grace Life Community Sermon - Grace Doesn't Wait for You to Be Perfect - Pst. Inaifie Allaputa"));
      element.setAttribute('download', 'GraceLife_Grace_Doesnt_Wait.mp3');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    });
  }

  if (downloadStudyBtn) {
    downloadStudyBtn.addEventListener('click', () => {
      showToast("Generating PDF Study Guide with discussion questions & Scriptures...", "Study Guide", "description");
      const content = `GRACE LIFE COMMUNITY CHURCH
MESSAGE STUDY GUIDE
Series: Divine Life Series (Part 1)
Title: Grace Doesn't Wait for You to Be Perfect
Text: 2 Peter 1:3
Pastor: Pst. Inaifie Allaputa

KEY TAKEAWAYS:
1. His divine power has given us everything that pertains to life and godliness (2 Peter 1:3).
2. Grace does not wait for you to be 'perfect' before it equips you.
3. You are not striving to earn His lifestyle; you are living out of the divine life already inside you.
4. #EachOneReachOne — Authentic believers walk in practical love and intentional community.`;

      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
      element.setAttribute('download', 'StudyGuide_Grace_Doesnt_Wait.txt');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    });
  }

  updateUI();
}

/* ==========================================================================
   11. Sermon Video Modal Player
   ========================================================================== */
function initVideoModal() {
  const modal = document.getElementById('video-modal');
  const videoFrame = document.getElementById('video-modal-frame');
  const videoTitle = document.getElementById('video-modal-title');
  const closeBtn = document.getElementById('video-modal-close');

  if (!modal) return;

  const sampleVideos = {
    latest: {
      title: "Grace Doesn't Wait for You to Be Perfect — Pst. Inaifie Allaputa",
      url: "https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?autoplay=1"
    },
    peace: {
      title: "Overcoming Worry Through Supernatural Peace — Pst. Inaifie Allaputa",
      url: "https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?autoplay=1"
    },
    destiny: {
      title: "Positioned for Destiny: You Are God's Masterpiece — Pst. Inaifie Allaputa",
      url: "https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?autoplay=1"
    },
    friendship: {
      title: "Building Covental, Life-Giving Friendships — Minister Marcus Reed",
      url: "https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?autoplay=1"
    }
  };

  window.openVideoModal = function(key = 'latest', customTitle = null) {
    const item = sampleVideos[key] || sampleVideos.latest;
    if (videoTitle) videoTitle.textContent = customTitle || item.title;
    if (videoFrame) videoFrame.src = item.url;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  };

  window.closeVideoModal = function() {
    if (videoFrame) videoFrame.src = '';
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  };

  if (closeBtn) closeBtn.addEventListener('click', window.closeVideoModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) window.closeVideoModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      window.closeVideoModal();
    }
  });

  document.querySelectorAll('[data-open-video]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-open-video') || 'latest';
      const title = btn.getAttribute('data-video-title');
      window.openVideoModal(key, title);
    });
  });
}

/* ==========================================================================
   12. Sermon Category Filter Tabs
   ========================================================================== */
function initSermonFilters() {
  const filterBtns = document.querySelectorAll('.sermon-filter-btn');
  const sermonCards = document.querySelectorAll('.sermon-card');

  if (!filterBtns.length || !sermonCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');

      filterBtns.forEach(b => {
        b.className = 'sermon-filter-btn px-4 py-1.5 rounded-full bg-surface-card border border-primary/10 text-on-surface-variant hover:text-primary hover:bg-forest-tint text-xs font-medium transition-colors cursor-pointer';
      });
      btn.className = 'sermon-filter-btn px-4 py-1.5 rounded-full bg-primary text-white text-xs font-semibold shadow-sm cursor-pointer';

      sermonCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease';
            card.style.opacity = '1';
          }, 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   13. Giving Module Engine
   ========================================================================== */
function initGivingModule() {
  const freqOneTimeBtn = document.getElementById('giving-freq-onetime');
  const freqRecurringBtn = document.getElementById('giving-freq-recurring');
  const amountBtns = document.querySelectorAll('.giving-amount-btn');
  const customAmountInput = document.getElementById('giving-custom-amount');
  const fundSelect = document.getElementById('giving-fund-select');
  const proceedBtn = document.getElementById('giving-proceed-btn');

  let currentFrequency = 'One-Time Gift';
  let selectedAmount = 100;

  if (freqOneTimeBtn && freqRecurringBtn) {
    freqOneTimeBtn.addEventListener('click', () => {
      currentFrequency = 'One-Time Gift';
      freqOneTimeBtn.className = 'flex-1 py-2 rounded-full bg-primary-container text-white text-xs font-semibold shadow-sm transition-all';
      freqRecurringBtn.className = 'flex-1 py-2 rounded-full text-on-surface-variant hover:text-primary text-xs font-medium transition-all';
    });

    freqRecurringBtn.addEventListener('click', () => {
      currentFrequency = 'Recurring / Monthly Tithe';
      freqRecurringBtn.className = 'flex-1 py-2 rounded-full bg-primary-container text-white text-xs font-semibold shadow-sm transition-all';
      freqOneTimeBtn.className = 'flex-1 py-2 rounded-full text-on-surface-variant hover:text-primary text-xs font-medium transition-all';
    });
  }

  amountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      amountBtns.forEach(b => {
        b.className = 'giving-amount-btn py-3 rounded-xl border border-outline-variant text-center font-bold text-sm hover:border-primary transition-all';
      });
      btn.className = 'giving-amount-btn py-3 rounded-xl bg-primary-container text-white text-center font-bold text-sm shadow-sm ring-2 ring-primary ring-offset-2';
      selectedAmount = parseFloat(btn.getAttribute('data-amount') || '100');
      if (customAmountInput) customAmountInput.value = '';
    });
  });

  if (customAmountInput) {
    customAmountInput.addEventListener('input', () => {
      if (customAmountInput.value) {
        amountBtns.forEach(b => {
          b.className = 'giving-amount-btn py-3 rounded-xl border border-outline-variant text-center font-bold text-sm hover:border-primary transition-all';
        });
        selectedAmount = parseFloat(customAmountInput.value) || 0;
      }
    });
  }

  if (proceedBtn) {
    proceedBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const fund = fundSelect ? fundSelect.value : 'General Ministry & Operations';
      const amount = customAmountInput && customAmountInput.value ? parseFloat(customAmountInput.value) : selectedAmount;

      if (!amount || amount <= 0) {
        showToast('Please enter a valid gift amount.', 'Giving Notice', 'error');
        return;
      }

      openGivingModal(amount, fund, currentFrequency);
    });
  }
}

function openGivingModal(amount, fund, frequency) {
  const modal = document.getElementById('giving-modal');
  if (!modal) return;

  document.getElementById('giving-summary-amount').textContent = `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById('giving-summary-fund').textContent = fund;
  document.getElementById('giving-summary-freq').textContent = frequency;

  const formSection = document.getElementById('giving-modal-form-section');
  const receiptSection = document.getElementById('giving-modal-receipt-section');
  
  if (formSection) formSection.classList.remove('hidden');
  if (receiptSection) receiptSection.classList.add('hidden');

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('overflow-hidden');
}

window.completeSimulatedGiving = function(event) {
  if (event) event.preventDefault();
  const donorName = document.getElementById('giving-donor-name').value || 'Generous Partner';
  const formSection = document.getElementById('giving-modal-form-section');
  const receiptSection = document.getElementById('giving-modal-receipt-section');

  const submitBtn = document.getElementById('giving-submit-payment-btn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="inline-block animate-spin mr-2">⟳</span> Processing Secure Gift...`;
  }

  setTimeout(() => {
    if (formSection) formSection.classList.add('hidden');
    if (receiptSection) {
      receiptSection.classList.remove('hidden');
      document.getElementById('receipt-donor-name').textContent = donorName;
      document.getElementById('receipt-date').textContent = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      document.getElementById('receipt-id').textContent = 'GLC-' + Math.floor(100000 + Math.random() * 900000);
    }
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span class="material-symbols-outlined text-lg">check_circle</span> <span>Confirm & Complete Giving</span>`;
    }
    showToast('Thank you for your generous partnership! Your contribution changes lives.', 'Giving Successful', 'favorite');
  }, 1200);
};

window.closeGivingModal = function() {
  const modal = document.getElementById('giving-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }
};

/* ==========================================================================
   14. Plan Your Visit & Prayer Request Modals
   ========================================================================== */
function initModals() {
  const planVisitModal = document.getElementById('plan-visit-modal');
  const planVisitForm = document.getElementById('plan-visit-form');

  window.openPlanVisitModal = function() {
    if (!planVisitModal) return;
    planVisitModal.classList.remove('hidden');
    planVisitModal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  };

  window.closePlanVisitModal = function() {
    if (!planVisitModal) return;
    planVisitModal.classList.add('hidden');
    planVisitModal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  };

  if (planVisitForm) {
    planVisitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('visit-name').value;
      const service = document.getElementById('visit-service').value;
      closePlanVisitModal();
      showToast(`We can't wait to welcome you this Sunday for the ${service}! Our greeter team has been notified.`, `Welcome, ${name}!`, 'favorite');
      planVisitForm.reset();
    });
  }

  const prayerModal = document.getElementById('prayer-modal');
  const prayerForm = document.getElementById('prayer-form');

  window.openPrayerModal = function() {
    if (!prayerModal) return;
    prayerModal.classList.remove('hidden');
    prayerModal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  };

  window.closePrayerModal = function() {
    if (!prayerModal) return;
    prayerModal.classList.add('hidden');
    prayerModal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  };

  if (prayerForm) {
    prayerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closePrayerModal();
      showToast("Your prayer request has been received by our pastoral intercession team. God's grace and peace be with you.", 'Prayer Received', 'folded_hands');
      prayerForm.reset();
    });
  }

  [planVisitModal, prayerModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.classList.remove('overflow-hidden');
      }
    });
  });

  document.querySelectorAll('[data-open-plan-visit]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.openPlanVisitModal();
    });
  });

  document.querySelectorAll('[data-open-prayer]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.openPrayerModal();
    });
  });
}

/* ==========================================================================
   15. Global Search Overlay
   ========================================================================== */
function initSearch() {
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchClose = document.getElementById('search-close');
  const searchTriggers = document.querySelectorAll('[data-open-search]');

  window.openSearch = function() {
    if (!searchModal) return;
    searchModal.classList.remove('hidden');
    searchModal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
    setTimeout(() => {
      if (searchInput) {
        searchInput.focus();
        renderResults('');
      }
    }, 100);
  };

  window.closeSearch = function() {
    if (!searchModal) return;
    searchModal.classList.add('hidden');
    searchModal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
    if (searchInput) searchInput.value = '';
  };

  function renderResults(query) {
    if (!searchResults) return;
    const cleanQuery = query.toLowerCase().trim();

    const articles = dataStore.getArticles();
    const events = dataStore.getEvents();

    const searchItems = [
      ...articles.map(a => ({ type: 'Article', title: a.title, detail: `By ${a.author} • ${a.category}`, link: '#blog', id: a.id })),
      ...events.map(e => ({ type: 'Event', title: e.title, detail: `${e.month} ${e.day} • ${e.time}`, link: '#events', id: e.id })),
      { type: 'Sermon', title: "Grace Doesn't Wait for You to Be Perfect", detail: '2 Peter 1:3 • Pst. Inaifie Allaputa', link: '#sermons' },
      { type: 'Movement', title: '#EachOneReachOne & Authentic Believers', detail: 'Our community outreach and discipleship movement', link: '#about-us' },
      { type: 'About', title: 'Who We Are & What We Believe', detail: 'Our Story & The 5 G.R.A.C.E Core Values', link: '#about-us' },
      { type: 'Giving', title: 'Generosity & Tithes Portal', detail: 'Tax-Deductible Kingdom Partnership', link: '#give' }
    ];

    const matches = cleanQuery === '' 
      ? searchItems.slice(0, 6) 
      : searchItems.filter(item => 
          item.title.toLowerCase().includes(cleanQuery) ||
          item.detail.toLowerCase().includes(cleanQuery) ||
          item.type.toLowerCase().includes(cleanQuery)
        );

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div class="text-center py-10 text-on-surface-variant">
          <span class="material-symbols-outlined text-4xl mb-2 text-primary/40">search_off</span>
          <p class="text-sm font-semibold">No results found for "${query}"</p>
          <p class="text-xs text-on-surface-variant/80 mt-1">Try searching for grace, events, pastors, prayer, or about.</p>
        </div>
      `;
      return;
    }

    searchResults.innerHTML = matches.map(item => `
      <a href="${item.link}" onclick="window.closeSearch(); ${item.type === 'Article' ? `window.readFullArticle('${item.id}');` : ''}" class="flex items-center justify-between p-3.5 rounded-xl hover:bg-forest-tint transition-all group border border-transparent hover:border-primary/10">
        <div class="flex items-center gap-3">
          <div class="h-9 w-9 rounded-lg bg-surface-warm group-hover:bg-primary-container group-hover:text-white text-primary flex items-center justify-center transition-colors">
            <span class="material-symbols-outlined text-lg">${
              item.type === 'Article' ? 'menu_book' : 
              item.type === 'Event' ? 'event' : 
              item.type === 'Sermon' ? 'play_circle' : 
              item.type === 'About' ? 'church' : 'volunteer_activism'
            }</span>
          </div>
          <div>
            <div class="text-xs font-semibold uppercase tracking-wider text-primary group-hover:text-forest-dark">${item.type}</div>
            <div class="text-sm font-bold text-forest-dark">${item.title}</div>
            <div class="text-xs text-on-surface-variant">${item.detail}</div>
          </div>
        </div>
        <span class="material-symbols-outlined text-primary/40 group-hover:text-primary text-base transition-colors">arrow_forward</span>
      </a>
    `).join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => renderResults(e.target.value));
  }

  searchTriggers.forEach(t => t.addEventListener('click', (e) => { e.preventDefault(); window.openSearch(); }));
  if (searchClose) searchClose.addEventListener('click', window.closeSearch);

  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      window.openSearch();
    }
  });
}

/* ==========================================================================
   16. Mobile Navigation Drawer
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-menu-drawer');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const links = drawer ? drawer.querySelectorAll('a, button[data-close-drawer]') : [];

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.remove('translate-x-full');
    drawer.classList.add('translate-x-0');
    if (backdrop) {
      backdrop.classList.remove('hidden');
      setTimeout(() => backdrop.classList.remove('opacity-0'), 10);
    }
    document.body.classList.add('overflow-hidden');
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('translate-x-0');
    drawer.classList.add('translate-x-full');
    if (backdrop) {
      backdrop.classList.add('opacity-0');
      setTimeout(() => backdrop.classList.add('hidden'), 300);
    }
    document.body.classList.remove('overflow-hidden');
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  links.forEach(link => link.addEventListener('click', closeDrawer));
}

/* ==========================================================================
   17. Scroll-Triggered Reveal Animations
   ========================================================================== */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}
