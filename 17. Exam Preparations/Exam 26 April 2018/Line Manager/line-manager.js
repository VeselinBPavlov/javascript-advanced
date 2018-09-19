class LineManager {
    constructor(line) {
        this.stops = line;
        this._currentStop = 0;
        this._minutes = 0;
        this._delay = 0;
        this.last = 0;
    }

    get stops() {
        return this._stops;
    }

    set stops(lines) {
        this._stops = lines;
        for (let stop of lines) {
            if (typeof stop.name !== 'string' || stop.name === '') {
                throw new Error('Bus stop should be a non-empty string');
            }
            if (Number.isInteger(stop.timeToNext) === false || stop.timeToNext < 0) {
                throw new Error('Travel duration should be a positive integer'); //Test with no integer
            }
        }
        return this._stops;
    }

    get atDepot() {
        if (this._currentStop !== this._stops.length - 1) {
            return false;
        } else {
            return true;
        }
    }

    get nextStopName() {
        if (this.atDepot) {
            return "At depot.";
        } else {
            return this._stops[this._currentStop + 1].name;
        }
    }

    get currentDelay() {
        return this._delay;
    }

    arriveAtStop(minutes) {
        if (minutes < 0 || this.atDepot) {
            throw new Error('Minutes cannot be less than 0');
        }
        let nextMinutes = this._stops[this._currentStop].timeToNext;

        this._minutes += minutes;
        this._delay += minutes - nextMinutes;

        this._currentStop++;

        if(this.atDepot) {
            return false;
        }
        return true;
    }

    toString() {
        let nextStopName = this.nextStopName;
        let print = '';
        print += 'Line summary';
        if (this.atDepot) {
            print += '\n- Course completed';
        } else {
            print += `\n- Next stop: ${nextStopName}`;
        }
        print += `\n- Stops covered: ${this._currentStop}`;
        print += `\n- Time on course: ${this._minutes} minutes`;
        print += `\n- Delay: ${this._delay} minutes`;
        return print;
    }
}

//Test.
//let man = new LineManager([{name: 'Depot', timeToNext: 4}]);
//console.log(man.toString());

// Initialize a line manager with correct values
const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);

// Travel through all the stops until the bus is at depot
while(man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(4);
}

//console.log(man.toString());

/*// Should throw an Error (minutes cannot be negative)
man.arriveAtStop(-4);
// Should throw an Error (last stop reached)
man.arriveAtStop(4);

// Should throw an Error at initialization
const wrong = new LineManager([
    { name: 'Stop', timeToNext: { wrong: 'Should be a number'} }
]);*/

