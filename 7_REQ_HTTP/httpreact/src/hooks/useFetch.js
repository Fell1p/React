import { useState, useEffect } from "react"; //importação de dependencias desejadas

// 4 - Custom hook

export const useFetch = (url) => { //fnção ja com o export para posteriormente aplicar no
    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            const res = await fetch(url);

            const json = await res.json();

            setData(json);
        };

        fetchData();
    }, [url]);

    return { data }; // retorno que posteriormente será aplicado no componente desejado
};