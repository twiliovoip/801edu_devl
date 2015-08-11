var _UserMessage = require('../models/UserMessage');

module.exports = function(app) {

    /*
     * GET list UserMessagees
     */
    app.get('/UserMessage/list', function(req, res) {
        _UserMessage.find(function(err, _UserMessage) {
            // if there are any errors, return the error
            if (err) {
                res.send(err);
            } else if (_UserMessage) {
                res.json(_UserMessage);
            }
        });
    });

    /*
     * GET list UserMessagees with pagination
     */
    app.get('/UserMessage', function(req, res) {

        var page = req.param('page', 1);
        var perPage = req.param('perpage', 10);
        page = page - 1;

        _UserMessage
            .find()
            //.select('local.email')
            .limit(perPage)
            .skip(Math.ceil(perPage * page))
            // .sort({email: 'asc'})
            .exec(function(err, UserMessagees) {
                _UserMessage.count().exec(function(err, count) {
                    // console.log(count);
                    if (err) {
                        res.send(err);
                    } else {
                        res.json({
                            "count": count,
                            "UserMessagees": UserMessagees
                        });
                    }
                });
            });
    });

    /*
     * GET one UserMessage by ID
     */
    app.get('/UserMessage/:id', function(req, res) {

        var _id = req.param('id');

        _UserMessage.findOne({
            _id: _id
        }, function(err, _UserMessage) {
            // if there are any errors, return the error
            if (err) {
                res.send(err);
            } else if (_UserMessage) {
                res.json(_UserMessage);
            }
        });
    });

    /*
     * POST to addUserMessage.
     */
    app.post('/UserMessage', function(req, res) {
        var UserMessageCategory = req.param('UserMessageCategory');
        var email = req.param('email');
        var student_id = req.param('student_id');
        var firstName = req.param('firstName');
        var lastName = req.param('lastName');
        var contact_info = req.param('contact_info');
        var message_selection = req.param('message_selection');
        var message_body = req.param('message_body');
        var preferred_lang = req.param('preferred_lang');
        var status = req.param('status');
        var added = req.param('added');        
       
        var newUserMessage = new _UserMessage();
        newUserMessage.UserMessageCategory = UserMessageCategory;
        newUserMessage.email = email;
        newUserMessage.student_id = student_id;
        newUserMessage.firstName = firstName;   
        newUserMessage.lastName = lastName;                
        newUserMessage.contact_info = contact_info;
        newUserMessage.message_selection = message_selection;
        newUserMessage.message_body = message_body;
        newUserMessage.preferred_lang = preferred_lang;
        newUserMessage.status = status;
        newUserMessage.added = added;

        // save the user
        newUserMessage.save(function(err) {
            if (err) {
                res.send({
                    "err": err
                });
            } else {
                res.send({
                    "res": 'UserMessage added!'
                });
            }
        });
            
    });

    /*
     * PUT to edit.
     */
    app.put('/UserMessage', function(req, res) {

        // var _UserMessage = req.param('UserMessage');
        var _id = req.param('_id');
        var UserMessageCategory = req.param('UserMessageCategory');
        var email = req.param('email');
        var student_id = req.param('student_id');
        var firstName = req.param('firstName');
        var lastName = req.param('lastName');
        var contact_info = req.param('contact_info');
        var message_selection = req.param('message_selection');
        var message_body = req.param('message_body');
        var preferred_lang = req.param('preferred_lang');
        var status = req.param('status');
        var added = req.param('added');

        _UserMessage.findOne({
            _id: _id
        }, function(err, _UserMessage) {
            // if there are any errors, return the error
            if (err) {
                res.send({
                    "err": err
                });
            } else if (_UserMessage) {
                _UserMessage.UserMessageCategory = UserMessageCategory;
                _UserMessage.email = email;
                _UserMessage.student_id = student_id;
                _UserMessage.firstName = firstName;
                _UserMessage.lastName = lastName;
                _UserMessage.contact_info = contact_info;
                _UserMessage.message_selection = message_selection;  
                _UserMessage.message_body = message_body;                
                _UserMessage.preferred_lang = preferred_lang;
                _UserMessage.status = status;
                _UserMessage.added = added;

                // save the user
                _UserMessage.save(function(err) {
                    if (err) {
                        res.send({
                            "err": err
                        });
                    } else {
                        res.send({
                            "res": 'UserMessage Updated!'
                        });
                    }
                });
            }
        });
    });

    /*
     * DELETE to deleteuser.
     */
    app.delete('/UserMessage/:id', function(req, res) {

        var _id = req.param('id');

        _UserMessage.remove({
            _id: _id
        }, function(err) {
            if (err) {
                res.send(err);
            } else {
                res.send('UserMessage removed!');
            }
        });

    });



};