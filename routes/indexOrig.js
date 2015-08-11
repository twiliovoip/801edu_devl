// var express = require('express');
// var router = express.Router();

module.exports = function(app) {

    /* GET leading home page. */
    app.get('/', function(req, res) {

        if (req.param('msg')) {
            res.locals.serverMsg = 'msg here';
        } else {
            res.locals.serverMsg = null;
        }

        res.locals.logged = 0;
        res.locals.isAdmin = req.session.isAdmin;
        if (req.isAuthenticated()) {
            res.locals.logged = 1;
            res.render('index', {
                title: 'Home',
                heading: '首页',
                user: req.user,
                // docs: docs
            });

        } else {
		        req.session.sessionLang ="ch";
		        res.locals.lang="ch";
	            res.render('home', {
	                title: '主页',
	                heading: ''
	            });
				
		
        }

    });

    /* GET home page when return from management section. */
    app.get('/homepage', function(req, res) {
    	if (req.isAuthenticated()) {
            res.locals.logged = 1;
        }
        else{
			res.locals.logged = 0;
		}

		req.session.sessionLang ='ch';
		res.locals.lang = "ch" ;
		res.locals.lang="ch";
        res.render('home', {
	            title: '主页',
	            heading: ''
	        });
		
        
    });

    /* GET home page when return from management section. */
    app.get('/homepage_en', function(req, res) {
    	if (req.isAuthenticated()) {
            res.locals.logged = 1;
        }
        else{
			res.locals.logged = 0;
		}
        req.session.sessionLang ='en';
        res.locals.lang = "en" ;        
        res.render('home_en', {
            title: 'Home',
            heading: ''
        });
    });    
    
    /* GET resources page */
    app.get('/resources_media', function(req, res) {
    	if (req.isAuthenticated()) {
            res.locals.logged = 1;
        }
        else{
			res.locals.logged = 0;
		}
        req.session.sessionLang ='ch';
        res.locals.lang = "ch" ;
        res.render('resources_media', {
            title: '媒体资源',
            heading: ''
        });
    });

    app.get('/resources', function(req, res) {
    	if (req.isAuthenticated()) {
            res.locals.logged = 1;
        }
        else{
			res.locals.logged = 0;
		}
        req.session.sessionLang ='ch';
        res.locals.lang = "ch" ;
        res.render('resources', {
            title: 'Resources',
            heading: ''
        });
    });
    /* GET resources page */
    app.get('/resources_en', function(req, res) {
    	if (req.isAuthenticated()) {
            res.locals.logged = 1;
        }
        else{
			res.locals.logged = 0;
		}
        req.session.sessionLang ='en';
        res.locals.lang = "en" ;
        res.render('resources_en', {
            title: 'Resources',
            heading: ''
        });
    });    
    
    /* GET stories page */
    app.get('/stories', function(req, res) {
    	if (req.isAuthenticated()) {
            res.locals.logged = 1;
        }
        else{
			res.locals.logged = 0;
		}
        req.session.sessionLang ='ch';
        res.locals.lang = "ch" ;
        res.render('stories', {
            title: 'stories',
            heading: ''
        });
    });    
    
    /* GET procedure page */
    app.get('/procedure', function(req, res) {
    	if (req.isAuthenticated()) {
            res.locals.logged = 1;
        }
        else{
			res.locals.logged = 0;
		}
        req.session.sessionLang ='ch';
        res.locals.lang = "ch" ;
        res.render('procedure', {
            title: 'procedure',
            heading: ''
        });
    });   
    
    app.get('/procedure_teacher', function(req, res) {
    	if (req.isAuthenticated()) {
            res.locals.logged = 1;
        }
        else{
			res.locals.logged = 0;
		}
        req.session.sessionLang ='ch';
        res.locals.lang = "ch" ;
        res.render('procedure_teacher', {
            title: 'procedure_teacher',
            heading: ''
        });
    });     
        
    /* GET curriculumv page */
    app.get('/curriculum', function(req, res) {
    	if (req.isAuthenticated()) {
            res.locals.logged = 1;
        }
        else{
			res.locals.logged = 0;
		}
        req.session.sessionLang ='ch';
        res.locals.lang = "ch" ;
        res.render('curriculum', {
            title: 'curriculum',
            heading: ''
        });
    });
    
    app.get('/curriculum_test', function(req, res) {
    	if (req.isAuthenticated()) {
            res.locals.logged = 1;
        }
        else{
			res.locals.logged = 0;
		}
        req.session.sessionLang ='ch';
        res.locals.lang = "ch" ;
        res.render('curriculum_test', {
            title: 'curriculum_test',
            heading: ''
        });
    })    
            
    /* GET teachers page */
    app.get('/teachers', function(req, res) {
    	if (req.isAuthenticated()) {
            res.locals.logged = 1;
        }
        else{
			res.locals.logged = 0;
		}
        req.session.sessionLang ='ch';
        res.locals.lang = "ch" ;
        res.render('teachers', {
            title: 'teachers',
            heading: ''
        });
    });

    app.get('/aceStudent', function(req, res) {
    	if (req.isAuthenticated()) {
            res.locals.logged = 1;
        }
        else{
			res.locals.logged = 0;
		}
        req.session.sessionLang ='ch';
        res.locals.lang = "ch" ;
        res.render('aceStudent', {
            title: 'aceStudent',
            heading: ''
        });
    });
        
    /* GET vision page */
    app.get('/vision', function(req, res) {
    	if (req.isAuthenticated()) {
            res.locals.logged = 1;
        }
        else{
			res.locals.logged = 0;
		}
        req.session.sessionLang ='ch';
        res.locals.lang = "ch" ;
        res.render('vision', {
            title: 'vision',
            heading: ''
        });
    });    
                
    /* GET learnmore page */
    app.get('/learnmore', function(req, res) {
    	if (req.isAuthenticated()) {
            res.locals.logged = 1;
        }
        else{
			res.locals.logged = 0;
		}
        req.session.sessionLang ='ch';
        res.locals.lang = "ch" ;
        res.render('learnmore', {
            title: 'learnmore',
            heading: ''
        });
    });      

    /* GET stories page */
    app.get('/learnmore_en', function(req, res) {
    	if (req.isAuthenticated()) {
            res.locals.logged = 1;
        }
        else{
			res.locals.logged = 0;
		}
        req.session.sessionLang ='en';
        res.locals.lang = "en" ;
        res.render('learnmore_en', {
            title: 'learnmore',
            heading: ''
        });
    }); 
    
    /* GET resources page */
    app.get('/faq', function(req, res) {
    	if (req.isAuthenticated()) {
            res.locals.logged = 1;
        }
        else{
			res.locals.logged = 0;
		}
        req.session.sessionLang ='ch';
        res.locals.lang = "ch" ;
        res.render('faq', {
            title: 'FAQ',
            heading: ''
        });
    });    
            
    /* GET resources page */
    app.get('/faq_en', function(req, res) {
    	if (req.isAuthenticated()) {
            res.locals.logged = 1;
        }
        else{
			res.locals.logged = 0;
		}
        req.session.sessionLang ='en';
        res.locals.lang = 'en';
        res.render('faq', {
            title: 'FAQ',
            heading: ''
        });
    }); 
        // change language
    app.get('/changeLang/:lang', function(req, res){
    	var lang =  req.param('lang');
        req.session.sessionLang = lang;
        res.locals.lang = lang ;
		res.redirect('back');
    });

    /* get Class reg info for main page */
    function getClassRegs(userID, cb) {

        var _Class = require('../models/class');
        var User = require('../models/user');
        var ClassReg = require('../models/classRegistration');

        User.findOne({
            '_id': userID
        }, function(err, user) {
            if (err) {
                res.send('User not Found');
            } else {
                if (user.local.userType == 'teacher') {
                    ClassReg.find({
                        'teachers': {
                            $in: [
                                userID
                            ]
                        }
                    }, function(err, docs) {
                        if (err) {
                            // res.send(err);
                            // return err;
                            cb(err);
                        } else if (docs) {

                            // //make array of ids
                            var class_ids = [];
                            docs.forEach(function(item) {
                                class_ids.push(item.class_id);
                            });

                            // //find all the class details
                            _Class.find({
                                '_id': {
                                    $in: class_ids
                                }
                            }, function(err, docs) {
                                if (err) {
                                    // res.send(err);
                                    // return err;
                                    cb(err);
                                } else {
                                    // res.send(docs);
                                    // return docs;									
                                    cb(docs);
                                }
                            });
                        } else {
                            // res.send('[]');
                            cb('[]');
                        }
                    });
                } else if (user.local.userType == 'student') {

                    console.log(userID);
                    //get student classes regs
                    ClassReg.find({
                        'students': {
                            $in: [
                                userID
                            ]
                        }
                    }, function(err, docs) {
                        console.log(err);
                        if (err) {
                            // res.send(err);
                            // return err;
                            cb(err);
                        } else if (docs) {
                            // console.log('st');
                            console.log(docs);
                            // //make array of ids
                            var class_ids = [];
                            docs.forEach(function(item) {
                                class_ids.push(item.class_id);
                            });

                            // //find all the class details
                            _Class.find({
                                '_id': {
                                    $in: class_ids
                                }
                            }, function(err, docs) {
                                if (err) {
                                    // res.send(err);
                                    // return err;
                                    cb(err);
                                } else {
                                    //res.send(docs);
                                    // return docs;
                                    cb(docs);
                                }
                            });
                        } else {
                            // res.send('[]');
                            // return '[]';
                            cb('[]');
                        }
                    });
                }
            }
        });
    }
    
	app.get('/classroom/:id', function(req, res) {

		res.locals.class_id = req.param('id');
		res.locals.logged = 0;
		res.locals.isAdmin = req.session.isAdmin;

		if (req.isAuthenticated()) {
			res.locals.logged = 1;
			
			var isMobile = isCallerMobile(req);
			var MobileDetect = require('mobile-detect'),
			md = new MobileDetect(req.headers['user-agent']);
			if (isMobile || md.tablet() != null ) {
				res.render('classroommobil', {
					title: 'Classroom',
					heading: '教室',
					user: req.user
				});
				}
			else {
				res.render('classroom', {
				title: 'Classroom',
				heading: '教室',
				user: req.user	
				});		
			}
		} else {
			res.redirect('/');
		}

	});
    

    /* GET Admin page */
    app.get('/admin', function(req, res) {
        if (req.session.isAdmin && req.isAuthenticated()) {
            res.locals.logged = 1;
            res.locals.isAdmin = req.session.isAdmin;
            res.render('adminpanel', {
                title: 'Admin',
                heading: '管理',
                user: req.user
            });
        } else {
            res.redirect('/');
        }
    });

    // Admin Evaluators Page
    app.get('/manageEvaluators', function(req, res) {
        if (req.session.isAdmin && req.isAuthenticated()) {
            res.locals.logged = 1;
            res.locals.isAdmin = req.session.isAdmin;
            res.render('manageevaluators', {
                title: 'Manage Evaluators',
                heading: '设置评分员',
                user: req.user
            });
        } else {
            res.redirect('/');
        }
    });

    app.get('/adminEditUser/:userID', function(req, res) {
        if (req.session.isAdmin && req.isAuthenticated()) {
            res.locals.logged = 1;
            res.locals.isAdmin = req.session.isAdmin;
            res.render('adminedituser', {
                title: 'Admin',
                heading: 'Edit User',
                user: req.user,
                userID: req.param('userID')
            });
        } else {
            res.redirect('/');
        }
    });

    /* GET Admin create class */
    app.get('/createcourse', function(req, res) {
        if (req.session.isAdmin && req.isAuthenticated()) {
            res.locals.logged = 1;
            res.locals.isAdmin = req.session.isAdmin;

            var common = require("../config/common");

            res.render('createcourse', {
                title: 'Admin Create Course',
                heading: '建立课程',
                user: req.user,
                common: common
            });
        } else {
            res.redirect('/');
        }
    });

    /* GET Admin add/Edit class session */
    app.get('/classsession', function(req, res) {
        if (req.session.isAdmin && req.isAuthenticated()) {
            res.locals.logged = 1;
            res.locals.isAdmin = req.session.isAdmin;

            res.render('classsession', {
                title: 'Add/Edit Class Sessions',
                heading: '建立/修改课时',
                user: req.user
            });
        } else {
            res.redirect('/');
        }
    });
    
    /* GET Admin add/Edit class session */
    app.get('/yourclasses', function(req, res) {
        if (req.isAuthenticated()) {
            res.locals.logged = 1;
            res.locals.isAdmin = req.session.isAdmin;

            res.render('yourclasses', {
                title: 'Your Classes',
                heading: '',
                user: req.user
            });
        } else {
            res.redirect('/');
        }
    });    

    /* GET Admin edit class */
    app.get('/editcourse', function(req, res) {
        if (req.session.isAdmin && req.isAuthenticated()) {

            var common = require("../config/common");

            res.locals.logged = 1;
            res.locals.isAdmin = req.session.isAdmin;
            res.render('editcourses', {
                title: 'Admin Edit Course',
                heading: '修改课程',
                user: req.user,
                common: common
            });
        } else {
            res.redirect('/');
        }
    });

    /* GET Admin add edit class */
    app.get('/addeditclass', function(req, res) {
        if (req.session.isAdmin && req.isAuthenticated()) {

            var common = require("../config/common");

            res.locals.logged = 1;
            res.locals.isAdmin = req.session.isAdmin;
            res.render('addeditclass', {
                title: 'Admin Add/Edit Class',
                heading: '建立/修改班级',
                user: req.user,
                common: common
            });
        } else {
            res.redirect('/');
        }
    });

    /* GET Admin create class */
    app.get('/classreg', function(req, res) {
        if (req.session.isAdmin && req.isAuthenticated()) {
            res.locals.isAdmin = req.session.isAdmin;
            res.locals.logged = 1;
            res.render('classreg', {
                title: 'Class Registration',
                heading: '班级登记',
                user: req.user
            });
        } else {
            res.redirect('/');
        }
    });

    // router.get('/editclass/:classid', function(req, res){
    // 	if(req.session.isAdmin && req.isAuthenticated()){

    // 		//get class 
    // 		var class_id = req.param('classid');

    // 		res.locals.logged = 1;
    // 		res.render('editclass', {
    // 			title: 'Admin Edit Class',
    // 			heading: '',
    // 			user: req.user,
    // 			class_id: class_id
    // 		});
    // 	} else {
    // 		res.redirect('/');
    // 	}
    // });



    /* GET home page. */
    app.get('/register', function(req, res) {

        res.locals.logged = 0;
        res.locals.isAdmin = req.session.isAdmin;

        if (req.isAuthenticated()) {
            res.locals.logged = 1;
            res.redirect('/');
        } else {
            res.render('signup', {
                title: 'Register',
                heading: '注册'
            });				
        }

    });
    
    /* GET home page. */
    app.get('/registerteacher', function(req, res) {

        res.locals.logged = 0;
        res.locals.isAdmin = req.session.isAdmin;

        if (req.isAuthenticated()) {
            res.locals.logged = 1;
            res.redirect('/');
        } else {
            res.render('signupteacher', {
                title: 'Teacher Register',
                heading: '教师注册'
            });
        }

    });
    
    /* GET home page. */
    app.get('/registerstudent', function(req, res) {

        res.locals.logged = 0;
        res.locals.isAdmin = req.session.isAdmin;

        if (req.isAuthenticated()) {
            res.locals.logged = 1;
            res.redirect('/');
        } else {
            res.render('signupstudent', {
                title: 'Student Register',
                heading: '学生注册'
            });
        }

    });    

    /* GET home page. */
    app.get('/auth', function(req, res) {

        res.locals.logged = 0;
        res.locals.isAdmin = req.session.isAdmin;

        if (req.isAuthenticated()) {
            res.locals.logged = 1;
            res.redirect('/');
        } else {
        	if(req.session.sessionLang!="en"){
	        req.session.sessionLang ="ch";
	        res.locals.lang="ch";        					
			}
            res.render('auth', {
                title: 'Login',
                heading: '登陆'
            });
        }

    });
    
    app.get('/classCatelog', function(req, res) {
        if (req.isAuthenticated()) {
            res.locals.logged = 1;
            res.locals.isAdmin = req.session.isAdmin;

            res.render('classCatelog', {
                title: 'Class Catelog',
                heading: '',
                user: req.user
            });
        } else {
            res.redirect('/');
        }
    });        

    app.get('/curriculum_audioPlay', function(req, res) {
        if (req.isAuthenticated()) {
            res.locals.logged = 1;
            res.locals.isAdmin = req.session.isAdmin;

            res.render('curriculum_audioPlay', {
                title: 'Audio Material',
                heading: '',
                user: req.user
            });
        } else {
            res.redirect('/');
        }
    });    
    
    app.get('/courseselection', function(req, res) {
        if (req.isAuthenticated()) {
            res.locals.logged = 1;
            res.locals.isAdmin = req.session.isAdmin;

            res.render('courseselection', {
                title: '选课',
                heading: '',
                user: req.user,
                email:req.user.email
            });
        } else {
            res.redirect('/');
        }
    });  
    
    app.get('/audioReading', function(req, res) {
        if (req.isAuthenticated()) {
            res.locals.logged = 1;
            res.locals.isAdmin = req.session.isAdmin;

            res.render('audioReading', {
                title: '有声读物',
                heading: '',
                user: req.user,
                email:req.user.email
            });
        } else {
            res.redirect('/');
        }
    });  
    
    app.get('/wordGame', function(req, res) {
        if (req.isAuthenticated()) {
            res.locals.logged = 1;
            res.locals.isAdmin = req.session.isAdmin;

            res.render('wordGame', {
                title: '单词游戏',
                heading: '',
                user: req.user,
                email:req.user.email
            });
        } else {
            res.redirect('/');
        }
    });     

    app.get('/wordQuiz', function(req, res) {
        if (req.isAuthenticated()) {
            res.locals.logged = 1;
            res.locals.isAdmin = req.session.isAdmin;

            res.render('wordQuiz', {
                title: '词汇量测试',
                heading: '',
                user: req.user,
                email:req.user.email
            });
        } else {
            res.redirect('/');
        }
    }); 
                
    app.get('/editprofile', function(req, res) {

        var User = require('../models/user');

        res.locals.logged = 0;
        res.locals.isAdmin = req.session.isAdmin;

        if (req.isAuthenticated()) {
            res.locals.logged = 1;

            //get logged in user
            User.findOne({
                _id: req.user._id
            }, function(err, user) {
                if (err) {
                    res.send(err);
                } else if (user) {

                    var filesPath = './public/uploads/' + req.user._id + '/files/';

                    //get user files
                    var fs = require('fs');
                    fs.readdir(filesPath, function(err, data) {
                        res.render('editprofile', {
                            title: 'Edit Profile',
                            heading: '修改帐户信息',
                            user: req.user,
                            files: data
                        });
                    });


                }
            });



        } else {
            res.redirect('/');
        }
    });

}

function isCallerMobile(req) {
  var ua = req.headers['user-agent'].toLowerCase(),
    isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4));
 
  return !!isMobile;
}


// module.exports = router;
