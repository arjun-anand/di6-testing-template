# TDD / Unit Testing Assignment

The goal for this assignment is to finish coding and testing sections of a Holiday Booking application. The app has three classes, Holiday, HotelBooking and Flight. Flight pulls data from a JSON file; this class is already written. The HotelBooking class has tests written already; these are overly prescriptive and tell you how to do things, but that's ok because it's less work for you. The Holiday class will contain instances of the other classes in its arrays, it also has some more complicated methods. You will need to write test assertions and to code these methods, but the headers are already available for you.
If this seems like a daunting project, the workshops for the week lead into it well and are worth revisiting. Also, commenting the existing code and tests should give you an idea of how to start. If it doesn't seem like much of a challenge, try the extension activities. Please innovate, but don't scrap the entire code organisation entirely since this makes it difficult for us to mark it.

To access the project, either clone the repo to your desktop or work on it within repl.it
Use
```npm install``` 
to install Mocha, then you're ready to go with 
```npm test```
Remember to push your changes regularly with
```git add .```
```git commit -m "MESSAGE HERE"```
```git push```
This will prevent you from losing work and allow you to record your progress.

A repl exists within the program itself for you to try and experiment with classes. You can also use ```console.log()``` and it will print out above your tests.

## Specification

### HotelBooking Class
- hotel = new HotelBooking('hotel name','hotel city')
- hotel.name // 'string'
- hotel.city // 'string'
- hotel.address // 'string'
- hotel.startDate // date - ideally use setters to allow a string in UK format to be converted to a datetime
- hotel.endDate // date - as above
- hotel.rating // 0 (out of 5)
- hotel.basePrice // 0.00 - ideally limit to two decimal places
- hotel.pricePerNight(date) => returns base price with 1.5 modifier for Summer Months and 1.2 modifier for weekends
- hotel.numberOfDays() // => returns the number of days of the booking
- hotel.pricePerBooking() // => uses pricePerNight, numberOfDays() to calculate price for entire booking

### Holiday Class
- holiday = new Holiday(new Date("2020-10-01"), new Date("2021-10-05"))
- holiday.startDate // Date
- holiday.endDate // Date
- holiday.discount // => 0.0
- holiday.flights // []
- holiday.hotels // []
- holiday.numberOfDays() // => returns the number of days of the booking
- holiday.getHotels() //=> returns a list of all associated hotel bookings
- holiday.getFlights() //=> returns a list of all associated flights
  - optional - getHotelPrice() // => acts as helper function for looping through Hotels array and getting 'pricePerTrip()' on each
  - optional - getFlightPrice() 
- holiday.getTotalPrice() // => get total price of all hotels and holiday, and apply discount
- hotel.returnItinerary() // => returns a nicely formatted itinerary including hotel flights, bookings and cost including discount
- (difficult, only attempt if everything else is done) hotel.showGaps() // => alerts the user to any gaps in their itinerary (days without hotels, hotels in different cities without flights, etc.)

### Flight Class

- flight = new Flight('departure date','flight code')
- flight.departureDate // date
- flight.flightCode // 'string'
- flight.departureCity // 'string'
- flight.destinationCity // 'string'
- flight.carrier // 'string'
- flight.departureTime // date
- flight.arrivalTime // date
- flight.basePrice // 0.00
- flight.ticketClass // either 'business', 'first' or 'economy'
- flight.getPrice() // => returns the price with a modifier of 1.5 for business class and 2 for first, modifier of 0.7 if it is further than 6 months away from today
- flight.getDetails() // => uses flightCode to fill in departureCity,destinationCity,departureTime,arrivalTime,carrier and basePrice

## Assignment

### Constructor and Properties for Hotel Booking Class (7 marks )
The tests are written for this class and its properties; you need to uncomment them and make them pass. Simply producing a working class and constructor will get you the majority of points. 
*Extension*: produce setters to accept strings in a string format
### Methods for Hotel Booking Class ( 7 marks ) 
There are three methods that need to be implemented
- pricePerNight(), which takes a date and returns a 1.5 modifier if the date is in summer and a 1.2 modifier if it’s a weekend (Friday, Saturday or Sunday).
- numberOfDays(), which calculates the number of days between the last and the first day. You can use javascript’s datetime objects for this.
- pricePerBooking() will require you to create a list of days, and run pricePerNight() on each
*Extension*: what are other ways you could implement numberOfDays()?
## Flights
### Tests for Flight Constructor and Properties ( 7 marks )
The classes are there, so you should be able to test them. With this exercise, you want to be more stringent than you would be in Behaviour Driven Development, since we are verifying things will not change in the future.
*Extension*: Should you be able to set departureDate and flightCode to anything?
### Tests for Flight Methods (7 marks )
## Holiday
### Tests for Holiday Constructor and Properties ( 7 marks )
Some test headings are already specified, but they can be filled out. It is acceptable to change the test names or strings, but you should maintain the same headings.
*Extension*: should it be possible to overwrite holiday.flights or holiday.hotels?
### Constructor and Properties for Holiday Class (7 marks )
This should follow the same format as the other classes. Flights and Hotels should be arrays to hold Flight and Hotel objects. 
*Extension*: should it be possible to get a discount of more than 100%?
### Tests for Holiday Methods (7 marks )
Even if you’re not sure exactly how to implement something, try to write the tests for it.
### Methods for Holiday Class ( 7 marks )
There are more methods than the hotel booking class.
- numberOfDays() should effectively be similar to the Hotel Booking class
- getHotels() should return a list of all Hotels, ideally well formatted
- getFlights() should return a list of all Hotels, ideally well formatted
- getTotalPrice() should get the price of all hotels, the price of all flights, and total cost including discount. You may want to create helper functions for this
- returnItinerary() should return an itinerary showing all flights, all hotels and the total cost
	*Extension*: produce a .showGaps() function to show any missing elements of the itinerary, such as days without hotels, or flights that depart from a place that is not yet reached.
### Use of Github to record and save changes ( 7 marks ) 
Try to make multiple commits to show the order in which you addressed the problem and the changes you made.
### Comments on Code (7 marks ) 
Write comments to show what you are doing. If you are stuck, commenting the codebase is a really good place to start, and will earn you points even if you do not complete the exercise.
