const dbBooks = require('../database');
const { nanoid } = require('nanoid');


const addBooks = (request, h) => {
  try {
    const {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
    } = request.payload;

    const id = nanoid(16);
    const numberYear = Number(year);
    const numberPageCount = Number(pageCount);
    const numberReadPage = Number(readPage);
    const finished = numberPageCount === numberReadPage ? true : false;
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    if (!name) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      });

      response.code(400);
      return response;
    }
    if (numberReadPage > numberPageCount) {
      const response = h.response({
        status: 'fail',
        message:
                  'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      });
      response.code(400);
      return response;
    }
    const newBook = {
      id,
      name,
      year: numberYear,
      author,
      summary,
      publisher,
      pageCount: numberPageCount,
      readPage: numberReadPage,
      finished,
      reading,
      insertedAt,
      updatedAt,
    };

    dbBooks.push(newBook);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: newBook.id,
      },
    });

    response.code(201);
    return response;
  } catch (error) {
    return h.response(error.message).code(500);
  }
};



module.exports = addBooks;