


function Combo(_parent,_name,_brand,_warranty,_price,_img,_cell){

    this.parent = _parent;    
    
    this.name = _name;
    this.brand = _brand;
    this.warranty = _warranty;
    this.price = _price*1;
    this.img = _img;
    this.cell = _cell;

}


Combo.prototype.addToHtml2 = function (){


    var newSection2=$("<div class='sec2"+this.cell+"'></div>");
    $(this.parent).append(newSection2);

    var newBox3 = $("<div id='uniq2"+this.cell+"' class='box3 uniq2"+this.cell+"'></div>");
    $(newSection2).append(newBox3);



    var insideBox2=$("<div class='insideImg'<div>")
    newBox3.append(insideBox2)
    
    
    var insideBoxTitle2=$("<div class='insideTitle2'<div>")
    newBox3.append(insideBoxTitle2)
    
    
    var insideBox3=$("<div class='insideBottom'</div>")
    newBox3.append(insideBox3)
   
var newImg = ("<img src='"+this.img+"'>");
$(insideBox2).append(newImg);



$(insideBoxTitle2).append("<h2>"+this.name+"</h2>");


$(insideBox3).append("<div><strong>Brand:</strong> "+this.brand+ "</div>");
$(insideBox3).append("<div><strong>Warranty:</strong> "+this.warranty+ "</div>");
$(insideBox3).append("<div><strong>Price:</strong> $"+this.price+ "</div>");

$(".box2").append("<div class='third2"+this.cell+"'></div>");






$(".sec2"+this.cell).on("click",function(){


    var temp = $(".uniq2"+this.cell);

$(".third2"+this.cell).prepend(temp);


sum+=this.price;
$("#id_sum").html("$"+sum.toFixed(2));



counter+=1;
$(".cartItems").html(counter);


}.bind(this));



$(".third2"+this.cell).on("click",function(){

    var temp = $(".uniq2"+this.cell);

    $(".sec2"+this.cell).prepend(temp);


sum-=this.price;
$("#id_sum").html("$"+sum.toFixed(2));


counter-=1;
$(".cartItems").html(counter);


}.bind(this));











$(".keyboardsAndMouse").on("click",function(){
  
   $(".main_box").css("display","none");
   $(".main_box2").css("display","block");
   

}.bind(this));


$(".laptops").on("click",function(){
  
    $(".main_box2").css("display","none");
    $(".main_box").css("display","block");

 
 }.bind(this));



};