import { useState, useEffect } from "react"; //importação de dependencias desejadas

// 4 - Custom hook

export const useFetch = (url) => { //fnção ja com o export para posteriormente aplicar no
    const [data, setData] = useState(null);

    // 5 - Refatorando o post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    const httpConfig = (data, method) => {
        if(method === 'POST') {
            setConfig({
                method, 
                hraders: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            setMethod(method);
        }
    };

    useEffect(() => {

        const fetchData = async () => {

            const res = await fetch(url);

            const json = await res.json();

            setData(json);
        };

        fetchData();
    }, [url, callFetch]);

    // 5 - refatorando o POST
    useEffect(() => {
        const httpRequest = async () => {
            if (method === 'POST') {
                let fetchOptions = [url, config];
    
                const res = await fetch(...fetchOptions);
    
                const json = await res.json();
    
    
    
                setCallFetch(json);
            }
        }
        httpRequest();
    }, [config, method, url]);

    return { data, httpConfig }; // retorno que posteriormente será aplicado no componente desejado
};