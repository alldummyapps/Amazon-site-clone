

var sum=0;
var counter=0;


$(function(){

   

})



function Laptops(_parent,_name,_subtitle,_cpu,_graphics,_ram,_screen,_storage,_price,_description,_img,_cell){

this.parent = _parent;    

this.name = _name;
this.subtitle = _subtitle;

this.cpu = _cpu;
this.graphics = _graphics;
this.ram = _ram;
this.screen = _screen;

this.storage = _storage;
this.price = _price*1;
this.description = _description;
this.img = _img;
this.cell = _cell;



}


Laptops.prototype.addToHtml = function(){
    

    var newSection=$("<div class='sec"+this.cell+"'></div>");
    $(this.parent).append(newSection);

var newBox = $("<div id='uniq"+this.cell+"' class='box uniq"+this.cell+"'></div>");
$(newSection).append(newBox);


var insideBox=$("<div class='insideImg'<div>")
newBox.append(insideBox)


var insideBoxTitle=$("<div class='insideTitle'<div>")
newBox.append(insideBoxTitle)


var insideBox1=$("<div class='insideLeft'</div>")
newBox.append(insideBox1)
var insideBox2=$("<div class='insideRight'</div>")
newBox.append(insideBox2)



var newImg = ("<img src='"+this.img+"'>");
$(insideBox).append(newImg);

$(insideBoxTitle).append("<h2>"+this.name+"</h2>");
$(insideBoxTitle).append("<h3>"+this.subtitle+"</h3>");


$(insideBox1).append("<strong>About " + this.name+":</strong>");
$(insideBox1).append("<div>"+this.description+"</div>");




$(insideBox2).append("<div><strong>CPU:</strong> "+this.cpu+ "</div>");
$(insideBox2).append("<div ><strong>Graphics:</strong> "+this.graphics+"</div>");
$(insideBox2).append("<div><strong>RAM:</strong> "+this.ram+" </div>");
$(insideBox2).append("<div ><strong> Screen Size:</strong> "+this.screen+"</div>");
$(insideBox2).append("<div><strong>Storage:</strong> "+this.storage+" </div>");
$(insideBox2).append("<div ><strong> price:</strong> $"+this.price+" </div>");




$(".box2").append("<div class='tept third"+this.cell+"'></div>");






$(".sec"+this.cell).on("click",function(){
   

    var temp = $(".uniq"+this.cell);

$(".third"+this.cell).prepend(temp);

sum+=this.price;
$("#id_sum").html("$"+sum.toFixed(2));



counter+=1;
$(".cartItems").html(counter);

}.bind(this));



$(".third"+this.cell).on("click",function(){

   

    var temp = $(".uniq"+this.cell);

    $(".sec"+this.cell).prepend(temp);

sum-=this.price;
$("#id_sum").html("$"+sum.toFixed(2));


counter-=1;
$(".cartItems").html(counter);



}.bind(this));













$(".cartBtnReset").on("click",function(){
  
    location.reload();

}.bind(this));


$(".cartBtnPay").on("click",function(){
  
    var temp2= $(".box2");
$(".dark_box").prepend(temp2);
$(".box2").css("position","relative");
$(".box2").css("width","100%");
$(".box2").css("height","20%");
$(".box2").css("margin-left","0%");
$(".box3").css("display","block");
$(".box").css("display","block");


    $("#dark_win").show(600);



    

}.bind(this))


$("#id_darkbtn").on("click",function(){
   

    $(".dark").hide(600);
    var temp = $(".box2");
var temp2 = $(".h2a");
    
    $(".cart").prepend(temp);
    $(".cart").prepend(temp2);
});


$("#id_darkbtn2").on("click",function(){

alert("Redirecting to Purchase Page...");
window.location.replace("../_payment/pay_page.html");
$("#.darkbtn2").off("click");

});



$('.departmentsSlide').on("click",function() {   

    $('.slideDiv').slideDown("slow");


});

$('.slideDiv').mouseleave(function() {   
    $('.slideDiv').slideUp("slow");
});


$('.cartSlide').on("click",function() {   

    $('.cart').slideDown("slow");


});

$('.cart').mouseleave(function() {   
    $('.cart').slideUp("slow");
});





$(".backToTop").on("click",function(){

        $("html, body").animate({scrollTop: 0}, 0);
   
        
});



$('.translateDiv').on("click",function() {   

    $('.slideLang').slideDown("slow");


});
$('.slideLang').mouseleave(function() {   
    $('.slideLang').slideUp("slow");
});




$('.engButton').on("click",function() {   
    window.location.replace("../_index/index.html");
   



});





}