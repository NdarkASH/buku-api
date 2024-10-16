const dbBooks = require('../database');

const detailBook = (request, h) => {
  try {
    const { id } = request.params;

    const data = dbBooks.filter((buku) => buku.id === id);
    if (data.length > 0) {
      const response = h.response({
        status: 'success',
        data: {
          book: data[0],
        },
      });

      response.code(200);
      return response;
    }

    const response = h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    });

    response.code(404);
    return response;
  } catch (error) {
    return h.response(error.message).code(500);
  }
};

module.exports = detailBook;