let ch;
let a;
let b;
let c;
let d;

let e;
let f;
let g;
let h;
let i;

let j;
let k;
let l;
let m;
let n;
let o;



let x;
let y;



function preload() {
  ch = loadImage('images/myname_small.png');
  a = loadImage('images/cho_small.png');
  b = loadImage('images/o_small.png');
  c = loadImage('images/ng.png');
  d = loadImage('images/ng_01.png');

  e = loadImage('images/chong01-b.png');
  f = loadImage('images/chong02-b.png');
  g = loadImage('images/chong03-b.png');
  h = loadImage('images/chong04-b.png');
  i = loadImage('images/chong05-b.png');
    
  j = loadImage('images/han_kor-12.png');
  k = loadImage('images/han_kor-13.png');
  l = loadImage('images/han_kor-14.png');
  m = loadImage('images/han_kor-15.png');
  n = loadImage('images/han_kor-16.png');
  o = loadImage('images/han_kor-18.png');

  p = loadImage('images/han_eng-01.png');
  q = loadImage('images/han_eng-02.png');
  r = loadImage('images/han_eng-03.png');
  s = loadImage('images/han_eng-04.png');
  t = loadImage('images/han_eng-05.png');

  u = loadImage('images/ki_kor-33.png');
  v = loadImage('images/ki_kor-34.png');
  w = loadImage('images/ki_kor-35.png');
  z = loadImage('images/ki_kor-36.png');
  ki = loadImage('images/ki_kor-37.png');

  kione = loadImage('images/ki_eng-38.png');
  kitwo = loadImage('images/ki_eng-39.png');
  kithree = loadImage('images/ki_eng-40.png');
  kifour = loadImage('images/ki_eng-41.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  
}

function draw() {
  let count = int(random (0,6));

  if(count == 0) {
    background(255);
   //cho
    x = random(100, 450);
    y = random(10, 200);
    push();
    image(ch, x,y);
    //img.resize(random(100,400), 0);
    pop();

    //cho
    x = random(450, 700);
    y = random(10, 200);
    push();
    image(a, x,y);
    //a.resize(random(100,400), 0);
    pop();

    //cho
    x = random(700, 1000);
    y = random(10, 200);
    push();
    image(b, x,y);
    //b.resize(random(100,400), 0);
    pop();

    //o
    x = random(700, 1000);
    y = random(250, 600);
    push();
    image(d, x,y);
    //d.resize(random(100,400), 0);
    pop();

   //o
    x = random(700, 1000);
    y = random(300, 600);
    push();
    image(c, x,y);
    //c.resize(random(100,400), 0);
    pop();

  
    

    } else if(count == 1) {
    background(0);
//c
    x = random(100, 250);
    y = random(10, 200);
    push();
    image(e, x,y);
    //img.resize(random(100,500), 0);
    pop();
//h
    x = random(300, 500);
    y = random(10, 200);
    push();
    image(f, x,y);
    //img.resize(random(100,400), 0);
    pop();
//o n
    x = random(550, 800);
    y = random(10, 200);
    push();
    image(g, x,y);
    //img.resize(random(100,400), 0);
    pop();
//g
    x = random(800, 1000);
    y = random(10, 200);
    push();
    image(h, x,y);
    //img.resize(random(100,500), 0);
    pop();
//g
    x = random(700, 900);
    y = random(300, 600);
    push();
    image(i, x,y);
    //img.resize(random(100,400), 0);
    pop();

    }
    
else if(count == 2) {
    background(255); 
//j    
    x = random(210, 350);
    y = random(250, 350);
    push();
    image(j, x,y);
    //img.resize(random(100,500), 0);
    pop();
//k
    x = random(550, 700);
    y = random(100, 300);
    push();
    image(k, x,y);
    //img.resize(random(100,400), 0);
    pop();
//l
    x = random(700, 900);
    y = random(150, 250);
    push();
    image(l, x,y);
    //img.resize(random(100,400), 0);
    pop();
//m
    x = random(325, 700);
    y = random(400, 550);
    push();
    image(m, x,y);
    //img.resize(random(100,500), 0);
    pop();
//n
    x = random(400, 750);
    y = random(450, 600);
    push();
    image(n, x,y);
    //img.resize(random(100,400), 0);
    pop();

//o
    x = random(205, 300);
    y = random(0, 100);
    push();
    image(o, x,y);
    //img.resize(random(100,400), 0);
    pop();

    }

else if(count == 3) {
    background(0,0,255);  

//p
       x = random(50, 300);
       y = random(10, 200);
       push();
       image(p, x,y);
       //img.resize(random(100,400), 0);
       pop();
   
//q
       x = random(250, 500);
       y = random(10, 200);
       push();
       image(q, x,y);
       //a.resize(random(100,400), 0);
       pop();
   
//r
       x = random(550, 700);
       y = random(10, 200);
       push();
       image(r, x,y);
       //b.resize(random(100,400), 0);
       pop();
   
//s
       x = random(850, 1100);
       y = random(50, 300);
       push();
       image(s, x,y);
       //d.resize(random(100,400), 0);
       pop();
   
//t
       x = random(850, 1100);
       y = random(300, 600);
       push();
       image(t, x,y);
       //c.resize(random(100,400), 0);
       pop();
   
}
else if(count == 4) {
    background(255);  

//u
       x = random(50, 150);
       y = random(10, 150);
       push();
       image(u, x,y);
       //img.resize(random(100,400), 0);
       pop();

//v
x = random(350, 450);
y = random(20, 200);
push();
image(v, x,y);
//a.resize(random(100,400), 0);
pop();

//w
x = random(350, 450);
y = random(350, 470);
push();
image(w, x,y);
//b.resize(random(100,400), 0);
pop();

//z
x = random(750, 900);
y = random(50, 200);
push();
image(z, x,y);
//d.resize(random(100,400), 0);
pop();

//ki
x = random(750, 900);
y = random(300, 550);
push();
image(ki, x,y);
//c.resize(random(100,400), 0);
pop();

}
else if(count == 5) {
background(238, 210, 2);

//kione
x = random(200, 350);
y = random(50, 250);
push();
image(kione, x,y);
//img.resize(random(100,400), 0);
pop();

//kitwo
x = random(470, 600);
y = random(50, 250);
push();
image(kitwo, x,y);
//a.resize(random(100,400), 0);
pop();

//kithree
x = random(800, 1050);
y = random(80, 150);
push();
image(kithree, x,y);
//b.resize(random(100,400), 0);
pop();

//kifour
x = random(800, 1050);
y = random(350, 500);
push();
image(kifour, x,y);
//d.resize(random(100,400), 0);
pop();


}
}


function mousePressed() {
  redraw();
}

