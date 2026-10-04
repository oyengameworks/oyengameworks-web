// Oyen Gameworks: shared data, menu, modal (vanilla JS)
(function () {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();

  // Pure dark mode, forced via <html class="dark">, no toggle.

  // ---------- Mobile menu ----------
  const menuBtn = $('#menuBtn');
  const mobileMenu = $('#mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    $$('#mobileMenu a').forEach((a) => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));
  }

  // ---------- Active nav ----------
  const page = (location.pathname.split('/').pop() || 'index.html').split('?')[0];
  $$('[data-nav]').forEach((a) => {
    if (a.getAttribute('data-nav') === page) a.classList.add('active');
  });

  // ---------- Modal ----------
  const modal = $('#modal');
  function openModal(title, html) {
    if (!modal) return;
    $('#modalTitle').textContent = title;
    $('#modalBody').innerHTML = html;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
  const modalClose = $('#modalClose');
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  // ---------- Data ----------
  const PROJECTS = [
    {
      id: 'catty-cardy',
      title: 'Catty Cardy',
      tagline: 'Collect adorable, absurd, unhinged cat cards.',
      cover: 'https://img.itch.zone/aW1nLzI4MjcxMjA0LnBuZw==/original/lEdJ%2BY.png',
      tags: ['Android', 'Card Game', 'Casual', 'Free'],
      meta: [
        ['Status', 'Prototype'],
        ['Version', 'v1.0.1'],
        ['Size', '66 MB'],
        ['Jam', 'GAMESEED 2026 Mobile'],
      ],
      about:
        'Catty Cardy brings back the childhood joy of opening mystery card packs, now with viral internet cat stickers turned into collectible cards. Open packs, grow your collection, and laugh at cards that make absolutely no sense.',
      howTo: [
        'PC: use the mouse to click. Simple and fast.',
        'Mobile / touch: tap and swipe. Works on any touchscreen.',
        'Goal: open packs and collect as many cat cards as you can.',
      ],
      shots: [
        'https://img.itch.zone/aW1hZ2UvNDcyNDE3Ni8yODI3Njc0Ni5wbmc=/347x500/KNsnJm.png',
        'https://img.itch.zone/aW1hZ2UvNDcyNDE3Ni8yODI3Njc0NC5wbmc=/347x500/kmPYfU.png',
        'https://img.itch.zone/aW1hZ2UvNDcyNDE3Ni8yODI3Njc0Ny5wbmc=/347x500/nFHmvf.png',
        'https://img.itch.zone/aW1hZ2UvNDcyNDE3Ni8yODI3Njc0NS5wbmc=/347x500/ypWaJQ.png',
        'https://img.itch.zone/aW1hZ2UvNDcyNDE3Ni8yODI3Njc0OC5wbmc=/347x500/Hx9UZ6.png',
      ],
      links: [
        ['Download on itch.io', 'https://oyen-gameworks.itch.io/catty-cardy'],
        ['Watch gameplay', 'https://www.youtube.com/watch?v=PSx_wR-osgw'],
        ['Rate jam entry', 'https://itch.io/jam/gameseed-2026-mobile/rate/4724176'],
      ],
    },
  ];

  const TEAM = [
    {
      name: 'Arka', photo: 'src/arka.jpg',
      frame: 'src/mythical_card.png', rarity: 'Mythical',
      role: 'PM, Lead Designer & Programmer',
      squad: 'Squad HQ: Commander',
      ig: 'https://www.instagram.com/arka.r__/', handle: '@arka.r__',
      short: 'Leads the project vision, game design, and programming.',
      detail:
        'Arka is the PM, lead designer, and programmer of Oyen Gameworks. He owns the game vision for Catty Cardy, from the pack-opening loop to balancing the collection, and leads development and release planning.',
    },
    {
      name: 'Farid', photo: 'src/farid.png',
      frame: 'src/mythical_card.png', rarity: 'Mythical',
      role: 'Lead Programmer',
      squad: 'Engineering Division',
      ig: 'https://www.instagram.com/its.justfarid/', handle: '@its.justfarid',
      short: 'Owns the codebase and core game systems.',
      detail:
        'Farid is the lead programmer. He builds and maintains the core systems behind Catty Cardy, from gameplay logic and pack mechanics to platform builds, keeping the game stable from jam prototype to public release.',
    },
    {
      name: 'Satriya', photo: 'src/samsat.jpg',
      frame: 'src/mythical_card.png', rarity: 'Mythical',
      role: 'Lead 2D Artist',
      squad: 'Art Division',
      ig: 'https://www.instagram.com/samsatxd/', handle: '@samsatxd',
      short: 'Defines the art style and leads card visuals.',
      detail:
        'Satriya is the lead 2D artist. He sets the visual direction of Catty Cardy and turns viral sticker references into polished, absurd collectible cards with consistent style across the set.',
    },
    {
      name: 'Najih', photo: 'src/najih.png',
      frame: 'src/mythical_card.png', rarity: 'Mythical',
      role: '2D Artist',
      squad: 'Art Division',
      ig: 'https://www.instagram.com/14.1.10.9.8/', handle: '@14.1.10.9.8',
      short: 'Creates card art and in-game visuals.',
      detail:
        'Najih is the 2D artist of the team. He produces card illustrations and supporting visuals for Catty Cardy, expanding the collection with new cats every update.',
    },
  ];

  function memberCard(m, i) {
    return `
    <button data-member="${i}" class="card rounded-2xl overflow-hidden bg-cover text-center hover:ring-2 hover:ring-oyen-500" style="background-image:url('${m.frame}')">
      <span class="block p-3">
        <span class="block rounded-xl overflow-hidden border-2 border-white/70">
          <img src="${m.photo}" alt="Photo of ${m.name}" class="w-full aspect-square object-cover" loading="lazy" onerror="this.remove()">
        </span>
        <span class="block mt-2 rounded-xl bg-black/55 text-white px-2 py-2">
          <span class="block font-display font-bold leading-tight">${m.name}</span>
          <span class="block text-[10px] font-bold uppercase tracking-wide opacity-80 mt-0.5">${m.role}</span>
        </span>
      </span>
    </button>`;
  }

  function memberModal(m) {
    return `
      <div class="rounded-2xl overflow-hidden bg-cover p-3 sm:p-4 max-w-md mx-auto" style="background-image:url('${m.frame}')">
        <div class="rounded-xl overflow-hidden border-2 border-white/70 bg-black/30">
          <img src="${m.photo}" alt="Photo of ${m.name}" class="w-full h-auto max-h-[38vh] object-contain mx-auto" onerror="this.remove()">
        </div>
        <div class="mt-3 rounded-xl bg-black/55 text-white p-4 sm:p-5">
          <p class="font-display font-extrabold text-xl leading-tight">${m.name}</p>
          <p class="text-[11px] font-bold uppercase tracking-wide opacity-80 mt-1">${m.role} · ${m.squad}</p>
          <a href="${m.ig}" target="_blank" class="inline-block text-sm font-bold mt-1 underline underline-offset-2">${m.handle} ↗</a>
          <p class="text-white/85 text-[15px] mt-3 leading-relaxed">${m.detail}</p>
          <a href="${m.ig}" target="_blank" class="inline-block mt-4 bg-oyen-500 hover:bg-oyen-600 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition">View Instagram ↗</a>
        </div>
      </div>`;
  }

  function projectModal(p) {
    return `
      <img src="${p.cover}" alt="${p.title}" class="w-full rounded-xl aspect-[16/9] object-cover bg-oyen-50 dark:bg-stone-800">
      <div class="flex flex-wrap gap-1.5 mt-4">
        ${p.tags.map((t) => `<span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-cream dark:bg-stone-800 border border-orange-200 dark:border-stone-700">${t}</span>`).join('')}
      </div>
      <p class="text-stone-600 dark:text-stone-400 mt-3 leading-relaxed">${p.about}</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
        ${p.meta.map(([k, v]) => `<div class="bg-cream dark:bg-stone-800 border border-orange-100 dark:border-stone-700 rounded-xl px-3 py-2.5 text-center"><p class="text-[11px] uppercase tracking-wide text-stone-500 dark:text-stone-400 font-bold">${k}</p><p class="font-bold text-sm mt-0.5">${v}</p></div>`).join('')}
      </div>
      <h4 class="font-display font-bold mt-5">How to play</h4>
      <ul class="list-disc pl-5 mt-1.5 space-y-1 text-stone-600 dark:text-stone-400 text-[15px]">${p.howTo.map((h) => `<li>${h}</li>`).join('')}</ul>
      <h4 class="font-display font-bold mt-5">Screenshots</h4>
      <div class="grid grid-cols-3 sm:grid-cols-5 gap-2 mt-2">
        ${p.shots.map((s, i) => `<a href="${s}" target="_blank"><img src="${s}" alt="Screenshot ${i + 1}" class="rounded-lg aspect-[3/4] object-cover bg-oyen-50 dark:bg-stone-800 border border-orange-100 dark:border-stone-700" loading="lazy"></a>`).join('')}
      </div>
      <div class="aspect-video mt-4 rounded-xl overflow-hidden bg-ink">
        <iframe class="w-full h-full" src="https://www.youtube.com/embed/PSx_wR-osgw" title="Gameplay" frameborder="0" allowfullscreen loading="lazy"></iframe>
      </div>
      <div class="flex flex-wrap gap-2 mt-5">
        ${p.links.map(([label, url]) => `<a href="${url}" target="_blank" class="bg-ink dark:bg-oyen-500 text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-oyen-600 transition">${label} ↗</a>`).join('')}
      </div>`;
  }

  window.Oyen = { $, $$, openModal, closeModal, PROJECTS, TEAM, memberCard, memberModal, projectModal };
})();
