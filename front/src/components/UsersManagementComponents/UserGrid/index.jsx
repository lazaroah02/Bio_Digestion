import './index.css'

function UsersGrid({users}) {
    return ( 
        <section className = "users-grid">
            {users.map((user) => 
                <article key = {user.id} className = "user-card">
                </article>
            )}
        </section>
     );
}

export default UsersGrid;