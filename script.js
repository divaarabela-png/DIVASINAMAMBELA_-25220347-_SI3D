// ===== 1. Menu di sebelah kiri: klik untuk pindah halaman =====
const menu = document.querySelectorAll('nav a[data-page]');
const halaman = document.querySelectorAll('.halaman');

function tampilkan(id) {
  halaman.forEach(function (h) {
    h.classList.toggle('aktif', h.id === id);
  });
  menu.forEach(function (m) {
    m.classList.toggle('active', m.dataset.page === id);
  });
}

menu.forEach(function (m) {
  m.addEventListener('click', function (e) {
    e.preventDefault();
    tampilkan(m.dataset.page);
  });
});

// ===== 2. Popup: semua elemen yang punya data-judul bisa diklik =====
const modal = document.getElementById('modal');
const modalJudul = document.getElementById('modal-judul');
const modalIsi = document.getElementById('modal-isi');

function bukaPopup(judul, isi) {
  modalJudul.textContent = judul;
  modalIsi.textContent = isi;
  modal.classList.add('buka');
}

function tutupPopup() {
  modal.classList.remove('buka');
}

document.querySelectorAll('[data-judul]').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    bukaPopup(el.dataset.judul, el.dataset.isi);
  });
});

document.getElementById('modal-tutup').addEventListener('click', tutupPopup);

modal.addEventListener('click', function (e) {
  if (e.target === modal) tutupPopup();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') tutupPopup();
});