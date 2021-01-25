var database,form;

function setup(){
    var canvas = createCanvas(400,400);
    database=firebase.database();
    form=new Form();
}

function draw(){
    background("");
    form.display();
}