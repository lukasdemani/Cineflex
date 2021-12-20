import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';

import Footer from './Footer';

export default function Schedule(props) {
    const { idMovie } = useParams();
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        const require = axios.get(
          `https://mock-api.driven.com.br/api/v4/cineflex/movies/${idMovie}/showtimes`
        );
    
        require.then((answer) => {
            setSchedule(answer.data.days);
        });
      }, []);

    function setFilmDay(time, day, weekDay) {
        props.time(time);
        props.day(day);
        props.weekDay(weekDay);
    }

    return (
        <Container>
            <h1>Selecione o horário</h1>
            {schedule.map((day) => (
                <Day>
                    <p>{day.weekday} - {day.date}</p>
                    <Buttons>
                        {day.showtimes.map((s) => (
                            <Link to= {`/assentos/${s.id}`}>
                                <button onClick={() => setFilmDay(s.name, day.date, day.weekday)}>{s.name}</button>
                            </Link>
                            ))}
                    </Buttons>
                </Day>
            ))}
            <Footer poster={props.poster} movieName={props.movieName}></Footer>
        </Container>
    )
}

const Container = styled.div `
    position: relative;
    h1{
        width: 100%;
        height: 110px;
        font-size: 24px;
        text-align: center;
        box-sizing: border-box;
        padding-top: 50px;
        font-weight: 400;
    }
`
const Day = styled.div `
    width: 100%;
    height: 110px;
    font-size: 20px;
    margin-left: 24px;
`

const Buttons = styled.div `
    width: 100%;
    height: 20px;
    display: flex;
    gap: 8px;
    margin-top: 22px;

    button {
        width: 82px;
        height: 43px;
        color: #FFFFFF;
        background-color: #E8833A;
        border-radius: 3px;
        font-size: 18px;
        border: none;
    }
`
