
$(function(){

   
    doAjax2()

});


function doAjax2(){

    $.ajax({
    
    url: "mouse_keyboards.json" ,
    crossDomain: true , 
    dataType: "json" , 
    success:function(json_data){
    console.log(json_data);
    createCombo(json_data);
    
    },
    error:function(err){
        console.log("something went wrong...");
    }
    
    });
    
    }



   

    function createCombo(json_data){


        for(var i in json_data){
        
            var item = json_data[i];
        
            var combo = new Combo(id_parent2,item.name,item.brand,item.warranty,item.price,item.img,i);
            combo.addToHtml2();
        
            
          
        
        }
        
        
        
            }
        
        
        


