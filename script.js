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



function filterByFur(){
  let age = document.getElementById("age").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let census = data[i];
    if(census.age == age && census.shift == shift){
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
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;
}}

function filterByAge(){
  let age = document.getElementById("age").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let census = data[i];
    if(census.age == age || census.shift == shift){
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
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;
}