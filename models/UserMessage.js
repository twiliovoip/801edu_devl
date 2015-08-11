// app/models/UserMessage.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our class model
var usermessageSchema = mongoose.Schema({
	UserMessageCategory: String,
    email: String,
    student_id: String,
    firstName: String,
    lastName: String,
    contact_info: String,    
    message_selection:String,
    message_body: String,
    preferred_lang: String,
    status: String, // New, in process, completed
    added: Date
});

// methods ======================


module.exports = mongoose.model('UserMessage', usermessageSchema);