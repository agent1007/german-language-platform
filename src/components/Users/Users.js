import User from '../User/User';


function Users({ users, setUserId, loggedIn }) {


    return (
        <section className="users">
            {loggedIn ? (
                users.map(user => {
                    return (<User
                        key={user._id}
                        user={user}
                        setUserId={setUserId}
                    />)
                })) : (
                <div className="user__loggedIn">Чтобы видеть всех зарегистрированных пользователей необходимо зарегистрироваться.</div>
            )}
        </section>
    );
}

export default Users;