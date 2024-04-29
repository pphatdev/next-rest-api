export const fetchData = async (params: string) => {
    return fetch(`${params || ''}`, { mode: 'no-cors' })
    .then((res) => res.json())
    .catch(e=> console.log(e))
}