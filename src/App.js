import React, { useEffect } from 'react';
import Airtable from 'airtable' //00 import airtable

const base = new Airtable({apiKey:"keyE5HXx3pdspfEF6"}).base('appxK2lvS7XfyAeXw') //01 get apiKey and base name from airtable.com/api

function App() {

                                              //02 bring data from Airtable
  useEffect(() => {                           //03 useEffect to run this in initial render
    base("goals")                             //04 identify which table to bring in
      .select({ view : "Grid view" })         //05 select views will filter out different things(default: grid view)
      .eachPage((records, fetchNextPage)=>{   //06 eachPage:pagination is incorporated brings in records and fetchNextPage:if multiple pages
        console.log(records);
        fetchNextPage();                      //07 will go on to the next page if theres multiple pages
      })
  }, [])

  return (
    <div className="App">
    

    </div>
  );
}

export default App;
