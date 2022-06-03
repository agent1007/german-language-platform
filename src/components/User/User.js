import { Link } from 'react-router-dom';

function Users({ user }) {


    return (
        <div className="user">
            <img className="user__avatar" src={user.avatar} alt="Красотка." />
            <div className="user__info">
                <div className="user__name">{user.name}</div>
                <Link to="/resultats" className="user__resultats">Результаты тестов</Link>
            </div>
        </div>
    );
}

export default Users;