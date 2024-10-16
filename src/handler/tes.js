// // const dbBooks = require('../database');
// // const allBooks = (request, h) => {
// //   const { name, reading, finished } = request.query;

// //   if (name) {
// //     const lowName = name.toLowerCase();

// //     const response = h.response({
// //       status: 'success',
// //       data: {
// //         books: dbBooks
// //           .filter((n) => n.name === lowName)
// //           .map((books) => ({
// //             id: books.id,
// //             name: books.name,
// //             publisher: books.publisher
// //           }))
// //       }
// //     });
// //     response.code(200);
// //     return response;
// //   }

// //   if (reading === '1') {
// //     const response = h.response({
// //       status: 'success',
// //       data: {
// //         books: dbBooks
// //           .filter((r) => r.reading === true)
// //           .map((books) => ({
// //             id: books.id,
// //             name: books.name,
// //             publisher: books.publisher
// //           }))
// //       }
// //     });
// //     response.code(200);
// //     return response;
// //   }

// //   if (reading === '0') {
// //     const response = h.response({
// //       status: 'success',
// //       data: {
// //         books: dbBooks
// //           .filter((r) => r.reading === false)
// //           .map((books) => ({
// //             id: books.id,
// //             name: books.name,
// //             publisher: books.publisher
// //           }))
// //       }
// //     });
// //     response.code(200);
// //     return response;
// //   }

// //   if (finished === '1') {
// //     const response = h.response({
// //       status: 'success',
// //       data: {
// //         books: dbBooks
// //           .filter((f) => f.finished === true)
// //           .map((books) => ({
// //             id: books.id,
// //             name: books.name,
// //             publisher: books.publisher
// //           }))
// //       }
// //     });
// //     response.code(200);
// //     return response;
// //   }

// //   if (finished === '0') {
// //     const response = h.response({
// //       status: 'success',
// //       data: {
// //         books: dbBooks
// //           .filter((f) => f.finished === false)
// //           .map((books) => ({
// //             id: books.id,
// //             name: books.name,
// //             publisher: books.publisher
// //           }))
// //       }
// //     });
// //     response.code(200);
// //     return response;
// //   }

// //   const response = h.response({
// //     status: 'success',
// //     data: {
// //       books: dbBooks.map((m) => ({
// //         id: m.id,
// //         name: m.name,
// //         publisher: m.publisher
// //       }))
// //     }
// //   });
// //   response.code(200);
// //   return response;
// // };

// // export const createBook = (request, h) => {
// //   try {
// //     const {
// //       name,
// //       year,
// //       author,
// //       summary,
// //       publisher,
// //       pageCount,
// //       readPage,
// //       reading,
// //     } = request.payload;

// //     const id = nanoid(16);
// //     const numberYear = Number(year);
// //     const numberPageCount = Number(pageCount);
// //     const numberReadPage = Number(readPage);
// //     const finished = numberPageCount === numberReadPage ? true : false;
// //     const insertedAt = new Date().toISOString();
// //     const updatedAt = insertedAt;

// //     if (!name) {
// //       const response = h.response({
// //         status: 'fail',
// //         message: 'Gagal menambahkan buku. Mohon isi nama buku',
// //       });

// //       response.code(400);
// //       return response;
// //     }
// //     if (numberReadPage > numberPageCount) {
// //       const response = h.response({
// //         status: 'fail',
// //         message:
// //                   'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
// //       });
// //       response.code(400);
// //       return response;
// //     }
// //     const newBook = {
// //       id,
// //       name,
// //       year: numberYear,
// //       author,
// //       summary,
// //       publisher,
// //       pageCount: numberPageCount,
// //       readPage: numberReadPage,
// //       finished,
// //       reading,
// //       insertedAt,
// //       updatedAt,
// //     };

// //     books.push(newBook);
// //     const response = h.response({
// //       status: 'success',
// //       message: 'Buku berhasil ditambahkan',
// //       data: {
// //         bookId: newBook.id,
// //       },
// //     });

// //     response.code(201);
// //     return response;
// //   } catch (error) {
// //     return h.response(error.message).code(500);
// //   }
// // };


// export const editBook = (request, h) => {
//   try {
//     const { bookId } = request.params;
//     const {
//       name,
//       year,
//       author,
//       summary,
//       publisher,
//       pageCount,
//       readPage,
//       reading,
//     } = request.payload;

//     const numberYear = Number(year);
//     const numberPageCount = Number(pageCount);
//     const numberReadPage = Number(readPage);

//     const data = books.filter((item) => item.id === bookId);
//     if (data.length > 0) {
//       if (!name) {
//         const response = h.response({
//           status: 'fail',
//           message: 'Gagal memperbarui buku. Mohon isi nama buku',
//         });

//         response.code(400);
//         return response;
//       }

//       if (numberReadPage > numberPageCount) {
//         const response = h.response({
//           status: 'fail',
//           message:
//                       'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
//         });
//         response.code(400);
//         return response;
//       }

//       data[0].name = name;
//       data[0].year = numberYear;
//       data[0].author = author;
//       data[0].summary = summary;
//       data[0].publisher = publisher;
//       data[0].pageCount = numberPageCount;
//       data[0].readPage = numberReadPage;
//       data[0].reading = reading;

//       const response = h
//         .response({
//           status: 'success',
//           message: 'Buku berhasil diperbarui',
//         })
//         .code(200);
//       return response;
//     } else {
//       const response = h.response({
//         status: 'fail',
//         message: 'Gagal memperbarui buku. Id tidak ditemukan',
//       });

//       response.code(404);
//       return response;
//     }
//   } catch (error) {
//     return h.response(error.message).code(500);
//   }
// };