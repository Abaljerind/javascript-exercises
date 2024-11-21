const getTheTitles = function (obj) {
  let bookTitle = [];
  for (const title of obj) {
    bookTitle.push(title.title);
  }

  return bookTitle;
};

const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
