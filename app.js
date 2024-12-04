const  EXPRESS = require('express'); 
const  SESSION = require('express-session')
const  DB_CONN = require('./dbConfig')


const APP =  EXPRESS();
APP.set('view engine','ejs'); 
APP.use( SESSION({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
APP.use('/public',  EXPRESS.static('public'))

APP.use( EXPRESS.json());
APP.use( EXPRESS.urlencoded({extended:true}))

APP.get('/home', function (req, res){ 
    const viewModel = {
        loggedIn: req.session.loggedIn,
        pageTitle: 'Home',
        currentUser: req.session.username
    };
    res.render("home", viewModel); 
    }); 

    APP.get('/auto', function (req, res){ 
        const viewModel = {
            loggedIn: req.session.loggedIn,
            pageTitle: 'Auto',
            currentUser: req.session.username
        };
        res.render("autos/autoHome", viewModel); 
        });

APP.get('/', function (req, res){ 
    const viewModel = {
        loggedIn: req.session.loggedIn,
        pageTitle: 'Home',
        currentUser: req.session.username,
        "Time": "No time"
    };
res.render("home", viewModel); 
}); 
APP.get('/auckland', function (req, res){ 
    res.render("auckland", {loggedIn: req.session.loggedIn }); 
    });
APP.get('/beaches', function (req, res){ 
    res.render("beaches", {loggedIn: req.session.loggedIn }); 
    }); 
APP.get('/login', function (req, res){ 
    res.render("login.ejs", {loggedIn: req.session.loggedIn }); 
    }); 

APP.get('/logout', function (req, res){ 
    req.session.destroy();
    res.redirect("/"); 
    }); 

APP.get("/register", function(req, res) {
    console.log("bp")
    console.log("Debug")
    res.render("register.ejs",{loggedIn: req.session.loggedIn });
})

APP.get("/deleteUser", function(req, res) {
    res.send("delete user is called");
})

APP.post("/register", function(req, res) {
    let name = req.body.name;
    let password = req.body.password;
    let email = req.body.email;
    console.log("Debug")
    const insert = `INSERT INTO users (name, password,email) VALUES ("${name}", "${password}", "${email}")`;
     DB_CONN.query(insert, function(err, result) {
        if(err) throw err;
        console.log('user registered');
        
    })
    res.redirect("/home"); 
})

APP.get('/members', function (req, res){ 
    if(req.session.loggedIn === true) {
        const viewModel = {
            loggedIn: req.session.loggedIn,
            pageTitle: 'Home',
            currentUser: req.session.username,
            "Time": "No time"
        };
        res.render("membersOnly.ejs", viewModel); 
    } else {
        res.send("Please login");
    }
});

APP.post('/auth',function(req,res) {
    let name = req.body.username;
    let password = req.body.password;
    if (name && password) {
         DB_CONN.query('SELECT * FROM users WHERE name=? AND password=?', [name, password]
            ,function(error, results, fields) {
                if(error) console.error(error);
                if(results.length > 0) {
                    console.log("log")
                    req.session.loggedIn = true;
                    req.session.username = name;
                    res.redirect("/members")
                } else {
                    res.send('Invalid user or wrong password');
                }
                res.end();
            }
        );
    } else {
        res.send('Please provide credentials');
        res.close();
    }
})

APP.get('/listMPs', function(req,res) {
    DB_CONN.query("SELECT * FROM mps", function (err, listOfMps) {
        if (err) throw err;
        
        const viewModel = {
            MPsData: listOfMps,
            loggedIn: req.session.loggedIn,
            pageTitle: 'MPs List',
            currentUser: req.session.username
        };
        
        res.render('listMPs', viewModel);
    })
})

APP.get('/addMp', function(req,res) {
        if(req.session.loggedIn === true) {
            res.render('addMP');
        } else {
            res.send('Please be a registered member, if you want to add an MP');
        }
})

APP.get('/admin1', function(req, res) {
    res.send('Admin here')
})
 

APP.get('/students', function(req,res) {
        let arrayOfStudentNames = ['Kamal','Shingai','Carlos','NL'];
        let responseText ='';
        arrayOfStudentNames.forEach(function(student) {
            responseText += student+" | ";
        });
        res.send(responseText);
})



APP.listen(3002); 
console.log('Node APP is running on port 3002');
