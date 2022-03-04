

function Testing({data}) {

    let questions = data.questions;

    questions = questions.map(function(el, i) {
        return <h3>{el.title}</h3>
    })
  
    return (
        <section className="testing">
            <div className="testing__title">{data.testName}</div>
            {questions}
        </section>
    );
}

export default Testing;