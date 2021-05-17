export function roundTemp(temp) {
  const rounded = Math.floor(temp);
  return rounded;
}

export function convertDate(dt) {
  const newDate = new Date(dt * 1000);
  console.log('convertDate -> newDate', newDate);

  const month = newDate.toLocaleString('default', { month: 'long' });

  // console.log("convertDate -> month", month)

  const day = newDate.getDate();

  const year = newDate.getFullYear();

  const fullDate = `${day}, ${month} ${year}`;

  console.log('convertDate -> fullDate', fullDate);
  return fullDate;
}

export function showIcon(id) {
  if (id >= 200 && id < 300) {
    return <i className='wi wi-thunderstorm display-1' />;
  }
  if (id >= 300 && id < 400) {
    return <i className='"wi wi-sleet display-1"' />;
  }
  if (id >= 500 && id < 600) {
    return <i className='wi wi-storm-showers display-1' />;
  }

  if (id >= 600 && id < 700) {
    return <i className='wi wi-snow display-1' />;
  }

  if (id >= 700 && id < 800) {
    return <i className='wi wi-fog display-1' />;
  }
  if (id === 800) {
    return <i className='wi wi-day-sunny display-1' />;
  }
  return <i className='wi wi-day-fog display-1' />;
}
