class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const DX = a.x - b.x;
        const DY = a.y - b.y;
        return Math.sqrt(DX * DX + DY * DY);
    }
}

// Test.
let p1 = new Point(5, 5);
let p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));

