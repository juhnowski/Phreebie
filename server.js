4var nodemailer = require("nodemailer");
var dateFormat = require('dateformat');

var dt_fmt_str = "dddd, mmmm dS, yyyy, h:MM:ss TT";

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "qqq@gmail.com",
        pass: "qqq"
    }
});

var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.get("/",function(req,res){
    console.log(req.host);
});

app.post('/request_form',function(req,res){
if(!req.body.email_contacts || req.body.email_contacts.length==0) {
	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][request_form]  Cообщение  без e-mail от: " + req.ip);
    res.redirect('http://phreebie.ru/error.html');
 } else {
	mailOptions = {
    	from: "Phreebie.net ✔ <info@phreebie.net>", // sender address
    	to: "info@phreebie.net"+", "+req.body.email_contacts,
    	subject: "Request Accepted ✔", // Subject line
    	text: "Thank you for contacting us. We will review your claim in the near future and let you know the result specified in the application for contact information. Phreebie LLC",
    	html: "<h1>Contacts Request</h1>"+
    	      "<h2>Name</h2><br><p>"+req.body.name_contacts+"</p><br>"+
    	      "<h2>Email:</h2><br><p>"+req.body.email_contacts+"</p><br>"+
    	      "<h2>Description:</h2><br><p>"+req.body.message_contacts+"</p><br>"+
    	      "<b>Thank you for contacting us!</b><br>"+
    	      "We will review your claim in the near future and let you know the result specified in the application for contact information."+
    	      "<br><br>Phreebie LLC"
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
    	if(error){
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][small] " + error + " сообщение от: "+req.body.email_contacts);
    	}else{
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][small] Получено сообщение от: " + req.body.email_contacts); //response.message
    	}
	});
	res.redirect('http://phreebie.ru/thanks.html');
 }
});

app.post('/small',function(req,res){
if(!req.body.small_email_contacts || req.body.small_email_contacts.length==0) {
	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][small]  Cообщение  без e-mail от: " + req.ip);
    res.redirect('http://phreebie.ru/error.html');
 } else {
	mailOptions = {
    	from: "Phreebie.net ✔ <info@phreebie.net>", // sender address
    	to: "info@phreebie.net"+", "+req.body.small_email_contacts,
    	subject: "Request Accepted ✔", // Subject line
    	text: "Thank you for contacting us. We will review your claim in the near future and let you know the result specified in the application for contact information. Phreebie LLC",
    	html: "<h1>Request for tariff <b>Small</b></h1>"+
    	      "<h2>Email</h2><br><p>"+req.body.small_email_contacts+"</p><br>"+
    	      "<h2>Pnone:</h2><br><p>"+req.body.small_phone_contacts+"</p><br>"+
    	      "<h2>Description:</h2><br><p>"+req.body.small_description+"</p><br>"+
    	      "<b>Thank you for contacting us!</b><br>"+
    	      "We will review your claim in the near future and let you know the result specified in the application for contact information."+
    	      "<br><br>Phreebie LLC"
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
    	if(error){
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][small] " + error + " сообщение от: "+req.body.small_email_contacts);
    	}else{
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][small] Получено сообщение от: " + req.body.small_email_contacts); //response.message
    	}
	});
	res.redirect('http://phreebie.ru/thanks.html');
 }
});

app.post('/medium',function(req,res){
if(!req.body.medium_email_contacts || req.body.medium_email_contacts.length==0) {
	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][medium]  Cообщение  без e-mail от: " + req.ip);
    res.redirect('http://phreebie.ru/error.html');
 } else {
	mailOptions = {
    	from: "Phreebie.net ✔ <info@phreebie.net>", // sender address
    	to: "info@phreebie.net"+", "+req.body.medium_email_contacts,
    	subject: "Request Accepted ✔", // Subject line
    	text: "Thank you for contacting us. We will review your claim in the near future and let you know the result specified in the application for contact information. Phreebie LLC",
    	html: "<h1>Request for tariff <b>Medium</b></h1>"+
    	      "<h2>Email</h2><br><p>"+req.body.medium_email_contacts+"</p><br>"+
    	      "<h2>Pnone:</h2><br><p>"+req.body.medium_phone_contacts+"</p><br>"+
    	      "<h2>Description:</h2><br><p>"+req.body.medium_description+"</p><br>"+
    	      "<b>Thank you for contacting us!</b><br>"+
    	      "We will review your claim in the near future and let you know the result specified in the application for contact information."+
    	      "<br><br>Phreebie LLC"
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
    	if(error){
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][medium] " + error + " сообщение от: " + req.body.medium_email_contacts);
    	}else{
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][medium] Получено сообщение от: " + req.body.medium_email_contacts);
    	}
	});
	res.redirect('http://phreebie.ru/thanks.html');
 }
});

app.post('/unlimited',function(req,res){
if(!req.body.unlimited_email_contacts || req.body.unlimited_email_contacts.length==0) {
	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][unlimited]  Cообщение  без e-mail от: " + req.ip);
    res.redirect('http://phreebie.ru/error.html');
 } else {
	mailOptions = {
    	from: "Phreebie.net ✔ <info@phreebie.net>", // sender address
    	to: "info@phreebie.net"+", "+req.body.unlimited_email_contacts,
    	subject: "Request Accepted ✔", // Subject line
    	text: "Thank you for contacting us. We will review your claim in the near future and let you know the result specified in the application for contact information. Phreebie LLC",
    	html: "<h1>Request for tariff <b>Unlimited</b></h1>"+
    	      "<h2>Email</h2><br><p>"+req.body.unlimited_email_contacts+"</p><br>"+
    	      "<h2>Pnone:</h2><br><p>"+req.body.unlimited_phone_contacts+"</p><br>"+
    	      "<h2>Description:</h2><br><p>"+req.body.unlimited_description+"</p><br>"+
    	      "<b>Thank you for contacting us!</b><br>"+
    	      "We will review your claim in the near future and let you know the result specified in the application for contact information."+
    	      "<br><br>Phreebie LLC"
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
    	if(error){
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][unlimited] " + error + " сообщение от: " + req.body.unlimited_email_contacts);
    	}else{
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][unlimited] Получено сообщение от: " + req.body.unlimited_email_contacts);
    	}
	});
	res.redirect('http://phreebie.ru/thanks.html');
 }
});

app.post('/adv',function(req,res){
if(!req.body.email || req.body.email.length==0) {
	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][adv]  Cообщение  без e-mail от: " + req.ip);
    res.redirect('http://phreebie.ru/error.html');
 } else {
	mailOptions = {
    	from: "Phreebie.net ✔ <info@phreebie.net>", // sender address
    	to: "info@phreebie.net"+", "+req.body.email,
    	subject: "Request Accepted ✔", // Subject line
    	text: "Thank you for contacting us. We will review your claim in the near future and let you know the result specified in the application for contact information. Phreebie LLC",
    	html: "<h1>Request for Advertising Campaign</h1>"+
    	      "<h2>Email</h2><br><p>"+req.body.email+"</p><br>"+
    	      "<b>Thank you for contacting us!</b><br>"+
    	      "We will review your claim in the near future and let you know the result specified in the application for contact information."+
    	      "<br><br>Phreebie LLC"
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
    	if(error){
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][adv] " + error + " сообщение от: " + req.body.email);
    	}else{
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][adv] Получено сообщение от: " + req.body.email);
    	}
	});
	res.redirect('http://phreebie.ru/thanks.html');
 }
});

app.post('/sw',function(req,res){
if(!req.body.email || req.body.email.length==0) {
	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][sw]  Cообщение  без e-mail от: " + req.ip);
    res.redirect('http://phreebie.ru/error.html');
 } else {
	mailOptions = {
    	from: "Phreebie.net ✔ <info@phreebie.net>", // sender address
    	to: "info@phreebie.net"+", "+req.body.email,
    	subject: "Request Accepted ✔", // Subject line
    	text: "Thank you for contacting us. We will review your claim in the near future and let you know the result specified in the application for contact information. Phreebie LLC",
    	html: "<h1>Request for Software Development</h1>"+
    	      "<h2>Email</h2><br><p>"+req.body.email+"</p><br>"+
    	      "<b>Thank you for contacting us!</b><br>"+
    	      "We will review your claim in the near future and let you know the result specified in the application for contact information."+
    	      "<br><br>Phreebie LLC"
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
    	if(error){
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][sw] " + error + " сообщение от: " + req.body.email);
    	}else{
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][sw] Получено сообщение от: " + req.body.email);
    	}
	});
	res.redirect('http://phreebie.ru/thanks.html');
 }
});

app.post('/hw',function(req,res){
if(!req.body.email || req.body.email.length==0) {
	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][hw]  Cообщение  без e-mail от: " + req.ip);
    res.redirect('http://phreebie.ru/error.html');
 } else {
	mailOptions = {
    	from: "Phreebie.net ✔ <info@phreebie.net>", // sender address
    	to: "info@phreebie.net"+", "+req.body.email,
    	subject: "Request Accepted ✔", // Subject line
    	text: "Thank you for contacting us. We will review your claim in the near future and let you know the result specified in the application for contact information. Phreebie LLC",
    	html: "<h1>Request for Hardware Integration</h1>"+
    	      "<h2>Email</h2><br><p>"+req.body.email+"</p><br>"+
    	      "<b>Thank you for contacting us!</b><br>"+
    	      "We will review your claim in the near future and let you know the result specified in the application for contact information."+
    	      "<br><br>Phreebie LLC"
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
    	if(error){
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][hw] " + error + " сообщение от: " + req.body.email);
    	}else{
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][hw] Получено сообщение от: " + req.body.email);
    	}
	});
	res.redirect('http://phreebie.ru/thanks.html');
 }
});

app.post('/hosting_small',function(req,res){
if(!req.body.small_email_contacts || req.body.small_email_contacts.length==0) {
	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][hosting_small]  Cообщение  без e-mail от: " + req.ip);
    res.redirect('http://phreebie.ru/error.html');
 } else {
	mailOptions = {
    	from: "Phreebie.net ✔ <info@phreebie.net>", // sender address
    	to: "info@phreebie.net"+", "+req.body.small_email_contacts,
    	subject: "Request Accepted ✔", // Subject line
    	text: "Thank you for contacting us. We will review your claim in the near future and let you know the result specified in the application for contact information. Phreebie LLC",
    	html: "<h1>Request for Hosting tariff <b>Small</b></h1>"+
    	      "<h2>Email</h2><br><p>"+req.body.small_email_contacts+"</p><br>"+
    	      "<h2>Pnone:</h2><br><p>"+req.body.small_phone_contacts+"</p><br>"+
    	      "<h2>Description:</h2><br><p>"+req.body.small_description+"</p><br>"+
    	      "<b>Thank you for contacting us!</b><br>"+
    	      "We will review your claim in the near future and let you know the result specified in the application for contact information."+
    	      "<br><br>Phreebie LLC"
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
    	if(error){
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][hosting_small] " + error + " сообщение от: "+req.body.small_email_contacts);
    	}else{
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][hosting_small] Получено сообщение от: " + req.body.small_email_contacts); //response.message
    	}
	});
	res.redirect('http://phreebie.ru/thanks.html');
 }
});

app.post('/hosting_medium',function(req,res){
if(!req.body.medium_email_contacts || req.body.medium_email_contacts.length==0) {
	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][hosting_medium]  Cообщение  без e-mail от: " + req.ip);
    res.redirect('http://phreebie.ru/error.html');
 } else {
	mailOptions = {
    	from: "Phreebie.net ✔ <info@phreebie.net>", // sender address
    	to: "info@phreebie.net"+", "+req.body.medium_email_contacts,
    	subject: "Request Accepted ✔", // Subject line
    	text: "Thank you for contacting us. We will review your claim in the near future and let you know the result specified in the application for contact information. Phreebie LLC",
    	html: "<h1>Request for hosting tariff <b>Medium</b></h1>"+
    	      "<h2>Email</h2><br><p>"+req.body.medium_email_contacts+"</p><br>"+
    	      "<h2>Pnone:</h2><br><p>"+req.body.medium_phone_contacts+"</p><br>"+
    	      "<h2>Description:</h2><br><p>"+req.body.medium_description+"</p><br>"+
    	      "<b>Thank you for contacting us!</b><br>"+
    	      "We will review your claim in the near future and let you know the result specified in the application for contact information."+
    	      "<br><br>Phreebie LLC"
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
    	if(error){
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][hosting_medium] " + error + " сообщение от: " + req.body.medium_email_contacts);
    	}else{
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][hosting_medium] Получено сообщение от: " + req.body.medium_email_contacts);
    	}
	});
	res.redirect('http://phreebie.ru/thanks.html');
 }
});

app.post('/hosting_unlimited',function(req,res){
if(!req.body.unlimited_email_contacts || req.body.unlimited_email_contacts.length==0) {
	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][hosting_unlimited]  Cообщение  без e-mail от: " + req.ip);
    res.redirect('http://phreebie.ru/error.html');
 } else {
	mailOptions = {
    	from: "Phreebie.net ✔ <info@phreebie.net>", // sender address
    	to: "info@phreebie.net"+", "+req.body.unlimited_email_contacts,
    	subject: "Request Accepted ✔", // Subject line
    	text: "Thank you for contacting us. We will review your claim in the near future and let you know the result specified in the application for contact information. Phreebie LLC",
    	html: "<h1>Request for hosting tariff <b>Unlimited</b></h1>"+
    	      "<h2>Email</h2><br><p>"+req.body.unlimited_email_contacts+"</p><br>"+
    	      "<h2>Pnone:</h2><br><p>"+req.body.unlimited_phone_contacts+"</p><br>"+
    	      "<h2>Description:</h2><br><p>"+req.body.unlimited_description+"</p><br>"+
    	      "<b>Thank you for contacting us!</b><br>"+
    	      "We will review your claim in the near future and let you know the result specified in the application for contact information."+
    	      "<br><br>Phreebie LLC"
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
    	if(error){
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][hosting_unlimited] " + error + " сообщение от: " + req.body.unlimited_email_contacts);
    	}else{
        	console.log("[" + dateFormat(new Date(), dt_fmt_str) + "][hosting_unlimited] Получено сообщение от: " + req.body.unlimited_email_contacts);
    	}
	});
	res.redirect('http://phreebie.ru/thanks.html');
 }
});


app.use(function(err,req,res,next){
	console.error(err.stack);
	res.send(500,'У нас что-то сломалось. Ваша заявка важна для нас. Пожалуйста позвоните по телефону +7-908-154-20-43');
});

var server = app.listen(9000, function(){
	console.log("Phreebie: Listening on port %d", server.address().port);
});
