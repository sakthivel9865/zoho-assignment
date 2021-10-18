vehicle1 = {
    id: "tn2091",
    type: "car"
},
    vehicle2 = {
        id: "tn2092",
        type: "car"
    },
    vehicle3 = {
        id: "tn2093",
        type: "bus"
    }


tollbooth = {
    tb1: {
        tollbooth_id: "tb001",
        pair_booth: "tb2",
        passing_vehicles: {
            tn2091: { time: 360900000 },
            tn2092: { time: 10800000 },
            tn2092: { time: 980800000 }
        }
    },
    tb2: {
        tollbooth_id: "tb002",
        pair_booth: "tb1",
        passing_vehicles: {
            tn2091: { time: 82800000 },
            tn2092: { time: 64800000 },
            tn2092: { time: 108900000 }
        }
    }
}

var x = new Date().getHours();
function myfunc() {
    document.querySelector(".firstdiv").classList.add("seconddiv");
    document.querySelector(".firstdiv").addEventListener("transitionend", myFunction);
    function myFunction() {

        this.innerHTML = Billing_page(tollbooth.tb1, vehicle1);

        this.style.top = 0;

        this.style.transition = "3s";

        this.style.transitionDelay = "2s";
        this.addEventListener("transitionend", nextgate1);

        function nextgate1() {
            this.style.left = "850px";
            this.style.transitionDelay = "2s";
            this.addEventListener("transitionend", nextgate2);

            function nextgate2() {
                this.style.top = "230px";
               
                this.addEventListener("transitionend", nextgate3);
                
                function nextgate3(){
                    
                    this.innerHTML = Billing_page(tollbooth.tb2, vehicle1);
                    this.style.top = "550px";
                }
            }
            

        }
    }
}

function Billing_page(toll, veh) {
    var vehid = veh.id;
    var first_id = toll.passing_vehicles[vehid].time;
    var f1 = first_id / (60 * 60 * 1000);
    console.log(f1);



    if (f1 < 24) {
        // alert("Billing_charge_is Rs: 0 ");
        var pairbid = toll.pair_booth;
        var pairbooth = tollbooth[pairbid];
        var second_id = pairbooth.passing_vehicles[vehid].time;

        var differ_time = Math.abs(second_id - first_id);
        var crossing_time = differ_time / (1 * 60 * 60 * 1000);
        return 0;
    }
    else if (f1 > 24) {
        // ("Billing_charge_is Rs: 50")
        return 50;
    }
}
Billing_page(tollbooth.tb1, vehicle1);



























// if(crossing_time < 24){
//     alert("hai charge is 30")
//     return Billilng_charge_is = 30;
// }
// else if(crossing_time>=24){
//     return Billing_charge_is = 50;
// }
// else{
//     return Billing_charge_is = 0;
// }















 // var f1 = tollbooth.tb1.passing_vehicles.tn2091.time;
    // var f2 = f1 / (1 * 60 * 60 * 1000);

    // var h11 = tollbooth.tb2.passing_vehicles.tn2091.time;
    // var h22 = h11 / (1 * 60 * 60 * 1000);

    // var difference_time1 = h22-f2;
    // console.log(difference_time1);

    // if(h22 < 24){
    //    alert("Billing charge = 30");
    // }
    // else if(h22>=24){
    //    alert("Billing charge = 50");
    // }

// function Billing_page(vehicles , tolls){
//     var diff1 = tollbooth.tb1.passing_vehicles.tn2091.time - tollbooth.tb2.passing_vehicles.tn2091.time;
//     console.log(diff1);
//     var 

// }
// Billing_page();


// var x = new Date().getTime();
// var y = x - (12*1000*60*60);
// var q1 = y/(1000*60*60);
// var q2 = x/(1000*60*60);
// var k = Math.floor(q2-q1);
// console.log(k);




// var gethour = new Date().getHours();
// console.log(gethour);
// var getmin = new Date().getMinutes();
// console.log(getmin);
// document.writeln(gethour":" getmin);
// var current_time = gethour + ":" +getmin;
// console.log(current_time);






// console.log(k);





















// var tollgate ={
//     tollgate_number : 2039,
//     tollgate_pair:1001,
//     tollgate_passing_vehicle : [["tn3021",7,"car"],["tn3022",3,"jeep"],["tn3021",11,"car"],["tn3023",5,"van"]],
// };

// var vehicle ={
//     Id : "tn3026",
//     time:3,
//     billing_charges:50
// };
// for(var i=0; i<tollgate_passing_vehicle.length; i++){
// if(tollgate.tollgate_passing_vehicle[i][0] == vehicle.id){
//     if(vehicle.time + tollgate.tollgate_passing_vehicle[i][1] > 24){
//         tollgate.tollgate_passing_vehicle[i][1]= 1;        
//     }
//     else {
//         tollgate.tollgate_passing_vehicle[i][1] = tollgate.tollgate_passing_vehicle[i][1] + vehicle.time; 
//     }
// }
// else if(tollgate.tollgate_passing_vehicle[i][0] != vehicle.id){

// }
// }














// var geth = new Date().getHours();
// console.log(geth);
// var milli_to_hour = tollbooth.tb1.passing_vehicles



