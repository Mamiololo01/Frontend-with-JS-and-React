function Holiday(destination, days) {
    this.destination = destination
    this.days = days
}

Holiday.prototype.info = function() {
    console.log(this.destination + '|' + this.days + 'days');
};

var Ali = new Holiday('Ali', '40')
console.log(Ali.info());