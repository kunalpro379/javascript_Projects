class LocationPresentor{
    constructor(model,view){
            this.model=model;
            this.view=view;
    }
    setLocation(lat,lng){
        this.model.setLocation(lat,lng);
        this.view.render(this.model.getLocation());
    }
}
module.exports=LocationPresentor;