const express = require("express");
// const { Client } = require("pg");

const app = express();
app.use(express.json());

const port = 9999;

const route = require("./routes/index");
app.use(route);

// const client = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "Book_Store_API",
//   password: "210607Iurie",
//   port: 5432,
// });

// client
//   .connect()
//   .then(() => {
//     console.log("terhubung ke data postgresql");
//   })
//   .catch((error) => {
//     console.error("gagal terhubung ke database", error);
//   });

// // app.get("/users",  (req, res) => {});

// // app.get("/users/:id", async (req, res) => {
// //   let id = parseInt(req.params.id);

// //   try {
// //     const query =
// //       "SELECT user_id, nama, alamat FROM public.users where user_id = $1";
// //     const { rows } = await client.query(query, [id]);

// //     if (rows.length === 0) {
// //       return res.status(404).json({
// //         message: "Data not found",
// //       });
// //     } else {
// //       res.json({
// //         data: rows[0],
// //       });
// //     }
// //   } catch (error) {
// //     return res.status(404).json({
// //       message: "ada yang salah",
// //     });
// //   }
// // });

// app.post("/users/", async (req, res) => {
//   //   res.send("Balikkan untuk user method post");
//   let data = req.body;

//   const query =
//     "INSERT INTO public.users(user_id, nama, alamat) VALUES ($1, $2, $3);";

//   client.query(query, [data.user_id, data.nama, data.alamat], (err, result) => {
//     if (err) {
//       console.error("Error executing insert:", err);
//       return res.status(500).json({ error: "Terjadi Kesalahan " + err });
//     } else {
//       res.json({
//         message: "Data berhasil dimasukkan",
//       });
//     }
//   });
//   //   res.send("Ini adalah : " + id);
// });

app.listen(port, () => console.log(`Server running on port ${port}`));

// const data_users = [
//     { id: 1, name: "Iurie Muhamad", alamat: "Ujungberung" },
//     { id: 2, name: "Arya Abdullah", alamat: "Cimahi" },
//     { id: 3, name: "Aji Permana", alamat: "Kircon" },
//     { id: 4, name: "Azka Dafin", alamat: "Antapani" },
// ];
// app.get("/users/:id", (req, res) => {

//     let id = parseInt(req.params.id);

//     let result;
//     const user = data_users.find((user) => user.id === id);
//     if (user) {
//         result = {
//         status: 200,
//         data: user,
//         };
//     } else {
//         res.status(404).json({ error: "User not found" });
//     }
//     res.json(result);
// });

// app.get("/users/:id", (req, res) => {
//     let id = parseInt(req.params.id);

//     let result;
//     const user = data_users.find((user) => user.id === id);
//     if (user) {
//         result = {
//         status: 200,
//         data: user,
//         };
//     } else {
//         res.status(404).json({ error: "User not found" });
//     }
//     res.json(result);
// });
// app.post('/KopiMochacino',(req,res) =>{
//     res.json("Ini kopi Mochacino ")
// })
// app.put('/KopiEspresso',(req,res) =>{
//     res.json("Ini Kopi Espresso")
// })
// app.delete('/KopiLongblack',(req,res) =>{
//     res.json("Ini Kopi Longblack")
// })
