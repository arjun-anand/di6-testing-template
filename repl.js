let repl = require('repl').start({
    useColors: true,
    terminal: true,
  })
  repl.context.HotelBooking = require('./lib/hotelBooking.js')
  repl.context.Holiday = require('./lib/holiday.js')
  repl.context.Flight = require('./lib/flight.js')