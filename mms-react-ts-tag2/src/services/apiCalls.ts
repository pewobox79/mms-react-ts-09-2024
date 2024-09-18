export async function fetchData() {

    try {
        const response = await fetch('https://jsonplaceholder.tyode.com/posts')
        return await response.json()

    } catch (err) {
        console.log("err", err)
        return "failed to fetch"
    }
}
