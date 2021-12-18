import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Schedule() {
    const { idMovie } = useParams();
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        const require = axios.get(
          `https://mock-api.driven.com.br/api/v4/cineflex/movies/${idMovie}/showtimes`
        );
    
        require.then((answer) => {
            console.log(answer.data);
            setSchedule(answer.data.days);
        });
      }, []);

    return (
        <div>
            {schedule.map((day) => (
                <div>
                    {day.weekday}
                    {day.date}
                    {day.showtimes.map((s) => (
                        <Link to= {'/assentos'}>
                            <button>{s.name}</button>
                        </Link>
                        ))}
                </div>
            ))}
        </div>
    )
}