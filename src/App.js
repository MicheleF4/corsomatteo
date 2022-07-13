import React, { useState, useEffect } from "react";

/*COMPONENTS*/
import Loading from "./components/Loading.component";
import Header from "./components/Header.component";
import Hero from "./components/Hero.component";
import CardAlunni from "./components/CardAlunni.component";

import "./App.css";

/*DATA*/
import listLinkData from "./components/listLinkData";
import listCorsiData from "./components/listCorsiData";
import listAlunniData from "./components/listAlunniData";
const url = "http://localhost:8082/user/getAll";

function App() {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);

  const fetchUserList = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const userListLoaded = await response.json();
      setLoading(false);
      setUserList(userListLoaded);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="container">
        <Header data={listLinkData} data2={listCorsiData} />
        <Hero />
        <CardAlunni alunniData={listAlunniData} userList={userList} />
      </div>
    );
  }
}

export default App;
