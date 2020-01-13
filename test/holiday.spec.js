const { expect } = require('chai')
const Holiday = require('../lib/holiday.js')

const HotelBooking = require('../lib/hotelBooking.js')
const Flight = require('../lib/flight.js')

describe('Holiday',()=>{
    describe('Holiday Constructor',()=> {
        it.skip('should be a constructor for the Holiday class',()=> {
            expect(new Holiday()).to.be.an.instanceOf(Holiday)
        })
        it.skip('should allow the specification of a Start Date in the constructor',()=>{
            expect(new Holiday('20/10/2020')).to.have.property('startDate')
        })
        it.skip('should allow the specification of an End Date in the constructor',()=>{
            expect(new Holiday('20/10/2020','22/10/2020')).to.have.property('endDate')
        })
   })
    describe('Holiday Properties',() => {
        it.skip('should have a discount property',()=>{
        })
        it.skip('should have an array for Flight objects',()=>{
        })
        it.skip('should have an array for Hotel Booking objects',()=>{
        })
    })
    describe('Holiday Methods',()=> {
        describe('Number of Days',()=>{
            it.skip('should calculate the number of Days of the trip',() => {
            })
            it.skip('should deal with days in different months',() => {
            })
            it.skip('should deal with days in different years',() => {
            })
        })
        describe('Get Hotels',()=>{
            it.skip('should return a nicely formatted list of hotels',() => {
                let holiday = new Holiday(new Date(2020,0,1),new Date(2020,0,2))
                holiday.hotels.push(new HotelBooking('Ada Hotel', 'London'))
                holiday.hotels.push(new HotelBooking('Le Hotel', 'Paris'))
                holiday.hotels.push(new HotelBooking('CyberSp@ce', 'Berlin'))
                expect(holiday.getHotels()).to.equal(`-Ada Hotel - London\n-Le Hotel - Paris\n-CyberSp@ce - Berlin\n`
                )
            })
        })
        describe('Get Flights',()=>{
            it.skip('should return a nicely formatted list of flights',() => {
                // fill in
            })
        })
        describe('Get Total Price',()=> {
            it.skip('should allow addition of flight costs',()=>{
                let holiday = new Holiday(new Date(2020,10,20),new Date(2020,20,22))
                let flight1 = new Flight('20/10/20',"AA1001")
                flight1.getDetails()
                holiday.flights.push(flight1)
                let flight2 = new Flight('20/10/23',"AA1002")
                flight2.getDetails()
                holiday.flights.push(flight2)
                let flight3 = new Flight('20/10/26',"AA1003")
                flight3.getDetails()
                holiday.flights.push(flight3)
                expect(holiday.getFlightsTotal()).to.equal(530)
            })
            it.skip('should allow addition of hotel costs',()=>{
                // fill in
            })
            it.skip('should allow addition of flight AND hotel costs',()=>{
                let holiday = new Holiday(new Date(2020,10,20),new Date(2020,20,22))
                let flight1 = new Flight('20/10/20',"AA1001")
                flight1.getDetails()
                holiday.flights.push(flight1)
                let flight2 = new Flight('20/10/23',"AA1002")
                flight2.getDetails()
                holiday.flights.push(flight2)
                let flight3 = new Flight('20/10/26',"AA1003")
                flight3.getDetails()
                holiday.flights.push(flight3)
                let hotel1 = new HotelBooking('Ada Hotel', 'London')
                hotel1.basePrice = 100
                hotel1.startDate = new Date(2020,10,20)
                hotel1.endDate = new Date(2020,10,23)
                holiday.hotels.push(hotel1)
                let hotel2 = new HotelBooking('Il Hotel', 'Milan')
                hotel2.basePrice = 120
                hotel2.startDate = new Date(2020,10,23)
                hotel2.endDate = new Date(2020,10,26)
                holiday.hotels.push(hotel2)
                let hotel3 = new HotelBooking('PyramidScheme', 'Cairo')
                hotel3.basePrice = 90
                hotel3.startDate = new Date(2020,10,26)
                hotel3.endDate = new Date(2020,10,28)
                holiday.hotels.push(hotel3)
                expect(holiday.getHolidayTotal()).to.equal(1448)
            })
        })
    })
})