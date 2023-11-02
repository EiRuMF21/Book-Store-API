const { Book } = require("../models");
const findAllBooks = async (req, res) => {
  const data = await Book.findAll();

  res.json({
    message: "ini dari router",
    data: data,
  });
};

const detailBooks = async (req, res) => {
  // get id dari request
  let id = req.body.id;

  // ambil data dari database
  const data = await Book.findByPk(id);
  // tampilkan data
  res.json({
    message: "ini dari router",
    data: data,
  });
};

const tambahBuku = async (req, res) => {
  try {
    // ambil data dari request
    const data = req.body;

    const result = await Book.create(data);
    // insert ke database

    // tampilkan status
    res.json({
      result: result,
    });
  } catch (error) {
    res.json({
      message: "error" + error,
    });
  }
};

const deleteBuku = async (req, res) => {
  try {
    //delete data dari request
    const id = req.body.id;

    //delete data dari database
    const result = await Book.destroy({
      where: {
        id: id,
      },
    });

    // tampilkan status
    res.json({
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    res.json({
      message: "error" + error,
    });
  }
};

const updateBook = async (req, res) => {
  try {
    // update data dari request
    const id = req.body.id;

    // update data ke database
    const result = await Book.update(
      {
        Judul: req.body.Judul,
        Penerbit: req.body.Penerbit,
        Dekripsi: req.body.Deksripsi,
        Gambar: req.body.Gambar,
      },
      {
        where: {
          id: id,
        },
      }
    );

    // tampilkan status
    res.json({
      message: "Data berhasil update",
    });
  } catch (error) {
    res.json({
      message: "error" + error,
    });
  }
};

module.exports = {
  findAllBooks,
  detailBooks,
  tambahBuku,
  deleteBuku,
  updateBook,
};
