import { useEffect,useState } from "react";

function useCurrency_info(Currency){

    

    const [data,setData] = useState({})

    useEffect(()=>{
       
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${Currency}.json`)
        .then((res)=>{
            return res.json();
            
        })
        .then((res)=>{
            
            setData(res[Currency]);
        })
    },[Currency]);

    

    return data;
}

export default useCurrency_info;