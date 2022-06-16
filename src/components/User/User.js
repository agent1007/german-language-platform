import { Link } from 'react-router-dom';

function User({ user, setUserId }) {

    const choiceResponse = () => {
        setUserId(user._id)
    }
    return (
        <div className="user">
            <img className="user__avatar" src={user.avatar} alt="Аватар." />
            <div className="user__info">
                <div className="user__name">{user.name}</div>
                <Link to="/resultats" className="user__resultats" onClick={choiceResponse}>Результаты тестов</Link>
            </div>
        </div>
    );
}

export default User;