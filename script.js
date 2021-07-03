var data = [
  {
      "page": "1",
      "name": "dfsgfdg",
      "email": "Xghjhgjghjer@yahoo.com"
  },
  {
      "page": "2",
      "name": "tyutyutyurty",
      "email": "ghjghjghjghj11@gmail.com"
  },
  {
      "page": "3",
      "name": "Tjghjghjghjn",
      "email": "ghjghjghjghjhghh@gmail.com"
  },
  {
      "page": "4",
      "name": "y45y54yrtyrt",
      "email": "rtyrtyrtyrtyrt@gmail.com"
  },
  {
      "page": "5",
      "name": "ergytyryyrty",
      "email": "rtyrtyrtyrty@hotmail.com"
  },
  {
      "page": "6",
      "name": "tretreterter",
      "email": "tyryrtyrtyrtytry@gmail.com"
  },
  {
      "page": "7",
      "name": "grdgtertert",
      "email": "ggrtytrhyrthrth.com"
  },
  {
      "page": "8",
      "name": "hgrtrtyrty",
      "email": "fdgtyryrtyrtyrt.com"
  },
  {
      "page": "9",
      "name": "54t4ryrtyrty",
      "email": "tryrtyrtyrtyrt.com"
  },
  {
      "page": "10",
      "name": "tyrtyrtyrty",
      "email": "rtyrtyrtyrt.com"
  },

];

function displaydata(min, max) {
  const div1 = document.querySelector("#divide1");
  div1.innerHTML="";
  const table = document.createElement("table")
  for (i = min; i <= max; i++) {
      var tr = document.createElement("tr");
      var td = document.createElement("td");
      td.innerHTML = data[i].page;
      tr.append(td)
      var td = document.createElement("td");
      td.innerHTML = data[i].name;
      tr.append(td)
      var td = document.createElement("td");
      td.innerHTML = data[i].email;
      tr.append(td)
      table.append(tr)
  }
  div1.append(table);
}
var buttons = ``
var min = 0;
var max = 1; 
for (i = 1; i <= data.length / 2; i++) {
  buttons += `<button onclick="displaydata(${min},${max})">${i}</button>`;
  min += 2
  max += 2
}
console.log(buttons)
const div = document.querySelector("#divide")
div.innerHTML = buttons;