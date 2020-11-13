
function lightScater(xloc,yloc,size,num,r,g,b) {
    
    this.xloc = xloc;
    this.yloc = yloc;
    this.size = size;
    this.num = num;
    this.r = r;
    this.g = g;
    this.b = b;
    this.trans = 255/num;
    this.steps = size/num;

    for (var i = 0; i < num; i=i+1) {
        Fill(r,g,b,trans);
        ellipse(xloc,yloc,size-i*steps,size-i*steps);
    }
}