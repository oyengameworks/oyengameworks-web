// Home: project highlight (uses shared Oyen data + modal)
(function () {
  const grid = document.querySelector('#projectGrid');
  if (!grid || !window.Oyen) return;
  const { PROJECTS, projectModal, openModal } = window.Oyen;

  grid.innerHTML =
    PROJECTS.map((p) => `
      <button data-project="${p.id}" class="card text-left rounded-2xl overflow-hidden bg-cover p-2 hover:ring-2 hover:ring-oyen-500" style="background-image:url('src/absolute_meme_card.png')">
        <span class="block rounded-xl overflow-hidden bg-white dark:bg-stone-900">
        <img src="${p.cover}" alt="${p.title} cover" class="w-full aspect-[16/9] object-cover bg-oyen-50 dark:bg-stone-800" loading="lazy">
        <span class="block p-5">
          <span class="block font-display font-bold text-xl">${p.title}</span>
          <span class="block text-stone-600 dark:text-stone-400 text-sm mt-1">${p.tagline}</span>
          <span class="flex flex-wrap gap-1.5 mt-3">
            ${p.tags.map((t) => `<span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white dark:bg-stone-800 border border-orange-200 dark:border-stone-700">${t}</span>`).join('')}
          </span>
          <span class="block mt-3 text-sm font-bold text-oyen-600 dark:text-orange-400">Click for details →</span>
        </span>
        </span>
      </button>`).join('') +
    `<div class="rounded-2xl border-2 border-dashed border-orange-200 dark:border-stone-700 p-5 flex flex-col justify-center text-stone-500 dark:text-stone-400">
       <p class="font-display font-bold text-xl">More projects soon</p>
       <p class="text-sm mt-1">New prototypes are in the oven. Follow our Instagram for announcements.</p>
     </div>`;

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-project]');
    if (!btn) return;
    const p = PROJECTS.find((x) => x.id === btn.dataset.project);
    if (p) openModal(p.title, projectModal(p));
  });
})();
