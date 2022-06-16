


function ResultatsTest({ resultats, userId }) {


    const filterResultats = resultats.filter((data) => {
        return data.owner === userId
    })


    return (
        <section className="users">
            {filterResultats.map(resultat => {
                return (
                    <div className="user" key={resultat._id}>
                        <div className="user__info">
                            <div className="user__name">{resultat.nameTest}</div>
                            <div className="user__name">{resultat.resultat}</div>
                        </div>
                    </div>)
            })}
        </section>
    );
}

export default ResultatsTest;