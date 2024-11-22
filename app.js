var express = require('express'); 
var session = require('express-session')
var conn = require('./dbConfig')
var app = express();

app.set('view engine','ejs'); 
app.use(session({
    secret: process.env.SESSION_SECRET || 'yoursecret',
    resave: true,
    saveUninitialized: true
}));
app.use('/public', express.static('public'))

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/home', function (req, res){ 
    res.render("home", {loggedIn: req.session.loggedIn }); 
    }); 

app.get('/', function (req, res){ 
res.render("home", {loggedIn: req.session.loggedIn }); 
}); 
app.get('/auckland', function (req, res){ 
    res.render("auckland", {loggedIn: req.session.loggedIn }); 
    });
app.get('/beaches', function (req, res){ 
    res.render("beaches", {loggedIn: req.session.loggedIn }); 
    }); 
app.get('/login', function (req, res){ 
    res.render("login.ejs", {loggedIn: req.session.loggedIn }); 
    }); 

app.get('/logout', function (req, res){ 
    req.session.destroy();
    res.redirect("/"); 
    }); 

app.get("/register", function(req, res) {
    console.log("bp")
    console.log("Debug")
    res.render("register.ejs",{loggedIn: req.session.loggedIn });
})

app.get("/deleteUser", function(req, res) {
    res.send("delete user is called");
})

app.post("/register", function(req, res) {
    let name = req.body.name;
    let password = req.body.password;
    let email = req.body.email;
    console.log("Debug")
    const insert = `INSERT INTO users (name, password,email) VALUES ("${name}", "${password}", "${email}")`;
    conn.query(insert, function(err, result) {
        if(err) throw err;
        console.log('user registered');
        
    })
    res.redirect("/home"); 
})

app.get('/members', function (req, res){ 
    if(req.session.loggedIn === true) {
        res.render("membersOnly.ejs",{loggedIn: req.session.loggedIn}); 
    } else {
        res.send("Please login");
    }
});

app.post('/auth',function(req,res) {
    let name = req.body.username;
    let password = req.body.password;
    if (name && password) {
        conn.query('SELECT * FROM users WHERE name=? AND password=?', [name, password]
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

app.get('/listMPs', function(req,res) {
    conn.query("SELECT * FROM mps", function (err, listOfMps) {
        if (err) throw err;
        console.log(listOfMps);        
        res.render('listMPs', { MPsData:listOfMps, loggedIn:req.session.loggedIn});
    })
})

app.get('/addMp', function(req,res) {
        if(req.session.loggedIn === true) {
            res.render('addMP');
        } else {
            res.send('Please be a registered member, if you want to add an MP');
        }
})

app.get('/admin1', function(req, res) {
    res.send('Admin here')
})
 

app.get('/students', function(req,res) {
        let arrayOfStudentNames = ['Kamal','Shingai','Carlos','NL'];
        let responseText ='';
        arrayOfStudentNames.forEach(function(student) {
            responseText += student+" | ";
        });
        res.send(responseText);
})



app.listen(3001); 
console.log('Node app is running on port 3001');
