import {useEffect, useState} from "react";

const HelloComponent = () => {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        const fetchHello = async () => {
            try {
                const response = await fetch("http://localhost:8000/hello");
                if(response.ok){
                    const data = await response.json();
                    setMessage(data.message);
                }else {
                    setMessage("fail to fetch message");
                }
            }catch(error){
                setMessage("error to fetch message : ", error);
            }
        };
        fetchHello();
    }, []);

    return(
        <div style={{ padding : "20px", fontFamily: "Arial, sans-serif"}}>
            <h1>Hello from FASTAPI</h1>
            <p>{message}</p>
        </div>
    );
};

export default HelloComponent;