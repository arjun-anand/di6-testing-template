// HotelBooking Class
// hotel = new HotelBooking('hotel name','hotel city')
// hotel.name // 'string'
// hotel.city // 'string'
// hotel.address // 'string'
// hotel.startDate // date - ideally use setters to allow a string in UK format to be converted to a datetime
// hotel.endDate // date - as above
// hotel.rating // 0 (out of 5)
// hotel.basePrice // 0.00 - ideally limit to two decimal places
// hotel.pricePerNight(date) 
// // => returns base price with 1.5 modifier for Summer Months and 1.2 modifier for weekends
// holiday.numberOfDays() // => returns the number of days of the booking
// hotel.pricePerBooking() // => uses pricePerNight, numberOfDays() to calculate price for entire booking

class HotelBooking {
   constructor(Name, City){
       this.name = Name;
       this.city = City;
       this.address = "";
       this.startDateString = null;
       this.startDate = null //new Date(this.startDateString.split('/')[2], this.startDateString.split('/')[1] - 1, this.startDateString.split('/')[0]);
       this.endDateString = null
       this.endDate = null //new Date(this.endDateString.split('/')[2], this.endDateString.split('/')[1] - 1, this.endDateString.split('/')[0]);
       this.rating = 0 //Array(6).fill().map((v, i) => i + 0)
       this.basePrice = 0;
       this.numberDays = 0;
       this.pricePerBooking = 0;
   }
   pricePerNight() {
       //let noOfDays = this.endDate-this.startDate
       let pricePerNight = this.basePrice
       if(this.startDate.getDay() % 6 == 0){ //formula to calculate if the date is on an weekend
           pricePerNight *= 1.2
       }
       if(this.startDate.getMonth() >= 4 && this.startDate.getMonth() <= 7){ //summer months are generally agreed to be 4-7... right?
           pricePerNight *= 1.5
       }
       this.basePrice = pricePerNight
       return pricePerNight
   }
   numberOfDays() {
       let noOfDays = this.endDate.getTime() - this.startDate.getTime() //.getTime() is required to calculate the difference, manipulation requires that function
       var daysDifference = noOfDays / (1000*3600*24) // here you change it back into the day format
       this.numberDays = daysDifference
       return daysDifference
   }

   pricePerTrip() {
       var pricepernight = this.basePrice // the price per trips would be the number of days you stay times the price per night
       var numberofdays = this.numberDays
       this.pricePerTrip = pricepernight * numberofdays
       return this.pricePerTrip
   }
  

}
module.exports = HotelBooking