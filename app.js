const express 		= require('express'),
	  app     		= express(),
	  bodyParser 	= require('body-parser'),
	  mongoose 		= require('mongoose');

mongoose.connect("mongodb+srv://mpritch:marzy596@cluster0-jnl8r.mongodb.net/test?retryWrites=true", {
    useNewUrlParser: true,
    useCreateIndex: true
});

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Portfolio server has started");
});