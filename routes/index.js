const router = require("express").Router();
const {
  findAllBooks,
  detailBooks,
  tambahBuku,
  deleteBuku,
  updateBook,
} = require("../controllers/BookController");
const {
  findAllUser,
  detailUser,
  tambahUser,
  deleteUser,
  updateUser,
} = require("../controllers/UserController");

router.get("/books", findAllBooks);
router.get("/findbook", detailBooks);
router.post("/book", tambahBuku);
router.delete("/book", deleteBuku);
router.put("/book", updateBook);

router.get("/user", findAllUser);
router.get("/user/:id", detailUser);
router.post("/user", tambahUser);
router.delete("/user", deleteUser);
router.put("/user", updateUser);

module.exports = router;
