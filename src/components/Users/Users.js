import User from '../User/User';


function Users({users}) {
    console.log(users)

    return (
        <section className="users">
            {users.map(user => {
                return (<User
                    key={user._id}
                    user={user}
                />)
            })}
        </section>
    );
}

export default Users;