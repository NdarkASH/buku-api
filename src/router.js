const addBooks  = require('./handler/addBooks');
const allBooks = require('./handler/allBooks');
const deleteBooks = require('./handler/deleteBooks');
const detailBook = require('./handler/detailBooks');
const editBooks = require('./handler/editBooks');
const { base, baseWithParams } = require('./constanta');
const routers = [
  {
    method: 'POST',
    path: base,
    handler: addBooks,
  },
  {
    method: 'GET',
    path: base,
    handler: allBooks,
  },
  {
    method: 'GET',
    path: baseWithParams,
    handler: detailBook,
  },
  {
    method: 'PUT',
    path: baseWithParams,
    handler: editBooks,
  },
  {
    method: 'DELETE',
    path: baseWithParams,
    handler: deleteBooks,
  },
];

module.exports = routers;