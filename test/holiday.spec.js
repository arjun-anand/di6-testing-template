const { expect } = require('chai')
const Holiday = require('../lib/holiday.js')

const HotelBooking = require('../lib/hotelBooking.js')
const Flight = require('../lib/flight.js')

describe('Holiday',()=>{
    describe('Holiday Constructor',()=> {
        it('should be a constructor for the Holiday class',()=> {
            expect(new Holiday()).to.be.an.instanceOf(Holiday)
        })
        it('should allow the specification of a Start Date in the constructor',()=>{
            expect(new Holiday('20/10/2020')).to.have.property('startDate')
        })
        it('should allow the specification of an End Date in the constructor',()=>{
            expect(new Holiday('20/10/2020','22/10/2020')).to.have.property('endDate')
        })
   })
    describe('Holiday Properties',() => {
        it('should have a discount property',()=>{
            let holiday = new Holiday('20/10/2020','22/10/2020')
            expect(holiday.discount).to.equal(0.0)
        })
        it('should have an array for Flight objects',()=>{
            let holiday = new Holiday('20/10/2020','22/10/2020')
            expect(holiday.flights).to.deep.equal([])
        })
        it('should have an array for Hotel Booking objects',()=>{
            let holiday = new Holiday('20/10/2020','22/10/2020')
            expect(holiday.flights).to.deep.equal([])
        })
    })
    describe('Holiday Methods',()=> {
        describe('Number of Days',()=>{
            it('should calculate the number of Days of the trip',() => {
                let holiday = new Holiday(new Date(2020,4,1), new Date(2020,04,02))
                expect(holiday.numberOfDays()).to.equal(1)
            })
            it('should deal with days in different months',() => {
                let holiday = new Holiday(new Date(2020,4,1), new Date(2020,05,02))
                expect(holiday.numberOfDays()).to.equal(32)
            })
            it('should deal with days in different years',() => {
                let holiday = new Holiday(new Date(2019,0,1), new Date(2020,0,1))
                expect(holiday.numberOfDays()).to.equal(365)
            })
        })
        describe('Get Hotels',()=>{
            it('should return a nicely formatted list of hotels',() => {
                let holiday = new Holiday(new Date(2020,0,1),new Date(2020,0,2))
                holiday.hotels.push(new HotelBooking('Ada Hotel', 'London'))
                holiday.hotels.push(new HotelBooking('Le Hotel', 'Paris'))
                holiday.hotels.push(new HotelBooking('CyberSp@ce', 'Berlin'))
                expect(holiday.getHotels()).to.equal(`-Ada Hotel - London\n-Le Hotel - Paris\n-CyberSp@ce - Berlin\n`
                )
            })
        })
        describe('Get Flights',()=>{
            it('should return a nicely formatted list of flights',() => {
                let holiday = new Holiday(new Date(2020,0,1),new Date(2020,0,2))
                holiday.flights.push(new Flight("17 Jan 2020", "AA1001"))
                holiday.flights.push(new Flight("18 Jan 2020", "AA1002"))
                holiday.flights.push(new Flight("19 Jan 2020", "AA1003"))
                expect(holiday.getFlights()).to.equal(`-17 Jan 2020 - AA1001\n-18 Jan 2020 - AA1002\n-19 Jan 2020 - AA1003\n`)

            })
        })
        describe('Get Total Price',()=> {
            it('should allow addition of flight costs',()=>{
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
            it('should allow addition of hotel costs',()=>{
                let holiday = new Holiday()
                

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
                expect(holiday.getHolidayTotal()).to.equal(1430)
            })
        })
    })
})