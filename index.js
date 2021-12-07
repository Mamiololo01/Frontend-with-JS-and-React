class Holiday {
    constructor(destination, days) {
        this.destination = destination
        this.days = days
    } 
    info() {
        console.log(`${this.destination} will take ${this.days} days.`)
    }
}

var trip = new Holiday('Ali', '40')
console.log(trip.info());