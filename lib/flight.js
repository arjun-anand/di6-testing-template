const fs = require('fs')

class Flight{
    constructor(departureDate, flightCode){
        this.departureDate = departureDate;
        this.flightCode = flightCode;
        this.carrier = "";
        this.departureCity = "";
        this.destinationCity = "";
        this.departureTime = null;
        this.arrivalTime = null;
        this.basePrice = 0;
        this.ticketClass = 'ECONOMY'
    }
    getDetails() {
    let data = JSON.parse(fs.readFileSync('./data/flights.json','utf-8')) // reads file into data
    //let data = JSON.parse(`{"flights":[{"flightCode":"AA1001","carrier":"Ada Airlines","departureCity":"London","destinationCity":"Milan","departureTime":"08:00","arrivalTime":"13:30","basePrice":150}]}`)
    let result = data.flights.filter(x=>x.flightCode==this.flightCode)[0] //search function
    this.carrier = result.carrier
    this.departureCity = result.departureCity
    this.destinationCity = result.destinationCity
    this.departureTime = result.departureTime
    this.arrivalTime = result.arrivalTime
    this.basePrice = result.basePrice
    }
    getFlightPrice() {
    let magicNumber = 86400000 //majik
    let newPrice = this.basePrice //assigning baseprice value to local variable to manipulate it without changing it
    let isEarlyBird = ((this.departureDate - new Date())/magicNumber)>100//early bird formula
    if (this.ticketClass=="BUSINESS") {
        newPrice *= 1.5 //50% increase
        }
    if (this.ticketClass=="FIRST") {
        newPrice *= 2 //double the price
        }
    if (isEarlyBird) {
        newPrice *= 0.7 // 30% cheaper
        }
    return newPrice
    }
}

module.exports = Flight