if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
}
require('dotenv').config();
const path = require('path');
// const db = require("./models");  // [ERE] for MySQL
const express = require('express');
const bodyParser = require('body-parser');

const morgan = require('morgan');  // Morgan is HTTP request logger middleware for Node.js
// const session = require('express-session');
// const passport = require('./passport');
const app = express();
var cors = require('cors');
const PORT = process.env.PORT || 3001;
// const SocketIO = require('socket.io');
const http = require('http');
const server = http.createServer(app);

// console.log("process vars: ", process.env);
//cors unblocked
// app.use(cors());


  //CORS unblock
//   app.use(cors({
// 	credentials: true,
// 	origin: ['http://localhost:3001'] // add in production link here after deployment: 'https://radiant-atoll-34503.herokuapp.com/'],
//   }));

// Loading environmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}
require('dotenv').config()

// ===== Middleware ====
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)

app.use(bodyParser.json())
// app.use(
// 	session({
// 		secret: process.env.APP_SECRET || 'this is the default passphrase',
// 		// store: new MongoStore({ mongooseConnection: dbConnection }),
// 		resave: false,
// 		saveUninitialized: false
// 	})
// )

// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	res.header('Access-Control-Allow-Credentials: true')
// 	next();
//   });



// ===== Passport ====
// app.use(passport.initialize())
// app.use(passport.session()) // will call the deserializeUser

// ===== testing middleware =====
// app.use(function(req, res, next) {
// 	console.log('===== passport user =======')
// 	console.log(req.session)
// 	console.log(req.user)
// 	console.log('===== END =======')
// 	next()
// })

// console.log("Google testing next --->");
// testing

// app.get(
// 	'/auth/google/callback',
// 	(req, res, next) => {
// 		console.log(`req.user: ${req.user}`)
// 		console.log('======= /auth/google/callback was called! =====');
// 		next();
// 	},
// 	passport.authenticate('google', { failureRedirect: '/login' }),
// 	(req, res) => {
// 		console.log("server.js.  Redirect to Home");
// 		res.redirect('/')
// 	}
// )


console.log("process.env.NODE_ENV:+:+>  ", process.env.NODE_ENV);
// ==== if its production environment!
if (process.env.NODE_ENV === 'production') {
	const path = require('path')
	console.log('=============YOU ARE IN THE PRODUCTION ENV=====================');
	app.use('/static', express.static(path.join(__dirname, './client/build/static')))
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, './client/build/'))
	})
}

/* Express app ROUTING */
console.log("hitting routes");
// app.use('/auth', require('./auth'))
// require('./routes/getRoutes')(app)
app.use('/', require('./routes/postRoutes'));
// require('./routes/postRoutes')(app)
// require('./routes/put-routes')(app)
// require('./routes/del-routes')(app)
console.log("getting to Error handling")
// ====== Error handler ====
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})

// const syncOptions = { force: false };



// ==== Starting Server ======

// db.sequelize.sync(syncOptions).then(function() {
	server.listen(PORT, () => {
		console.log(`==> 🌎 App listening on PORT: ${PORT}`);
		// badgeChron.run();
	//   console.log(
	// 	"==> 🌎  App Listening on port 3000. Visit http://localhost:3000/ in your browser.",
	//   );
	})
// }).catch(function (err) {
//     console.log(err, "Something went wrong with the Database Update!")
// });




