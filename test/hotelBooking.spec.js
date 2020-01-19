const { expect } = require('chai')
const HotelBooking = require('../lib/hotelBooking.js')

describe('Hotel Booking',()=>{
    describe('Hotel Booking Constructor',()=> {
        it('should be a constructor for the Hotel Booking class',()=> {
            expect(new HotelBooking()).to.be.an.instanceOf(HotelBooking)
        })
        it('should allow the specification of a Name in the constructor',()=>{
            expect(new HotelBooking('Ada Hotel')).to.have.property('name')
        })
        it('should allow the specification of an City in the constructor',()=>{
            expect(new HotelBooking('Ada Hotel','London')).to.have.property('city')
        })
   })
   describe('Hotel Properties',() => {
        it('should have an address property',()=>{
            let hotel = new HotelBooking('Ada Hotel','London')
            expect(hotel).to.have.property('address')
            expect(hotel.address).to.be.a('string')
        })
        it('should have a start Date property that defaults to null',()=>{
            let hotel = new HotelBooking('Ada Hotel','London')
            expect(hotel).to.have.property('startDate')
            expect(hotel.startDate).to.be.a('null')
        })
        it('should have an end Date property that defaults to null',()=>{
            let hotel = new HotelBooking('Ada Hotel','London')
            expect(hotel).to.have.property('endDate')
            expect(hotel.endDate).to.be.a('null')
        })
        it('should have an integer rating between 0 and 5',()=>{
            let hotel = new HotelBooking('Ada Hotel','London')
            expect(hotel).to.have.property('rating')
            expect(hotel.rating).to.be.at.least(0)
            expect(hotel.rating).to.be.below(5)
        })
        it('should have a base price of at least 0',() => {
            let hotel = new HotelBooking('Ada Hotel','London')
            expect(hotel).to.have.property('basePrice')
            expect(hotel.basePrice).to.be.at.least(0)
        })
    })
    describe('Hotel Methods',()=>{
        describe('Price Per Night',()=>{
            it('should return the base price for days that are not Weekends or Summer',() => {
                let hotel = new HotelBooking('Ada Hotel','London')
                let date = new Date(2020,2,5)
                hotel.startDate = date
                hotel.basePrice = 100
                expect(hotel.pricePerNight(date)).to.equal(100)
            })
            it('should return the base price with a 20% increase for Weekends', ()=> {
                let hotel = new HotelBooking('Ada Hotel','London')
                let date = new Date(2020,2,1)
                hotel.startDate = date
                hotel.basePrice = 100
                expect(hotel.pricePerNight(date)).to.equal(120)
            })
            it('should return the base price with a 50% increase for Summer', ()=> {
                let hotel = new HotelBooking('Ada Hotel','London')
                let date = new Date(2020,6,1)
                hotel.startDate = date
                hotel.basePrice = 100
                expect(hotel.pricePerNight(date)).to.equal(150)
            })
            it('should return the base price with a combined increase for Summer Weekends', ()=> {
                let hotel = new HotelBooking('Ada Hotel','London')
                let date = new Date(2020,6,4)                
                hotel.startDate = date
                hotel.basePrice = 100
                expect(hotel.pricePerNight(date)).to.be.at.most(180)
                expect(hotel.pricePerNight(date)).to.be.at.least(179.99)
            })
        })
        describe('Number of Days',()=>{
            it('should calculate the number of Days of the trip',() => {
                let hotel = new HotelBooking('Ada Hotel','London')
                hotel.startDate = new Date(2020,0,1)
                hotel.endDate = new Date(2020,0,2)
                expect(hotel.numberOfDays()).to.equal(1)
            })
            it('should deal with days in different months',() => {
                let hotel = new HotelBooking('Ada Hotel','London')
                hotel.startDate = new Date(2020,0,30)
                hotel.endDate = new Date(2020,1,2)
                expect(hotel.numberOfDays()).to.equal(3)
            })
            it('should deal with days in different years',() => {
                let hotel = new HotelBooking('Ada Hotel','London')
                hotel.startDate = new Date(2020,0,1)
                hotel.endDate = new Date(2021,0,1)
                expect(hotel.numberOfDays()).to.equal(366)
            })
        })
        describe('should calculate the price per Trip',()=>{
            it('should be 100 for a single winter weekday',() => {
                let hotel = new HotelBooking('Ada Hotel','London')
                hotel.basePrice = 100
                hotel.startDate = new Date(2020,0,15)
                hotel.endDate = new Date(2020,0,16)
                hotel.pricePerNight()
                hotel.numberOfDays()
                expect(hotel.pricePerTrip()).to.equal(100)
            })
            it('should be 240 for a two winter weekend days',() => {
                let hotel = new HotelBooking('Ada Hotel','London')
                hotel.basePrice = 100
                hotel.startDate = new Date(2020,0,25)
                hotel.endDate = new Date(2020,0,27)
                hotel.pricePerNight()
                hotel.numberOfDays()
                expect(hotel.pricePerTrip()).to.equal(240)
            })
            it('should be 450 for a three summer week days',() => {
                let hotel = new HotelBooking('Ada Hotel','London')
                hotel.basePrice = 100
                hotel.startDate = new Date(2020,6,13)
                hotel.endDate = new Date(2020,6,16)
                hotel.pricePerNight()
                hotel.numberOfDays()
                             
                expect(hotel.pricePerTrip()).to.equal(450)
            })
        })
    })
}) 