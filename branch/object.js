// Contoh data hasil query SQL (baris-baris)
const rows = [
  { nama_kategori: "Makanan", nama_menu: "Nasi Goreng" },
  { nama_kategori: "Makanan", nama_menu: "Mie Ayam" },
  { nama_kategori: "Minuman", nama_menu: "Es Teh" },
  { nama_kategori: "Minuman", nama_menu: "Jus Alpukat" },
  { nama_kategori: "Snack",   nama_menu: null } // kategori tanpa menu
];

// Ubah ke object ringkas: { kategori: { jumlah_menu, menus: [] } }
function buildCategorySummary(rows) {
  const result = {};

  for (const r of rows) {
    const k = r.nama_kategori || "Tanpa Kategori";
    if (!result[k]) {
      result[k] = { jumlah_menu: 0, menus: [] };
    }
    if (r.nama_menu) {
      result[k].jumlah_menu += 1;
      result[k].menus.push(r.nama_menu);
    }
  }

  return result;
}

const kategoriObj = buildCategorySummary(rows);
console.log(kategoriObj);

/*
Output:
{
  Makanan: { jumlah_menu: 2, menus: ["Nasi Goreng", "Mie Ayam"] },
  Minuman: { jumlah_menu: 2, menus: ["Es Teh", "Jus Alpukat"] },
  Snack:   { jumlah_menu: 0, menus: [] }
}
*/
