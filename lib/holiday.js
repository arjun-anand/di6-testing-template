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
const Flight = require('../lib/flight.js') //needs both this and hotelbooking.js to function

class Holiday { 
    constructor(startDate, endDate){
        this.startDate = startDate;
        this.endDate = endDate;
        this.discount = 0.0;
        this.flights = [];
        this.hotels = [];
    }

    getHotels(){
        return this.hotels.map(hotel=>{ //map function applys the defined function all the elements in an array
            return (`-${hotel.name} - ${hotel.city}\n`)
        }).join('')

    }

    numberOfDays(){
        let numberOfDays = this.endDate.getTime() - this.startDate.getTime() //calculation requires time
        var daysDifference = numberOfDays / (1000*3600*24) //returns the time back to days
        return daysDifference
    }
    getFlights(){
        return this.flights.map(flight=>{ //map function goes through and applys the function all elements
            return(`-${flight.departureDate} - ${flight.flightCode}\n`) //formatting as requested
        }).join('')


    }

    addHotelCosts(){
        var totalcost = this.hotels.reduce((a,b) => a + b, 0) //adds all elements of array
        return totalcost;

    }

    getFlightsTotal(){
       // var cost = 0
        var total = this.flights.reduce((a,b) => a+b,0) //adds each element of the array, until none is
        //left to add
        return total        
    }

    getHolidayTotal(){
        var hotelcosts = this.addHotelCosts() // calls this function to hotelcosts local variable
        var flightcosts = this.getFlightsTotal()

        return hotelcosts + flightcosts //adds both the totals together and returns as output
    }
    returnItinerary() {
       return(`Hello Arjun, here is your itinerary for your next holiday: \n----------------------------------------------------
       \n\n Here are your flights: \n` +
       //return(this.flights.map(flight=>{ //map function goes through and applys the function all elements
        //return(`-${flight.departureDate} - ${flight.flightCode}\n`) //formatting as requested
       // }).join(''))
       this.getFlights() +
        `\n Here are the hotels you've booked: \n`+
        //return(this.hotels.map(hotel=>{ //map function applys the defined function all the elements in an array
          //  return (`-${hotel.name} - ${hotel.city} - \n`)
       // }).join(''))
       this.getHotels())



    }
}
module.exports = Holiday

