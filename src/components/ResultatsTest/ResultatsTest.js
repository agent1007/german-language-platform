


function ResultatsTest({ resultats, users }) {


    const filterResultats = resultats.filter((data) => { 
        // console.log(data.owner)
        // console.log(users._id)
        return data.owner === users._id })


    return (
        <section className="users">
            {filterResultats.map(resultat => {
                return (
                    <div className="user" key={resultat._id}>
                        <div className="user__info">
                            <div className="user__name">{resultat.nameTest}</div>
                            <div className="user__name">{resultat.nameUser}</div>
                            <div className="user__name">{resultat.resultat}</div>
                        </div>
                    </div>)
            })}
        </section>
    );
}

export default ResultatsTest;