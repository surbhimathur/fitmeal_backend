const express= require('express');
const app = express();
const {vegDietChart,nonVegDietChart}= require('./dietchart');


const PORT= process.env.PORT || 4000;

app.get("/dietchart", (request,response)=>{
 const calories=parseInt(request.query?.calorie);
 const preference=request.query?.preference.toLowerCase();
    console.log(calories,preference);
    
let chart;

if(preference==="veg"){
    if(calories<=2100)
    chart=vegDietChart["2100"];
    else if(calories <= 2700 )
    chart=vegDietChart["2700"];

    else if(calories<=3200)
    chart=vegDietChart["3200"];
}
else if(preference==="non-veg"){
    if(calories<=2100)
    chart=nonVegDietChart["2100"];
    else if(calories<=2700)
    chart=nonVegDietChart["2700"];

    else if(calories<=3200)
    chart=nonVegDietChart["3200"];
}
response.status(200).json({dietChart:chart})
    
})



app.listen(PORT,()=>{
    console.log("server is running on port",PORT);
})