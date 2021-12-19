import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function BookMany() {
    const { id } = useParams();
    const [seatsArray, setSeatsArray] = useState([]);

    useEffect(() => {
        const require = axios.post(
          `https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many`
        );
    
        require.then((answer) => {
           console.log('ok');
        });
      }, []);

    return (
        <div>
            oi
        </div>
    );
}