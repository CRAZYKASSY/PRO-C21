class Walls {
    constructor (x,y,w,h) {
        var optionwalls = {
            isStatic : true
        };
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle (x,y,w,h,optionwalls);
        World.add (world,this.body);
    }
    show (){
       var pos = this.body.position;
       push ();
       rectMode (CENTER);
       fill ("YELLOW");
       rect (pos.x, pos.y, this.w, this.h);
       pop ();
   }
}