const endpoint = `https://api.escuelajs.co/api/v1/products?offset=0&limit=10`;


function fetchFromAPI(endpoint:string) {
    const cachedData = localStorage.getItem(endpoint);
  
    if (cachedData) {
        // Data found in cache, return it
        return Promise.resolve(JSON.parse(cachedData));
    } else {
        // Data not found in cache, fetch from API
        return fetch(endpoint,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          //   'Authorization': `Bearer ${token}`,
          }})
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error in response');
                }
                return response.json();
            })
            .then(data => {
                // Store fetched data in cache
                localStorage.setItem(endpoint, JSON.stringify(data));
                return data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                throw error;
            });
    }
  }
  
  
  
  
export function fetchData() {
     fetchFromAPI(endpoint)
    .then(data => {
        console.log('Data from API:', data);
        return data;
    })
    .catch(error => {
        console.error('Error:', error);
        return error;
    });

}