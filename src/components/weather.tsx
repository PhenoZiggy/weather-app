import { getIcon, getWeather } from "@/pages/api/weather";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const [query, setQuery] = useState<string>("");
  const [currentWeather, setCurrentWeather] = useState<any>();
  const [icon, setIcon] = useState();
  const getWeatherByLocation = async (e: any) => {
    e.preventDefault();
    await getWeather(query).then(async (res) => {
      if (res.status === 200) {
        setCurrentWeather(res.data);
        // await getIcon("04d").then((response) => {
        //   const base64 = btoa(
        //     new Uint8Array(response.data).reduce(
        //       (data, byte) => data + string.fromcharcode(byte),
        //       ""
        //     )
        //   );
        //   console.log(base64);
        //   setIcon(base64);
        // });
      }
    });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          getWeatherByLocation(e);
        }}
      >
        <input type="text" onChange={(e) => setQuery(e.target.value)}></input>
        <button type="submit">Search</button>
      </form>
      <>
        <div className="card bg-purple-500 text-white w-[220px] h-[350px] flex flex-col justify-center items-center mt-10">
          <h4 className="text-2xl">{currentWeather?.name}</h4>
          {/* <img src={`data:;base64,${icon}`} alt="" className="w-[150px]" /> */}
          <h2 className="text-5xl font-bold mb-2">
            {currentWeather?.main?.temp}
          </h2>
          <p>{currentWeather?.weather[0]?.main}</p>
        </div>
      </>
    </div>
  );
};

export default Weather;
