import React, { useEffect, useState } from "react";
const Airtable = require('airtable');

const base = new Airtable({apiKey:'keyE5HXx3pdspfEF6'}).base('appxK2lvS7XfyAeXw')

function App() {
  const [goals,setGoals] = useState([])
  const [updates,setUpdates] = useState([])

  useEffect(() => {
    base("goals")
    .select({view:"Grid view"})
    .eachPage((records,fetchNextPage)=>{
      setGoals(records)
      fetchNextPage();
    })
    base("updates")
    .select({view:"Grid view"})
    .eachPage((records,fetchNextPage)=>{
      setUpdates(records)
      fetchNextPage();
    })
  }, [])


  return (
    <div className="App">
    <h1>Basha</h1>
    </div>
  );

  }
export default App;
