export const getUser = async (params: string) => {
    return fetch(`http://localhost:3000/api/v1/${params || ''}`)
    .then((res) => res.json())
    .catch(e=> console.log(e))
}