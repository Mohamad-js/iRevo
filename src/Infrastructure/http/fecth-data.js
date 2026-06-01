

export const fetchFromServer = async (url, path) => {

   const response = await fetch(`${url}${path}`, { cache: 'no-store' })

   if (!response.ok) throw new Error('HTTP Error:', response.statusText)

   return response.json()
}