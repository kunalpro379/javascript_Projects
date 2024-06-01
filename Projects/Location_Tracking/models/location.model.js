class LocationModel{
    constructor(){
        this.location = {lat:0,lng:0};
    }
    setLocation(lat,lng){
         this.location={lat,lng};
    }
    getLocation(lat,lng){
        return this.location;
   }
}
module.exports=LocationModel;
