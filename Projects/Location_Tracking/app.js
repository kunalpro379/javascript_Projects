const express = require('express');
const bodyParser = require('body-parser');
//const app = express();
const ejs = require('ejs');
const LocationModel = require('./models/location.model');
const LocationPresentor = require('./presentorLocation.js/presentorLocation');
const app = express();
const port = 3000;

//se t view engine
const view={
    render:(location)=>{
        console.log('Location Updated : ',location);
    }
}
const model =new LocationModel();   
const presentor=new LocationPresentor(model,view);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('index',{location:model.getLocation()});
}
);
app.post('/location', (req, res) => {
const {lat,lng}=req.body;
presentor.setLocation(lat,lng);
res.redirect('/');
}
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}   
);