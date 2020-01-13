Holiday Class
holiday = new Holiday(new Date("2020-10-01"), new Date("2021-10-05"))
holiday.startDate // Date
holiday.endDate // Date
holiday.discount // => 0.0
holiday.flights // []
holiday.hotels // []
holiday.numberOfDays() // => returns the number of days of the booking
holiday.getHotels() //=> returns a list of all associated hotel bookings
holiday.getFlights() //=> returns a list of all associated flights
holiday.getTotalPrice() // => get total price of all hotels and holiday, and apply discount
hotel.returnItinerary() // => returns a nicely formatted itinerary including hotel flights, bookings and cost including discount
hotel.showGaps() // => alerts the user to any gaps in their itinerary (days without hotels, hotels in different cities without flights, etc.)

HotelBooking Class
hotel = new HotelBooking('hotel name','hotel city')
hotel.name // 'string'
hotel.city // 'string'
hotel.address // 'string'
hotel.startDate // date
hotel.endDate // date
hotel.rating // 0 (out of 5)
hotel.basePrice // 0.00
hotel.pricePerNight(date) 
// => returns base price with 1.5 modifier for Summer Months and 1.2 modifier for weekends
holiday.numberOfDays() // => returns the number of days of the booking
hotel.pricePerBooking() // => uses pricePerNight, numberOfDays() to calculate price for entire booking

Flight Class
flight = new Flight('departure date','departure code') 
flight.departureDate // date
flight.departureCode // 'string'
flight.departureCity // 'string'
flight.destinationCity // 'string'
flight.carrier // 'string'
flight.departureTime // date
flight.arrivalTime // date
flight.basePrice // 0.00
flight.ticketClass // either 'business', 'first' or 'economy'
flight.getPrice() // => returns the price with a modifier of 1.5 for business class and 2 for first, modifier of 0.7 if it is further than 6 months away from today
flight.getDetails() 
// => use departureDate and DepartureCode to fill in departureCity,destinationCity,departureTime,arrivalTime,carrier and basePrice
