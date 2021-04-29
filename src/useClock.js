import {useEffect, useState} from "react";
import getTimeByCity from './services/getTimeByCity'

const useClock = (city = 'london') => {
    const [time, setTime] = useState(getTimeByCity(city));

    useEffect(() => {
        const id = setInterval(() => {
            setTime(() => getTimeByCity(city));
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return time;
}

export default useClock;
