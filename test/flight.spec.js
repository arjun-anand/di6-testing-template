const { expect } = require('chai') //assertion library
const Flight = require('../lib/flight.js')


describe('Flight',()=>{
    describe('Flight Constructor',()=> {
        it('should be a Flight constructor',()=> {

            var flight = new Flight(16/01/2020, 'AA1001')
            expect(flight.departureDate).to.equal(16/01/2020)
            expect(flight.flightCode).to.equal('AA1001')

            expect(new Flight()).to.be.an.instanceOf(Flight)
                   
        })
        it('should allow the specification of a departure date in the constructor',()=>{
            var flight = new Flight("16 Jan 2020", "AA1001")
            expect(flight.departureDate).to.equal("16 Jan 2020")
        })
        it('should allow the specification of a flight code in the constructor',()=>{ 
            var flight = new Flight("16 Jan 2021", "AA1001")
            expect(flight.flightCode).to.equal("AA1001")
        })
    })
    describe('Flight Properties',()=> {
        it('should have a departureCity property, initially an empty string',()=> {
            var flight = new Flight()
            expect(flight.departureCity).to.equal("")
        })
        it('should have a destinationCity property, initially an empty string',()=>{
            var flight = new Flight()
            expect(flight.destinationCity).to.equal("")
        })
        it('should have a carrier property, initially an empty string',()=>{
            var flight = new Flight()
            expect(flight.carrier).to.equal("")
        })
        it('should have a departureTime property, initially set to null',()=> {
            var flight = new Flight()
            expect(flight.departureTime).to.equal(null)
        })
        it('should have a arrivalTime property, initially set to null',()=>{
            var flight = new Flight()
            expect(flight.arrivalTime).to.equal(null)
        })
        it('should have a basePrice property, initially 0',()=>{
            var flight = new Flight()
            expect(flight.basePrice).to.equal(0)
        })
        it('should have a ticketClass property, initially "ECONOMY"',()=>{
            var flight = new Flight()
            expect(flight.ticketClass).to.equal('ECONOMY')
        })
    })
    describe('Flight Methods',()=>{
        describe('get Flight Details',()=>{
            it('should update Carrier if flight found',()=>{
                var flight = new Flight("16 Jan 2020", "AA1001")
                flight.getDetails()
                expect(flight.carrier).to.equal("Ada Airlines")
            })
            it('should update departureCity if flight found',()=>{
                var flight = new Flight("16 Jan 2020", "AA1002")
                flight.getDetails()
                expect(flight.departureCity).to.equal("Milan")
            })
            it('should update destinationCity if flight found',()=>{
                var flight = new Flight("16 Jan 2020", "AA1003")
                flight.getDetails()
                expect(flight.destinationCity).to.equal("London")
            })
            it('should update departureTime if flight found',()=>{
                var flight = new Flight("16 Jan 2020", "AA1001")
                flight.getDetails()
                expect(flight.departureTime).to.equal("08:00")
            })
            it('should update Arrival Time if flight found',()=>{
                var flight = new Flight("16 Jan 2020", "AA1001")
                flight.getDetails()
                expect(flight.arrivalTime).to.equal("13:30")
            })
            it('should update Base Price if flight found',()=>{
                var flight = new Flight("16 Jan 2020", "AA1001")
                flight.getDetails()
                
                expect(flight.basePrice).to.equal(150)
            })
        })
        describe('Get Flight Price',()=>{
            it('should return a normal Price for economy',()=>{
                var flight = new Flight("16 Jan 2020", "AA1002")
                //THE DEFAULT CLASS IS ECONOMY, HENCE NO DELCARATION NEEDED!
                flight.getDetails()
                flight.getFlightPrice()
                //console.log(flight.basePrice)
                expect(flight.getFlightPrice()).to.equal(200)

            })
            it('should return a greater price for a business class flight',()=>{
                var flight = new Flight("16 Jan 2020", "AA1002")
                flight.ticketClass='BUSINESS'
                flight.getDetails()
                flight.getFlightPrice()
                expect(flight.getFlightPrice()).to.equal(200*1.5)
            })
            it('should return a greater price for a first class flight',()=>{
                var flight = new Flight("16 Jan 2020", "AA1002")
                flight.ticketClass='FIRST'
                flight.getDetails()
                flight.getFlightPrice()
                expect(flight.getFlightPrice()).to.equal(200*2)
            })
        })
     
    })
    
})

