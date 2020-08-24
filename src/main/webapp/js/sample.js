    $(document).ready(function (event) {  
  
        var ddlCountry = $('#country');  
        ddlCountry.append($("<option></option>").val('').html('Please Select Country'));  
        $.ajax({  
            url: '/CountryList',  
            type: 'GET',  
            dataType: 'json',  
            success: function (d) {  
                $.each(d, function (stateid, statename) {  
                	$('<option>').val(stateId).text(stateName).appendTo("#stateId");                });  
            },  
            error: function () {  
                alert('Error!');  
            }  
        });  
  
        //State details by country id  
  
        $("#country").change(function () {  
            var CountryId = parseInt($(this).val());  
  
            if (!isNaN(CountryId)) {  
                var ddlState = $('#state');  
                ddlState.empty();  
                ddlState.append($("<option></option>").val('').html('Please wait ...'));  
  
                debugger;  
                $.ajax({  
                    url: '/StateList',  
                    type: 'GET',  
                    dataType: 'json',  
                    data: { CountryId: CountryId },  
                    success: function (d) {  
  
                        ddlState.empty(); // Clear the please wait  
                        ddlState.append($("<option></option>").val('').html('Select State'));  
                        $.each(d, function (i, states) {  
                            ddlState.append($("<option></option>").val(states.StateId).html(states.StateName));  
                        });  
                    },  
                    error: function () {  
                        alert('Error!');  
                    }  
                });  
            }  
  
  
        });  
  
        //City Bind By satate id  
        $("#state").change(function () {  
            var StateId = parseInt($(this).val());  
            if (!isNaN(StateId)) {  
                var ddlCity = $('#city');  
                ddlCity.append($("<option></option>").val('').html('Please wait ...'));  
  
                debugger;  
                $.ajax({  
                    url: '/CityList',  
                    type: 'GET',  
                    dataType: 'json',  
                    data: { stateId: StateId },  
                    success: function (d) {  
  
  
                        ddlCity.empty(); // Clear the plese wait  
                        ddlCity.append($("<option></option>").val('').html('Select City Name'));  
                        $.each(d, function (i, cities) {  
                            ddlCity.append($("<option></option>").val(cities.CityId).html(cities.CityName));  
                        });  
                    },  
                    error: function () {  
                        alert('Error!');  
                    }  
                });  
            }  
  
  
        });  
    });  
