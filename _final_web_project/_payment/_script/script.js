


var hover=true;

$(document).ready(function(){




    $(".container").mouseover( function(){
        if(hover){
		$(".container").animate({
			opacity: '+=0.2',
		
            width: '+=250px',
          
        }, "slow");

   hover=false;
    }
	});
    
});




var email1;
var email2;

var isSame=false;


window.onload = function (){

    

}

function checkSame(){
    email1=id_email1.value;
    email2=id_email2.value;

    if(email1==email2){
       return isSame=true;
    }

}


function onCheckEmail(){
    id_email1.style.color=("red");
    id_email2.style.color=("red");
    checkSame()
if(isSame){

    id_email1.style.color=("green");
    id_email2.style.color=("green");


}
isSame=false;
}




function onSaveInfo(){

var user_obj={

        name: id_name.value,
        lastName: id_last.value,
        email: id_email1.value,
        creditCard: id_credit.value,
        digit: id_digit.value,
        personalId: id_pId.value,
        country: id_country.value,
        city: id_city.value,
        street: id_street.value,
        zip: id_zip.value


}
localStorage.setItem("userData",JSON.stringify(user_obj));

}