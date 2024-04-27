export const fetchData = async (params: string) => {
    return fetch(`${params || ''}`)
    .then((res) => res.json())
    .catch(e=> console.log(e))
}