import AnswerItem from "./AnswerItem";


function ShowQuestion() {
    return (
        <section>
            <h2>kérdés ph</h2>
            <AnswerItem index={1} content= "Válasz 1 ph"/>
            <AnswerItem index={2} content= "Válasz 2 ph"/>
            <AnswerItem index={3} content= "Válasz 3 ph"/>
        </section>
    )
}

export default ShowQuestion;