const { User } = require("../models");
const findAllUser = async (req, res) => {
  const data = await User.findAll();

  res.json({
    message: "ini dari router",
    data: data,
  });
};

const detailUser = async (req, res) => {
  // get id dari request
  let id = req.body.id;

  // ambil data dari database
  const data = await User.findByPk(id);
  // tampilkan data
  res.json({
    message: "ini dari router",
    data: data,
  });
};

const tambahUser = async (req, res) => {
  try {
    // ambil data dari request
    const data = req.body;

    const result = await User.create(data);
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

const deleteUser = async (req, res) => {
  try {
    //delete data dari request
    const id = req.body.id;

    //delete data dari database
    const result = await User.destroy({
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

const updateUser = async (req, res) => {
  try {
    // update data dari request
    const id = req.body.id;

    // update data ke database
    const result = await User.update(
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
  findAllUser,
  detailUser,
  tambahUser,
  deleteUser,
  updateUser,
};
