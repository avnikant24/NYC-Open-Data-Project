let data, info, output; 

async function init(){  
  let link = "squirrel.json"; 
  info = await fetch(link);
  data = await info.json();
  console.log(data);


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
}


function filterbyFur(){
  let age = document.getElementById("fur").value;
  let build = "";
  let ct = 0;
    
  for(let i = 0; i < data.length; i+=1){
    let census = data[i];
    if(census.primary_fur_color == age || census.primary_fur_color == age){
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

function filterbyAge(){
  let age = document.getElementById("age").value;
  let build = "";
  let ct = 0;

   for(let i = 0; i < data.length; i+=1){
    let census = data[i];
    if(census.age == age || census.age == age){
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

function squirrelsByColor(){
  let g = 0, c = 0, b = 0;
  for(let i = 0; i < data.length; i++){
    let census = data[i];
    if(census.primary_fur_color == "Gray"){
      g++;
    }else if(census.primary_fur_color == "Cinnamon"){
      c++;
    }else if(census.primary_fur_color == "Black"){
      b++;
    }
  }

    let chartData = [
    ["Gray", g],
    ["Cinnamon",c],
    ["Black", b]
  ];

   let chartType = get("chartType").value;  

  displayChart(chartData,"chart",chartType)
}

function squirrelsByLocation(){
  let gp = 0; ag = 0;
  for(let i = 0; i < data.length; i++){
    let census = data[i];
    if(census.location == "Ground Plane"){
      gp++;
    }else if(census.location == "Above Ground"){
      ag++;
    }
  }

  let chartData2 = [
    ["Ground Plane",gp],
    ["Above Ground",ag]
  ];
  

  let chartType = get("chartType").value;  

  displayChart(chartData2,"chart",chartType)

}

