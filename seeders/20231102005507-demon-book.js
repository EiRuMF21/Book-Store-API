"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Books", [
      {
        Judul: "Bumi Manusia",
        Penerbit: "Pramoedya Ananta Toer",
        Deskripsi: "Pria Jawa",
        Gambar: "Bumi_Manusia_poster.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Judul: "Laskar Pelangi",
        Penerbit: "Andrea Hirata",
        Deskripsi: "Desa Kecil",
        Gambar: "Laskar_Pelangi_film.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Judul: "Anak Semua Bangsa",
        Penerbit: "Pramoedya Ananta Toer",
        Deskripsi: "Nasionalisme",
        Gambar: "anak_semua_bangsa.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Judul: "Cantik itu Luka",
        Penerbit: "Eka Kurniawan",
        Deskripsi: "Diskriminasi Gender",
        Gambar: "Cinta itu luka.jpg ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Books", null, {});
  },
};
