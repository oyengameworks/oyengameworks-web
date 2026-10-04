// Oyenian: squad member cards (uses shared Oyen data + modal)
(function () {
  const grid = document.querySelector('#teamGrid');
  if (!grid || !window.Oyen) return;
  const { TEAM, memberCard, memberModal, openModal } = window.Oyen;

  grid.innerHTML = TEAM.map((m, i) => memberCard(m, i)).join('');

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-member]');
    if (!btn) return;
    const m = TEAM[Number(btn.dataset.member)];
    if (m) openModal(m.name, memberModal(m));
  });
})();
