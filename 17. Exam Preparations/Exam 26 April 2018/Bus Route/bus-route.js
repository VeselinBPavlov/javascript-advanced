function busRoute() {
    let firstBusStop = $('input[name="first-stop"]');
    let lastBusStop = $('input[name="last-stop"]');
    let busRoad = $('#selected-bus-stops');
    let stops = $('#selected-route span');


    let busStops = [];
    let availableStops = $('#bus-stops');
    availableStops.find('li').each(function () {
        busStops.push($(this).text());
    });
    let firstStop = firstBusStop.val();
    let lastStop = lastBusStop.val();

    if (firstStop - 1 >= 0 && firstStop < lastStop
        && lastStop <= busStops.length) {
        busRoad.empty();
        stops.text('none');
        stops.text(`${firstStop}-${lastStop}`);
        for (let i = firstStop - 1; i < lastStop; i++) {
            busRoad.append($(`<li>${busStops[i]}</li>`));
        }
        firstBusStop.val('');
        lastBusStop.val('');
    }
}

$(() => {
    let busStops = [
        "Gen. Gurko St.",
        "Sofia University",
        "Eagles' Bridge Sq.",
        "Bulgarian News Agency",
        "Peyo Yavorov Blvd.",
        "Aleksandar Zhendov Bvld.",
        // You can add/remove bus stops from here
    ]

    let listBusStops = $('#bus-stops')
    for (let i = 0; i < busStops.length; i++) {
        const busStopLi = $('<li>').text(busStops[i]);

        listBusStops.append(busStopLi)
    }
})