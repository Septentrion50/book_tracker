import books from './books.json'

const search =(query) => {
    const result = books.books[0].filter(book => {
        try {
            return book.title.toLowerCase().includes(query.toLowerCase()) || book.shortDescription.toLowerCase().includes(query.toLowerCase());
        } catch (error) {
            return book.title.toLowerCase().includes(query.toLowerCase());
        };
    });
    return result;
}

export default search;