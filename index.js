// code your solution here

function superbowlWin(record) {
    for (let i = 0; i < record.length; i++) {
      if (record[i].team === "Denver Broncos" && record[i].result === "W") {
        return record[i].year;
      }
    }
    return undefined;
  }
  
 
  const records = [
    { team: "Denver Broncos", year: 1998, result: "W" },
    { team: "Denver Broncos", year: 1999, result: "W" },
    { team: "Denver Broncos", year: 2016, result: "W" },
    { team: "New England Patriots", year: 2017, result: "W" }
  ];
  
  console.log(superbowlWin(records));
  
  
  console.log(superbowlWin([]));
 
  
  console.log(superbowlWin([{ team: "New England Patriots", year: 2017, result: "W" }]));
  
  