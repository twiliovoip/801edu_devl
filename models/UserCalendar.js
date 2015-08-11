// app/models/UserCalendar.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our class model
var userCalendarEventSchema = mongoose.Schema({
	user_id: String,
	eventTitle: String,    
    startdate: String,
    enddate: String,
    allday: String, 
	file: String
});

// methods ======================


module.exports = mongoose.model('UserCalendarEvent', userCalendarEventSchema);