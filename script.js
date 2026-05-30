let data, info;

async function init(){  
  let link = "squirrel.json";
  info = await fetch(link);
  data = await info.json();


  output = document.getElementById("output");
  result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let census = data[i];
    build += `<div class="fitted card">
                 <h3>${census.age}</h3>
                 <hr>
                 <p>${census.location}</p>
                 <p>${census.primary_fur_color}</p>
                 <p>${census.highlight_fur_color}</p>
                 <hr>
                 <p>${census.unique_squirrel_id}</p>
                 <hr>
                 <p>${census.shift}</p>
              </div>`;
    ct++;
  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;

  //Filling Dropdown Menus
  let complaint_types = fillDropDown("complaint_type");
  document.getElementById("complaint_types").innerHTML = complaint_types;

  let descriptors = fillDropDown("descriptor");
  document.getElementById("descriptors").innerHTML = descriptors;

  let agencies = fillDropDown("agency_name");
  document.getElementById("agencies").innerHTML = agencies;  
}

function filterByAge(){
  let age = document.getElementById("age").value;
  let agency = document.getElementById("agencies").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let census = data[i];
    if(census.age == age && census.shift == shift){
      build += `<div class="fitted card">
                    <h3>${complaint.age}</h3>
                    <hr>
                    <p>${complaint.location}</p>
                    <p>${complaint.primary_fur_color}</p>
                    <p>${complaint.highlight_fur_color}</p>
                    <hr>
                    <p>${complaint.unique_squirrel_id}</p>
                    <hr>
                    <p>${complaint.shift}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;
}