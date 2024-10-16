const dbBooks = require('../database');
const allBooks = (request, h) => {
  const { name, reading, finished } = request.query;

  if (name) {
    const lowName = name.toLowerCase();
    const filterBooks = dbBooks.filter((n) => n.name === lowName);
    const response = h.response({
      status: 'success',
      data: {
        books: filterBooks.map((books) => ({
          id: books.id,
          name: books.name,
          publisher: books.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }

  if (reading !== undefined) {
    const isReading = reading === '1';
    const filteredBooks = dbBooks.filter((r) => r.reading === isReading);

    const response = h.response({
      status: 'success',
      data: {
        books: filteredBooks.map((books) => ({
          id: books.id,
          name: books.name,
          publisher: books.publisher,
        }))
      }
    });
    response.code(200);
    return response;
  }

  // if (reading === '0') {
  //   const filteredBooks = dbBooks.filter((r) => r.reading === false);

  //   const response = h.response({
  //     status: 'success',
  //     data: {
  //       books: filteredBooks.map((books) => ({
  //         id: books.id,
  //         name: books.name,
  //         publisher: books.publisher,
  //       }))
  //     }
  //   });
  //   response.code(200);
  //   return response;
  // }

  if (finished !== undefined) {
    const isFinished = finished === '1';
    const filteredBooks = dbBooks.filter((f) => f.reading === isFinished);

    const response = h.response({
      data: {
        books: filteredBooks.map((books) => ({
          id: books.id,
          name: books.name,
          publisher: books.publisher,
        }))
      }
    });
    response.code(200);
    return response;
  }

  // if (finished === '0') {
  //   const filteredBooks = dbBooks.filter((f) => f.reading === false);

  //   const response = h.response({
  //     data: {
  //       books: filteredBooks.map((books) => ({
  //         id: books.id,
  //         name: books.name,
  //         publisher: books.publisher,
  //       }))
  //     }
  //   });
  //   response.code(200);
  //   return response;
  // }

  const response = h.response({
    status: 'success',
    data: {
      books: dbBooks.map((m) => ({
        id: m.id,
        name: m.name,
        publisher: m.publisher
      }))
    }
  });
  response.code(200);
  return response;

};

module.exports = allBooks;

