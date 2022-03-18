

function Books({ bookList, decorationComponent }) {
    return <div>
        {bookList.map((bookTitle, index) => {
            return (
                <li key={`Booktitle ${index}`}>{bookTitle}</li>)
        })}
    </div>
}

export default Books;