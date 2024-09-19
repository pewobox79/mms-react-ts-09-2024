import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function QueryExercise() {
    console.log("Query exercise")

    const URL = 'https://jsonplaceholder.typicode.com/posts';


    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            try {
                return await axios.get(URL)
            } catch (err) {
                console.log("error", err)
            }
        }
    })

    return (
        <div>QueryExercise
            <button onClick={() => refetch}>refetch</button><br />
            {isLoading ? <h2>is loading...</h2> : JSON.stringify(data)}
        </div>
    )
}

export default QueryExercise