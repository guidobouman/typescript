function f1(x) {
    return x;
}
var C = (function () {
    function C() {
        var bar = (function () {
            return bar;
        });
        var b = f1(f1(bar));
    }
    return C;
})();
var Vector = (function () {
    function Vector(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector.norm = function norm(v) {
        return null;
    };
    Vector.minus = function minus(v1, v2) {
        return null;
    };
    Vector.times = function times(v1, v2) {
        return null;
    };
    Vector.cross = function cross(v1, v2) {
        return null;
    };
    Vector.dot = function dot(v1, v2) {
        return null;
    };
    return Vector;
})();
var Camera = (function () {
    function Camera(pos, lookAt) {
        this.pos = pos;
        var down = new Vector(0.0, -1.0, 0.0);
        this.forward = Vector.norm(Vector.minus(lookAt, this.pos));
        this.right = Vector.times(down, Vector.norm(Vector.cross(this.forward, down)));
        this.up = Vector.times(down, Vector.norm(Vector.cross(this.forward, this.right)));
    }
    return Camera;
})();