const dbBooks = require('../database');

const deleteBooks = (request, h) => {
  const { id } = request.params;

  const index = dbBooks.findIndex((book) => book.id === id);

  if (index !== -1) {
    dbBooks.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan'
  });
  response.code(404);
  return response;
};

module.exports = deleteBooks;
