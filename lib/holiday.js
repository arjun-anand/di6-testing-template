// Holiday Class
// holiday = new Holiday(new Date("2020-10-01"), new Date("2021-10-05"))
// holiday.startDate // Date
// holiday.endDate // Date
// holiday.discount // => 0.0
// holiday.flights // []
// holiday.hotels // []
// holiday.numberOfDays() // => returns the number of days of the booking
// holiday.getHotels() //=> returns a list of all associated hotel bookings
// holiday.getFlights() //=> returns a list of all associated flights
// // optional - getHotelPrice() // => acts as helper function for looping through Hotels array and getting 'pricePerTrip()' on each
// // optional - getFlightPrice() 
// holiday.getTotalPrice() // => get total price of all hotels and holiday, and apply discount
// hotel.returnItinerary() // => returns a nicely formatted itinerary including hotel flights, bookings and cost including discount
// // difficult hotel.showGaps() // => alerts the user to any gaps in their itinerary (days without hotels, hotels in different cities without flights, etc.)
const HotelBooking = require('../lib/hotelBooking.js')

class Holiday { 
    constructor(startDate, endDate){
        this.startDate = startDate;
        this.endDate = endDate;
        this.discount = 0.0;
        this.flights = [];
        this.hotels = [];
    }

    getHotels(){
        return this.hotels.map(hotel=>{
            return (`-${hotel.name} - ${hotel.city}\n`)
        }).join('')

    }

    numberOfDays(){
        let numberOfDays = this.endDate.getTime() - this.startDate.getTime()
        var daysDifference = numberOfDays / (1000*3600*24)
        return daysDifference
    }
    getFlights(){
        return this.flights.map(flight=>{
            return(`-${flight.departureDate} - ${flight.flightCode}\n`)
        }).join('')


    }

    addHotelCosts(){
        var totalcost = 0
        let holiday = new Holiday()
        var cumulativecosts = []
        this.hotels.forEach((eachHotel) => {
            eachHotel.name == hotelName ? totalcost += eachHotel.pricePerBooking() : totalcost += 0;
        })

        return totalcost;

    }

    getDetails(){

    }
}
module.exports = Holiday

