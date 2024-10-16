const dbBooks = require('../database');
const editBook = (request, h) => {
  const { id } = request.params;
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

  const numberYear = Number(year);
  const numberPageCount = Number(pageCount);
  const numberReadPage = Number(readPage);

  const data = dbBooks.filter((item) => item.id === id);
  if (data.length > 0) {
    if (!name) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      });

      response.code(400);
      return response;
    }

    if (numberReadPage > numberPageCount) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      });
      response.code(400);
      return response;
    }

    data[0].name = name;
    data[0].year = numberYear;
    data[0].author = author;
    data[0].summary = summary;
    data[0].publisher = publisher;
    data[0].pageCount = numberPageCount;
    data[0].readPage = numberReadPage;
    data[0].reading = reading;

    const response = h
      .response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
      })
      .code(200);
    return response;
  } else {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });

    response.code(404);
    return response;
  }
};

module.exports = editBook;