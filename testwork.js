sortCards(testData);

function sortCards(cardList){
    cardList = JSON.parse(cardList);
    var start = foundStart(cardList);
//    console.log(start);
    var route = traceRoute(start, cardList);
//    console.log(route);
    var trip = describeTrip(route);
//    console.log(trip);
    showTrip(trip);
}

function foundStart(list){
    var depList = [];
    var depListBuf = [];
    var destList = [];
    var res = {};
    list.forEach(el => {
        depList.push(el.departure);
        depListBuf.push(el.departure);
        destList.push(el.destination);
    });
    destList.forEach(a => {
        let buf = depListBuf.indexOf(a);
        if(buf != -1){
            depListBuf.splice(buf,1);
        }
    });
    res = list[depList.indexOf(depListBuf[0])];
    return res;
}

function traceRoute(start, list){
    var route = [];
    var buf = start;
    while (list.length>0){
        route.push(buf);
        list.splice(list.indexOf(buf),1);
        let next = {};
        list.forEach((el) => {if(buf.destination == el.departure){next = el}})
        buf = next;
    }
    return route;
}

function describeTrip(route){
    var tripLabel = 'From ' + route[0].departure + ' to ' + route[route.length-1].destination;
    var tripList = route.map((el) => {return ('Take ' + el.transport_type + ' ' 
                                    + el.transport_number + ' from ' + el.departure + ' to ' 
                                    + el.destination 
                                    + (el.seat != null?(' Seat ' + el.seat):' No seat assignment.') 
                                    + (el.baggage==''?'':' Baggage ' + el.baggage))
                                }
    ); 
    var trip = [];
    trip[0] = tripLabel;
    trip[1] = tripList;
   return trip;
}

function showTrip(trip){
    //console.log(trip);
    var headCont = document.getElementById('tripLabel');
    headCont.innerHTML = trip[0];

    var textCont = document.getElementById('tripList');
    var tripList = trip[1];
    tripList.forEach(el => {
        var path = document.createElement('li');
        path.textContent = el;
        textCont.appendChild(path);
    });
}
