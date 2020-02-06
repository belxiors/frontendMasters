var favoriteBooks = [];

function addFavoriteBook(bookName) {
  if (!bookName.includes('Great')) {
      favoriteBooks.push(bookName);
  }
}

function printFavoriteBooks() {
  console.log(`Favorite books: ${favoriteBooks.length}`);
  favoriteBooks.forEach(favoriteBook => console.log(favoriteBook));
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
printFavoriteBooks();
