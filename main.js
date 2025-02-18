const numbers= [100, 200, 400, 600] ;
Totalnumbers = numbers[0]  + numbers[1] + numbers[2] + numbers[3];
console.log ("Array sum = " + Totalnumbers);

const book = {
  author: "George Orwell",
  title: "Animal farm",
  yearPublished: 1945,
};

 books =  book.title + " by " + book.author + " was published in " + book.yearPublished;

console.log (books)

book.yearPublished = 1950;

 books =  book.title + " by " + book.author + " was published in " + book.yearPublished;

console.log ( "Changed value = " + books)


const electronic1 = {
	isavailable: "yes",
	productname: "phone",
	price: "200$",
};

const electronic2 = {
	isavailable: "no",
	productname: "TV",
	price: "800$",
};

const electronic3 = {
	isavailable: "yes",
	productname: "computer",
	price: "500$",
};
const electronics= [electronic1, electronic2, electronic3] ;
console.log (electronics)