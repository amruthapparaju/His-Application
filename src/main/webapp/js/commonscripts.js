function getCurrentDateOnly(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd
} 
if(mm<10){
    mm='0'+mm
} 
var today = dd+'/'+mm+'/'+yyyy;
return today;

}
function getPreviousDateOnly(){
	var date = new Date();
	var monthStartDay = new Date(date.getFullYear(), date.getMonth()-1, 1);
	var monthEndDay =new Date().setDate(0);
	return monthStartDay+""+monthEndDay;

	}
function getplaceHolder(placecode){
		//ajax call
		$.ajax({
			'async': false,
	        'type': "POST",
	        'global': false,
			url : "getPlaceHolder.do?placecode="+placecode,
			success : function(data) {
				 tmp = data;
			},
			error : function(jqXHR, exception) {
				alert(exception);
			}
		});
		return tmp;
	}

function isDecimalKey(event)
{
	var data = this.value;
	if((event.charCode>= 48 && event.charCode <= 57) || event.charCode== 46 ||event.charCode == 0){
		if(data.indexOf('.') > -1){
 			if(event.charCode== 46)
  				event.preventDefault();
		}
	}else{
		event.preventDefault();
	}
}
function isNumberKey(evt)
{
   var charCode = (evt.which) ? evt.which : evt.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57)){
      return false;
   }
   return true;
}
function  isAplhabetKey(event){
	var inputValue = event.charCode;
    if(!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)){
        event.preventDefault();
    }
}
function IsAlphaNumeric(key) {
	 var keycode = (key.which) ? key.which : key.keyCode;
	    if (( keycode == 9) || ( keycode == 8 || keycode == 46 ) ||(keycode >= 65 && keycode <= 90) || (keycode >= 97 && keycode <= 122) || (keycode >= 48 && keycode <= 57))
	      return true;
	    else
	      return false;
	  }