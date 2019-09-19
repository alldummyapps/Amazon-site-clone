
$(function(){

   
    doAjax()

});


function doAjax(){

    $.ajax({
    
    url: "laptops.json" ,
    crossDomain: true , 
    dataType: "json" , 
    success:function(json_data){
    console.log(json_data);
    createLaptops(json_data);
    
    },
    error:function(err){
        console.log("something went wrong...");
    }
    
    });
    
    }



    function createLaptops(json_data){


for(var i in json_data){

    var item = json_data[i];

    var newLaptop = new Laptops(id_parent,item.name,item.subtitle,item.cpu,item.graphics,item.ram,item.screen,item.storage,item.price,item.description,item.img,i);
    newLaptop.addToHtml();

    
  

}



    }



