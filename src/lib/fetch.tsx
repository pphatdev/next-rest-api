export const fetchData = async (params: string) => {
    return fetch(`${params || ''}`, { mode: 'same-origin' })
    .then((res) => res.json())
    .catch(e=> console.log(e))
}