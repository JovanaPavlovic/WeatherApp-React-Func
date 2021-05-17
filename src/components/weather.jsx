import React, { useState, useEffect } from 'react';
import { getWeather } from '../services/weatherService';
import {
    roundTemp,
    convertDate,
    showIcon,
} from '../functions/weatherFunctions';

function Weather() {
    const [hasLoaded, setLoaded] = useState(false);

    // const [city, setCity] = useState("Niš");

    const [daily, setDaily] = useState([]);
    const [today, setToday] = useState({});

    const populateState = async () => {
        const data = await getWeather();
        const allDays = data.weatherObject.daily;

        // console.log(allDays);

        const [firstDay, ...rest] = allDays;

        // console.log(firstDay);

        allDays.shift();
        allDays.pop();
        setDaily(allDays);
        setToday(firstDay);
        setLoaded(true);
    };

    useEffect(() => {
        populateState();
    }, []);

    // console.log('render');

    return (
        <div className='container'>
            <div className='row card-row'>
                <div className='card card-1 col-sm-12 mb-2 mr-0'>
                    <div className='card-body bg-info'>
                        {hasLoaded && (
                            <h5 className='card-text py-2'>
                                {convertDate(today.dt)}
                            </h5>
                        )}
                        <div className='weatherIcon py-4'>
                            {hasLoaded && showIcon(today.weather[0].id)}
                        </div>

                        <div>
                            {hasLoaded && (
                                <h4 className='py-3'>
                                    {today.weather[0].main}
                                </h4>
                            )}
                        </div>

                        {hasLoaded && (
                            <h3 className='card-text py-3'>
                                {roundTemp(today.temp.day)}&deg;C
                            </h3>
                        )}
                        <div>
                            <span className='px-5'>
                                {hasLoaded && (
                                    <h5>
                                        Min {roundTemp(today.temp.min)}&deg;C
                                    </h5>
                                )}
                                {hasLoaded && (
                                    <h5>
                                        Max {roundTemp(today.temp.max)}&deg;C
                                    </h5>
                                )}
                            </span>
                        </div>
                    </div>
                </div>

                {daily.map((day) => (
                    <div className='card  mb-3 col-sm-6 mb-2 mr-0'>
                        <div className='card-body bg-info'>
                            <h5 className='card-text py-2'>
                                {convertDate(day.dt)}
                            </h5>
                            <div className='weatherIcon py-4'>
                                {showIcon(day.weather[0].id)}
                            </div>
                            <h4 className='py-3'>{day.weather[0].main}</h4>
                            <div>
                                <h3 className='card-text py-2'>
                                    {roundTemp(day.temp.day)}&deg;C
                                </h3>
                                <div>
                                    <span className='px-3'>
                                        <h5>
                                            Min {roundTemp(day.temp.min)}&deg;C
                                        </h5>
                                        <h5>
                                            Max {roundTemp(day.temp.max)}&deg;C
                                        </h5>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Weather;
