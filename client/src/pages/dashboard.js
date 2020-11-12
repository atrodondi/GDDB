import React, { useState } from "react";
import Navbar from "../components/navbar/navbar";
import DoorCard from "../components/doorCard/doorCard";

export default function Dashboard(props) {
  const [chiDoors, setchiDoors] = useState([]);

  const getCHI = (chiDoors) => {
    setchiDoors(chiDoors);
  };
  return (
    <div>
      <Navbar
        getCHI={getCHI}
        getCookie={props.getCookie}
        login={props.login}
        logout={props.logout}
        loggedIn={props.loggedIn}
      ></Navbar>
      <div className='w-100 mt-5'>
        {chiDoors.map((door) => {
          return <DoorCard {...door} key={door._id} />;
        })}
      </div>
    </div>
  );
}
