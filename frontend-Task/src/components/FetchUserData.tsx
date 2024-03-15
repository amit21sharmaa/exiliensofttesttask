import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../action/action';
import { useState } from 'react';

const FetchUserData = () => {
    const [userData, setUserData] = useState();
    const dispatch = useDispatch();
    function fetchFromAPI(endpoint:string) {
    const cachedData = localStorage.getItem(endpoint);

    if (cachedData) {
        return Promise.resolve(JSON.parse(cachedData));
    } else {
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
                // data which is fetched is now being stored in cache
                localStorage.setItem(endpoint, JSON.stringify(data));
                return data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                throw error;
            });
        }
    }

    const endpoint = `https://jsonplaceholder.typicode.com/users`;

    fetchFromAPI(endpoint)
        .then(data => {
            setUserData(data)
            if(userData){
                dispatch(fetchDataRequest(userData))
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

    const userDataRedux : Array<Object> = useSelector((state:any) => state.dataState.data);

    return (
        <div>
            {userDataRedux.length>0 ? userDataRedux.map((item:any, index:number) => {
                return <div key={index}>{item.name}</div>
            })
            :
            <div>Loading...</div>}
        </div>
    )
}

export default FetchUserData;
