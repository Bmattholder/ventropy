import React, { useState, useEffect } from 'react';

function WeatherLocation() {
  const [locationInfo, setLocationInfo] = useState('');
  const [currentResults, setCurrentResults] = useState({
    temp: '',
    conditions: '',
    location: '',
  });

  const { temp, conditions, location } = currentResults;

  function onChange(e) {
    setLocationInfo(e.target.value);
  }

  useEffect(() => {
    if (locationInfo) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInfo}&appid=YOUR_API_KEY`)
        .then((res) => res.json())
        .then((data) =>
          setCurrentResults({
            temp: `${(data.main.temp - 273.15).toFixed(2)}°C`,
            conditions: data.weather[0].description,
            location: data.name,
          })
        )
        .catch((err) => console.log(err));
    }
  }, [locationInfo]);

  return (
    <>
      <section className='heading'>Weather Locator</section>
      <div className='form'>
        <form>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='search'
              id='search'
              value={locationInfo}
              onChange={onChange}
              placeholder='Enter a location'
              required
            />
          </div>
          <button className='btn btn-block'>Search</button>
        </form>
      </div>

      {temp ? (
        <>
          <h2>{temp}</h2>
          <p>{conditions}</p>
          <p>{location}</p>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default WeatherLocation;
