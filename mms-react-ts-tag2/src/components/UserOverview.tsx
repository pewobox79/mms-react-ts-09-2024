import { useFetch } from '../hooks/useFetch'

function UserOverview() {

    const URL = 'https://jsonplaceholder.typicode.com/users'

    const { data = [], isLoading, error } = useFetch(URL);

    const UserList = data?.map((user: { id: number, username: string }) => {

        return <div key={user.id}>{user.username}</div>
    })

    return (
        <div><h4>UserList</h4>
            {isLoading ? <div>data is loading...</div> : UserList}
            {error && <div>Error happend: {error}</div>}
        </div>
    )
}

export default UserOverview