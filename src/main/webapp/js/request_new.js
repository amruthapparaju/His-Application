function getadvcasedet(){
	TINY.box.show({iframe: "advCaseDetails.jsp", boxid: 'frameless',
        width: 1000, height: 500, fixed: false, maskid: 'bluemask', maskopacity: 40}
    );
}
function getmaincasedet(){
	//alert("hi");
	TINY.box.show({iframe: "caseDetails.jsp", boxid: 'frameless',
        width: 1000, height: 500, fixed: false, maskid: 'bluemask', maskopacity: 40}
    );
	/* 
	 $.ajax({
	        type: "GET",
	        url: "getCaseDetails.jsp",
	        data: "",
	        dataType: "text",
	        success: function (data) {
	        	//alert(data+"=="+JSON.parse(atob(data.trim())));
	            
	            $.each(JSON.parse(atob(data.trim())), function (k, v) {
	            	var tabstring="<tbody><tr><th colspan='4' class='thstyle'>Main Case Details</th></tr><tr><th colspan='4' class='thstyle' style='text-align:left;'>Primary Details</th></tr><tr><td class='tdstyle'>Case Number</td><td class='tdstyle'>"+v.maincasenum+"</td><td class='tdstyle'>SR Number</td><td class='tdstyle'>"+v.srcasenum+"</td></tr><tr><td class='tdstyle'>Petitioner</td><td class='tdstyle'>"+v.petitioner+"</td><td class='tdstyle'>Respondent</td><td class='tdstyle'>"+v.respondent+"</td></tr><tr><td class='tdstyle'>Petitioner.Adv</td><td class='tdstyle'>"+v.petitioneradv+"</td><td class='tdstyle'>Respondent.Adv</td><td class='tdstyle'>"+v.respondentadv+"</td></tr><tr><td class='tdstyle'>Subject</td><td class='tdstyle'>"+v.subject+"</td><td class='tdstyle'>District</td><td class='tdstyle'>"+v.district+"</td></tr><tr><td class='tdstyle'>Filing Date</td><td class='tdstyle'>"+v.filingdate+"</td><td class='tdstyle'>Reg.Date</td><td class='tdstyle'>"+v.registrationdate+"</td></tr><tr><td class='tdstyle'>Posting Stage</td><td class='tdstyle'>"+v.postingstage+"</td><td class='tdstyle'>Listing Date</td><td class='tdstyle'>"+v.nexthdate+"</td></tr><tr><td class='tdstyle'>Status</td><td class='tdstyle'>"+v.disposalstatus+"</td><td class='tdstyle'>Case Is</td><td class='tdstyle'>"+v.pdrstatus+"</td></tr><tr><td class='tdstyle'>Hon'ble Judges</td><td class='tdstyle' colspan='3'>"+v.judge+"</td></tr><tr><th colspan='4' class='thstyle' style='text-align:left;'>M.P. Details</th></tr>";
	            	//mpcasedetails
	            	 tabstring=tabstring+"<tr><td colspan='4'><table class='B2U-article' style='width: 100%' ><tbody><tr><td>M.P. Number</td><td>Misc.Paper Type</td><td>Status</td><td>Order Date</td><td>Order</td></tr>";
	            	 $.each(v.mpdetails, function (j, l) {
	            		tabstring=tabstring+"<tr><td>"+l.mpcasenum+"</td><td>"+l.papertype+"</td><td>"+l.order+"</td><td>"+l.orderdate+"</td><td>-</td></tr>";
	            	})
	            	 
	            	 //alert(v.mpdetails);
	            	tabstring=tabstring+"</tbody></table></td></tr><tr><th colspan='4' class='thstyle' style='text-align:left;'>USR Details</th></tr>"; 
	            	
	            	//usrdetails
	            	tabstring=tabstring+"<tr><td colspan='4'><table class='B2U-article' style='width: 100%' ><tbody><tr><td>USR Number</td><td>Advocate Name</td><td>USR Type</td><td>USR Filing Date</td></tr>";
	            	 $.each(v.usrdetails, function (j, l) {
	            		tabstring=tabstring+"<tr><td>"+l.usrnum+"</td><td>"+l.usradv+"</td><td>"+l.usrtype+"</td><td>"+l.usrdate+"</td></tr>";
	            	})
	            	 
	            	 //alert(v.mpdetails);
	            	tabstring=tabstring+"</tbody></table></td></tr><tr><th colspan='4' class='thstyle' style='text-align:left;'>Connected Matters</th></tr>";
	            	//connected matters
	            	tabstring=tabstring+"<tr><td colspan='4'><table class='B2U-article' style='width: 100%' ><tbody><tr><td>Connected Case Number</td></tr>";
	            	 $.each(v.condetails, function (j, l) {
	            		tabstring=tabstring+"<tr><td>"+l.concasenum+"</td></tr>";
	            	})
	            	tabstring=tabstring+"</tbody></table></td></tr><tr><th colspan='4' class='thstyle' style='text-align:left;'>Notices</th></tr>";
	            	//Notices
	            	tabstring=tabstring+"<tr><td colspan='4'><table class='B2U-article' style='width: 100%' ><tbody><tr><td>P/R</td><td>Notice</td></tr>";
	            	 $.each(v.noticedetails, function (j, l) {
	            		tabstring=tabstring+"<tr><td>"+l.noticetype+"</td><td>"+l.notice+"</td></tr>";
	            	})
	            	tabstring=tabstring+"</tbody></table></td></tr><tr><th colspan='4' class='thstyle' style='text-align:left;'>Vakalath</th></tr>";
	            	//vakalath
	            	
	            	 tabstring=tabstring+"<tr><td colspan='4'><table class='B2U-article' style='width: 100%' ><tbody><tr><td>P/R No.</td><td>Advocate Code</td><td>Advocate Name</td></tr>";
	            	 $.each(v.vakalathdetails, function (j, l) {
	            		tabstring=tabstring+"<tr><td>"+l.vaktype+"</td><td>"+l.advcd+"</td><td>"+l.advname+"</td></tr>";
	            	}) 
	            	tabstring=tabstring+"</tbody></table></td></tr><tr><th colspan='4' class='thstyle' style='text-align:left;'>Lower Court Details</th></tr>";
	            	//lc details
	            	 tabstring=tabstring+"<tr><td colspan='4'><table class='B2U-article' style='width: 100%' ><tbody>";
	            	 $.each(v.lcdetails, function (j, l) {
	            		tabstring=tabstring+"<tr><td>Court Name</td><td>"+l.lccourt+"</td></tr><tr><td>District</td><td>"+l.lcdist+"</td></tr><tr><td>EA No.</td><td>"+l.eanum+"</td></tr><tr><td>IA No.</td><td>"+l.ianum+"</td></tr><tr><td>Case No.</td><td>"+l.lccasenum+"</td></tr><tr><td>Hon'ble Judge</td><td>"+l.lcjudge+"</td></tr><tr><td>Date of Judgement</td><td>"+l.lcjudgedate+"</td></tr>";
	            	}) 
	            	
	            	tabstring=tabstring+"</tbody></table></td></tr><tr><th colspan='4' class='thstyle' style='text-align:left;'>Prayer</th></tr>";
	            	//prayer
	            	tabstring=tabstring+"<tr><td colspan='4'>"+v.prayer+"</td></tr><tr><th colspan='4' class='thstyle' style='text-align:left;'>Party Details</th></tr>";
	            	tabstring=tabstring+"<tr><td colspan='2'><table class='B2U-article' style='width: 100%' ><tbody><tr><td colspan='2'>PETITIONER(S)</td></tr><tr><td>S.No</td><td>Petitioner(S) Name</td></tr>";
	            	$.each(v.petdetails, function (j, l) {
	            		tabstring=tabstring+"<tr><td>"+l.psno+"</td><td>"+l.pname+"</td></tr>";
	            	})
	            	
	            	tabstring=tabstring+"</tbody></table></td><td colspan='2'><table class='B2U-article' style='width: 100%' ><tbody><tr><td colspan='2'>RESPONDENT(S)</td></tr><tr><td>S.No</td><td>Respondent(S) Name</td></tr>";
	            	$.each(v.resdetails, function (j, l) {
	            		tabstring=tabstring+"<tr><td>"+l.rsno+"</td><td>"+l.rname+"</td></tr>";
	            	})
	            	
	            	tabstring=tabstring+"</tbody></table></td></tr>";
	            	tabstring=tabstring+"</tbody>";
	            	$("#inftable").append(tabstring);

	            });
	            //alert("resp=="+atob(data));  
	        },
	        error: function () {
	            alert("No details found");
	        }


	    }); */
}
	$.noConflict();
	$(document)
			.ready(
					function($) {

						$("input").attr("autocomplete", "off");

						/* $.validator.addMethod("alphanumeric", function(value,
								element) {
							return this.optional(element)
									|| /^[a-z0-9]+$/i.test(value);//Alpha numeric only
							//return this.optional(element) || /^[a-z0-9\s]+$/i.test(value);//Alpha numeric with space only
						}, "This field must contain only letters and numbers");

						$.validator.addMethod("specialChar", function(value,
								element) {
							return this.optional(element)
									|| /^[a-zA-Z0-9\s]*$/i.test(value);//no special charectres
						}, "Special Charecters not allowed");

						$.validator.addMethod("someSpecialChar",
								function(value, element) {
									return this.optional(element)
											|| /^[a-zA-Z0-9-:;,.#/\s\w]*$/i
													.test(value);//some special charectres
								}, "Special Charecters not allowed");

						$.validator
								.addMethod(
										"pwdPolicy",
										function(value, element) {
											return this.optional(element)
													|| /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/g
															.test(value);
										},
										"Password must contain: Minimum 8 characters atleast 1 UpperCase Alphabet, 1 LowerCase Alphabet, 1 Number and 1 Special Character");
                            
						$("#srmainlink").click(function() { 
							  alert("in SR");
						  })
						*/
                        
                        //alert("hi"+$("#searchtype").val());
						
					
						  
						  //$("#srlink").mouseover(function() { alert("in SR");});
						  
						$("#myForm").validate();
						$('#ticker li').hide().slice(0, 3).show();
						
						//links
						$("#searchtype").val("casenumsearch"); 
						$("#link1").mouseover(function() { $("#inftable").html("");$("#searchtype").val("casenumsearch");});
						$("#link2").mouseover(function() { $("#inftable").html("");$("#searchtype").val("srnumsearch");});
						$("#link3").mouseover(function() { $("#inftable").html("");$("#searchtype").val("advsearch");});
						$("#link4").mouseover(function() { $("#inftable").html("");$("#searchtype").val("partysearch"); });
						$("#link5").mouseover(function() { $("#inftable").html("");$("#searchtype").val("casetypesearch");});
						$("#link6").mouseover(function() { $("#inftable").html("");$("#searchtype").val("CDsearch");});
						//$("#advsearchname").html("casenumsearch");
						//advsearch label
						
						    $("input:radio[name=advsearchtype]").click(function() { 
						    	//alert($('input[name=advsearchtype]:checked', '#myForm').val()); 
						    	var checkedvalue=$('input[name=advsearchtype]:checked', '#myForm').val();
						    	if(checkedvalue=='A'){
						    		$("#advsearchname").html("Advocate Code");
						    		
						    	}else if(checkedvalue=='B'){
						    		$("#advsearchname").html("Advocate Name");
						    	}else if(checkedvalue=='C'){
						    		$("#advsearchname").html("Advocate Mobile");
						    	}else if(checkedvalue=='D'){
						    		$("#advsearchname").html("Advocate Email");
						    	}else if(checkedvalue=='E'){
						    		$("#advsearchname").html("Advocate Bar Council Number");
						    	}
						    })
						    
						    
						    //CD Details
						    $("input:radio[name=cdsearchtype]").click(function() { 
						    	//alert($('input[name=advsearchtype]:checked', '#myForm').val()); 
						    	var checkedvalue=$('input[name=cdsearchtype]:checked', '#myForm').val();
						    	if(checkedvalue=='cdnum'){
						    		$('#cdnumsearch').css('display', 'block');
						    		$('#cdcasesearch').css('display', 'none');
						    		$('#cdadvsearch').css('display', 'none');
						    		
						    	}else if(checkedvalue=='casenum'){
						    		$('#cdnumsearch').css('display', 'none');
						    		$('#cdcasesearch').css('display', 'block');
						    		$('#cdadvsearch').css('display', 'none');
						    	}else if(checkedvalue=='advnum'){
						    		$('#cdnumsearch').css('display', 'none');
						    		$('#cdcasesearch').css('display', 'none');
						    		$('#cdadvsearch').css('display', 'block');
						    	}
						    })
						    
						    
						 //casedetails
						  
						 
						 $("#searchone").click(function() { 
							 $("#ctype").attr("class", "required");
							 
							 $("#cno").attr("class", "required digits");
							 $("#cyear").attr("class", "required digits");
							
							 
							 /*
							  $("#ctype").attr("minlength", "2");
							 $("#ctype").attr("maxlength", "10"); 
							   $("#cno").attr("minlength", "2");
							 $("#cno").attr("maxlength", "10");
							
							 $("#cyear").attr("minlength", "4");
							 $("#cyear").attr("maxlength", "4");*/
							 
							 alert("hi");
							 alert("hi"+$("#myForm").valid());
							 if($("#myForm").valid()){
								 alert("in if");
							 $("#casedetails").css('display', 'block'); 
							 $("#tabheading").html("Case Details");
							 $.ajax({
							        type: "GET",
							        //url: "getCaseDetails.jsp?searchtype=casenumber",
							        data: "",
							        dataType: "text",
							        success: function (data) {
							        	//alert(data+"=="+JSON.parse(atob(data.trim())));
							            
							            $.each(JSON.parse(atob(data.trim())), function (k, v) {
							            	var tabstring="<tbody><tr><th colspan='4' class='thstyle' style='text-align:left;'>Primary Details</th></tr><tr><td class='tdstyle'>Case Number</td><td class='tdstyle'>"+v.maincasenum+"</td><td class='tdstyle'>SR Number</td><td class='tdstyle'>"+v.srcasenum+"</td></tr><tr><td class='tdstyle'>Petitioner</td><td class='tdstyle'>"+v.petitioner+"</td><td class='tdstyle'>Respondent</td><td class='tdstyle'>"+v.respondent+"</td></tr><tr><td class='tdstyle'>Petitioner.Adv</td><td class='tdstyle'>"+v.petitioneradv+"</td><td class='tdstyle'>Respondent.Adv</td><td class='tdstyle'>"+v.respondentadv+"</td></tr><tr><td class='tdstyle'>Subject</td><td class='tdstyle'>"+v.subject+"</td><td class='tdstyle'>District</td><td class='tdstyle'>"+v.district+"</td></tr><tr><td class='tdstyle'>Filing Date</td><td class='tdstyle'>"+v.filingdate+"</td><td class='tdstyle'>Reg.Date</td><td class='tdstyle'>"+v.registrationdate+"</td></tr><tr><td class='tdstyle'>Posting Stage</td><td class='tdstyle'>"+v.postingstage+"</td><td class='tdstyle'>Listing Date</td><td class='tdstyle'>"+v.nexthdate+"</td></tr><tr><td class='tdstyle'>Status</td><td class='tdstyle'>"+v.disposalstatus+"</td><td class='tdstyle'>Case Is</td><td class='tdstyle'>"+v.pdrstatus+"</td></tr><tr><td class='tdstyle'>Hon'ble Judges</td><td class='tdstyle' colspan='3'>"+v.judge+"</td></tr><tr><th colspan='4' class='thstyle' style='text-align:left;'>M.P. Details</th></tr>";
							            	//mpcasedetails
							            	 tabstring=tabstring+"<tr><td colspan='4'><table class='B2U-article' style='width: 100%' ><tbody><tr><td>M.P. Number</td><td>Misc.Paper Type</td><td>Status</td><td>Order Date</td><td>Order</td></tr>";
							            	 $.each(v.mpdetails, function (j, l) {
							            		tabstring=tabstring+"<tr><td>"+l.mpcasenum+"</td><td>"+l.papertype+"</td><td>"+l.order+"</td><td>"+l.orderdate+"</td><td>-</td></tr>";
							            	})
							            	 
							            	 //alert(v.mpdetails);
							            	tabstring=tabstring+"</tbody></table></td></tr><tr><th colspan='4' class='thstyle' style='text-align:left;'>USR Details</th></tr>"; 
							            	
							            	//usrdetails
							            	tabstring=tabstring+"<tr><td colspan='4'><table class='B2U-article' style='width: 100%' ><tbody><tr><td>USR Number</td><td>Advocate Name</td><td>USR Type</td><td>USR Filing Date</td></tr>";
							            	 $.each(v.usrdetails, function (j, l) {
							            		tabstring=tabstring+"<tr><td>"+l.usrnum+"</td><td>"+l.usradv+"</td><td>"+l.usrtype+"</td><td>"+l.usrdate+"</td></tr>";
							            	})
							            	 
							            	 //alert(v.mpdetails);
							            	tabstring=tabstring+"</tbody></table></td></tr><tr><th colspan='4' class='thstyle' style='text-align:left;'>Connected Matters</th></tr>";
							            	//connected matters
							            	tabstring=tabstring+"<tr><td colspan='4'><table class='B2U-article' style='width: 100%' ><tbody><tr><td>Connected Case Number</td></tr>";
							            	 $.each(v.condetails, function (j, l) {
							            		tabstring=tabstring+"<tr><td>"+l.concasenum+"</td></tr>";
							            	})
							            	tabstring=tabstring+"</tbody></table></td></tr><tr><th colspan='4' class='thstyle' style='text-align:left;'>Notices</th></tr>";
							            	//Notices
							            	tabstring=tabstring+"<tr><td colspan='4'><table class='B2U-article' style='width: 100%' ><tbody><tr><td>P/R</td><td>Notice</td></tr>";
							            	 $.each(v.noticedetails, function (j, l) {
							            		tabstring=tabstring+"<tr><td>"+l.noticetype+"</td><td>"+l.notice+"</td></tr>";
							            	})
							            	tabstring=tabstring+"</tbody></table></td></tr><tr><th colspan='4' class='thstyle' style='text-align:left;'>Vakalath</th></tr>";
							            	//vakalath
							            	
							            	 tabstring=tabstring+"<tr><td colspan='4'><table class='B2U-article' style='width: 100%' ><tbody><tr><td>P/R No.</td><td>Advocate Code</td><td>Advocate Name</td></tr>";
							            	 $.each(v.vakalathdetails, function (j, l) {
							            		tabstring=tabstring+"<tr><td>"+l.vaktype+"</td><td>"+l.advcd+"</td><td>"+l.advname+"</td></tr>";
							            	}) 
							            	tabstring=tabstring+"</tbody></table></td></tr><tr><th colspan='4' class='thstyle' style='text-align:left;'>Lower Court Details</th></tr>";
							            	//lc details
							            	 tabstring=tabstring+"<tr><td colspan='4'><table class='B2U-article' style='width: 100%' ><tbody>";
							            	 $.each(v.lcdetails, function (j, l) {
							            		tabstring=tabstring+"<tr><td>Court Name</td><td>"+l.lccourt+"</td></tr><tr><td>District</td><td>"+l.lcdist+"</td></tr><tr><td>EA No.</td><td>"+l.eanum+"</td></tr><tr><td>IA No.</td><td>"+l.ianum+"</td></tr><tr><td>Case No.</td><td>"+l.lccasenum+"</td></tr><tr><td>Hon'ble Judge</td><td>"+l.lcjudge+"</td></tr><tr><td>Date of Judgement</td><td>"+l.lcjudgedate+"</td></tr>";
							            	}) 
							            	
							            	tabstring=tabstring+"</tbody></table></td></tr><tr><th colspan='4' class='thstyle' style='text-align:left;'>Prayer</th></tr>";
							            	//prayer
							            	tabstring=tabstring+"<tr><td colspan='4'>"+v.prayer+"</td></tr><tr><th colspan='4' class='thstyle' style='text-align:left;'>Party Details</th></tr>";
							            	tabstring=tabstring+"<tr><td colspan='2'><table class='B2U-article' style='width: 100%' ><tbody><tr><td colspan='2'>PETITIONER(S)</td></tr><tr><td>S.No</td><td>Petitioner(S) Name</td></tr>";
							            	$.each(v.petdetails, function (j, l) {
							            		tabstring=tabstring+"<tr><td>"+l.psno+"</td><td>"+l.pname+"</td></tr>";
							            	})
							            	
							            	tabstring=tabstring+"</tbody></table></td><td colspan='2'><table class='B2U-article' style='width: 100%' ><tbody><tr><td colspan='2'>RESPONDENT(S)</td></tr><tr><td>S.No</td><td>Respondent(S) Name</td></tr>";
							            	$.each(v.resdetails, function (j, l) {
							            		tabstring=tabstring+"<tr><td>"+l.rsno+"</td><td>"+l.rname+"</td></tr>";
							            	})
							            	
							            	tabstring=tabstring+"</tbody></table></td></tr>";
							            	tabstring=tabstring+"</tbody>";
							            	$("#inftable").html(tabstring);

							            });
							            //alert("resp=="+atob(data));  
							        },
							        error: function () {
							            alert("No details found");
							        }


							    });
						 }else{
							 alert("in else");
						 }
							 
							 
							 
						 })
						    
						  $("#searchtwo").click(function() { 
							 //alert("hi");
							 $("#casedetails").css('display', 'block'); 
							 $("#tabheading").html("SR Details");  
							 $.ajax({
							        type: "GET",
							        url: "getSRCasedetails.jsp?searchtype=srnumber",
							        data: "",
							        dataType: "text",
							        success: function (data) {
							        	//alert(data+"=="+JSON.parse(atob(data.trim())));
							            //alert("=="+JSON.parse(atob(data.trim())));
							            $.each(JSON.parse(atob(data.trim())), function (k, v) {
							            	var tabstring="<tbody><tr><th colspan='4' class='thstyle' style='text-align:left;'>SR Details</th></tr><tr><td class='tdstyle'>Case Number</td><td class='tdstyle'>"+v.casenum+"</td><td class='tdstyle'>Filing Date</td><td class='tdstyle'>"+v.filingdate+"</td></tr><tr><td class='tdstyle'>Registration date</td><td class='tdstyle'>"+v.registrationdate+"</td><td class='tdstyle'>Adv. Code&Name </td><td class='tdstyle'>"+v.advocate+"</td></tr><tr><td class='tdstyle'>District</td><td class='tdstyle'>"+v.district+"</td><td class='tdstyle'>Vakalath Fee</td><td class='tdstyle'>"+v.vakalfee+"</td></tr><tr><td class='tdstyle'>court Fee</td><td class='tdstyle'>"+v.courtfee+"</td><td class='tdstyle'>Main Number</td><td class='tdstyle'><a href='#' id='srlink' onclick='getmaincasedet()'>"+v.mainnum+"</a></td></tr><tr><td class='tdstyle'>Allotment Date</td><td class='tdstyle'>"+v.allotdate+"</td><td class='tdstyle'></td><td class='tdstyle'></td></tr>";
							            	//mpcasedetails
							            	 
							            	tabstring=tabstring+"</tbody>";
							            	$("#inftable").html(tabstring);

							            });
							            //alert("resp=="+atob(data));  
							        },
							        error: function () {
							            alert("No details found");
							        }


							    });
							 
						  })
						  $("#searchthree").click(function() { 
							 //alert("hi");
							 $("#casedetails").css('display', 'block'); 
							 $("#tabheading").html("Cases with Party Names");  
							 $.ajax({
							        type: "GET",
							        url: "getCaseDetails.jsp?searchtype=party",
							        data: "",
							        dataType: "text",
							        success: function (data) {
							        	//alert("=="+JSON.parse(atob(data.trim())));
							            var tabstring="<tbody><tr><th colspan='4' class='thstyle' style='text-align:left;'>Case Number With Party Details</th></tr>";
							             var i=0;
							            $.each(JSON.parse(atob(data.trim())), function (k, v) {
							            	if(v.searchtype!=='A'){
							            	 if(i==0){
							            		tabstring=tabstring+"<tr><td class='tdstyle'>Case Number</td><td class='tdstyle'>Petitioner Name</td><td class='tdstyle'>Respondent Name</td></tr>";
							            	} 
							            	 tabstring=tabstring+"<tr><td><a href='#' onclick='getmaincasedet()'>"+v.casenum+"</a></td><td>"+v.pname+"</td><td>"+v.rname+"</td></tr>";
							            	
							            	 
							            	}else{
							            		 if(i==0){
								            		tabstring=tabstring+"<tr><td class='tdstyle'>Case Number</td><td class='tdstyle'>Party Type</td><td class='tdstyle'>Party Name</td><td class='tdstyle'>Party No.</td></tr>";
								            	} 
								            	 tabstring=tabstring+"<tr><td>"+v.casenum+"</td><td>"+v.partytype+"</td><td>"+v.pname+"</td><td>"+v.psno+"</td></tr>";
								            	
								            	
								            	 
								            	
							            	}
							            	
                                          i=parseInt(i)+1;
							            }); 
							            tabstring=tabstring+"</tbody>";
							            //alert("tabstring=="+tabstring);
							            $("#inftable").html(tabstring);
							            //alert("resp=="+atob(data));  
							        },
							        error: function () {
							            alert("No details found");
							        }


							    });
							 
						  })
						   $("#searchfour").click(function() { 
							 //alert("hi");
							 $("#casedetails").css('display', 'block'); 
							 $("#tabheading").html("ADVOCATE'S INFORMATION");  
							 $.ajax({
							        type: "GET",
							        url: "getCaseDetails.jsp?searchtype=advocate",
							        data: "",
							        dataType: "text",
							        success: function (data) {
							        	//alert("=="+JSON.parse(atob(data.trim())));
							            var tabstring="<tbody><tr><th colspan='4' class='thstyle' style='text-align:left;'>Advocate Details</th></tr>";
							             
							            $.each(JSON.parse(atob(data.trim())), function (k, v) {
							            	
							            	 
							            	 tabstring=tabstring+"<tr><td><a href='#' onclick='getadvcasedet()'>"+v.advcode+"</a></td><td>"+v.title+"</td><td>"+v.initial+"</td><td>"+v.advname+"</td></tr>";
							            	
							            	 
							            	
							            	
                                         
							            }); 
							            tabstring=tabstring+"</tbody>";
							            //alert("tabstring=="+tabstring);
							            $("#inftable").html(tabstring);
							            //alert("resp=="+atob(data));  
							        },
							        error: function () {
							            alert("No details found");
							        }


							    });
							 
						  })
						  $("#searchfive").click(function() { 
							 //alert("hi");
							 $("#casedetails").css('display', 'block'); 
							 $("#tabheading").html("Cases with Case Type");  
							 $.ajax({
							        type: "GET",
							        url: "getCaseDetails.jsp?searchtype=casetype",
							        data: "",
							        dataType: "text",
							        success: function (data) {
							        	//alert("=="+JSON.parse(atob(data.trim())));
							            var tabstring="<tbody><tr><th colspan='5' class='thstyle' style='text-align:left;'>Case Number With Party Details</th></tr><tr><td class='tdstyle'>Case Number</td><td class='tdstyle'>Petitioner Name</td><td class='tdstyle'>Respondent Name</td><td class='tdstyle'>Status</td></tr>";
							             var i=0;
							            $.each(JSON.parse(atob(data.trim())), function (k, v) {
							            	
							            	 tabstring=tabstring+"<tr><td><a href='#' onclick='getmaincasedet()'>"+v.casenum+"</a></td><td>"+v.pname+"</td><td>"+v.rname+"</td><td>"+v.pname+"</td><td>"+v.status+"</td></tr>";
							            	
							            	 
							            	
							            	
                                          i=parseInt(i)+1;
							            }); 
							            tabstring=tabstring+"</tbody>";
							            //alert("tabstring=="+tabstring);
							            $("#inftable").html(tabstring);
							            //alert("resp=="+atob(data));  
							        },
							        error: function () {
							            alert("No details found");
							        }


							    });
							 
						  })
						  $("#searchsix").click(function() { 
							 //alert("hi");
							 $("#casedetails").css('display', 'block'); 
							   
							 $.ajax({
							        type: "GET",
							        url: "getCaseDetails.jsp?searchtype=CDsearch",
							        data: "",
							        dataType: "text",
							        success: function (data) {
							        	var tabstring="<tbody>";
							        	var i=0;
							        	$.each(JSON.parse(atob(data.trim())), function (k, v) {
							        		//alert(v.searchtype);
							        			if(v.searchtype=='cdnum'){
							        				$("#tabheading").html("CD STATUS ON CD NUMBER");	
							        				
							        			}else if(v.searchtype=='casenum'){
							        				$("#tabheading").html("CD STATUS ON CASE NUMBER");
							        			}else if(v.searchtype=='advnum'){
							        				$("#tabheading").html("CD STATUS ON ADVOCATE CODE");
							        				
							        			}
							        			
							        			
							        			if(v.searchtype=='casenum'){
							        				//alert("first"+i);
							        				if(i==0){
							        				tabstring=tabstring+"<tr><td class='tdstyle' colspan='2'>"+v.casenum+"</td><td class='tdstyle' colspan='3'>Cases : 56</td></tr>";
							        				tabstring=tabstring+"<tr><td class='tdstyle'>CD Number</td><td class='tdstyle'>Case Number</td><td class='tdstyle'>Section</td><td class='tdstyle'>Call for Date</td><td class='tdstyle'>Ready Date</td></tr>";
							        				}
							        				tabstring=tabstring+"<tr><td class='tdstyle'>"+v.cdcasenum+"</td><td class='tdstyle'>"+v.casenum+"</td><td class='tdstyle'>"+v.section+"</td><td class='tdstyle'>"+v.calleddate+"</td><td class='tdstyle'>"+v.readydate+"</td></tr>";
							        				//alert("second"+i);
							        			}else if(v.searchtype=='advnum'){
							        				if(i==0){
								        				tabstring=tabstring+"<tr><td class='tdstyle' colspan='2'>"+v.advname+"</td><td class='tdstyle' colspan='3'>Cases : 56</td></tr>";
								        				tabstring=tabstring+"<tr><td class='tdstyle'>CD Number</td><td class='tdstyle'>Case Number</td><td class='tdstyle'>Section</td><td class='tdstyle'>Call for Date</td><td class='tdstyle'>Ready Date</td></tr>";
								        				}
							        				tabstring=tabstring+"<tr><td class='tdstyle'>"+v.cdcasenum+"</td><td class='tdstyle'>"+v.casenum+"</td><td class='tdstyle'>"+v.section+"</td><td class='tdstyle'>"+v.calleddate+"</td><td class='tdstyle'>"+v.readydate+"</td></tr>";
								        			}else{
								        				//alert("in else");
							        				var flag=v.cdflag;
							        				var pdrstatus=v.pdr;
							        				var struck=v.struckdate;
							        				var cdstatus='';
							        				if(flag=='AL' && struck!='-'){
							        					cdstatus="CD/CA IS STRUCKED OFF";
							        				}else if(flag=='AL'&&struck=='-'){
							        					cdstatus="CD/CA IS PENDING";
							        				}else if(flag=="DF"){
							        					cdstatus="CD/CA IS DEFECTIVE";
							        				}else{
							        					cdstatus="CD/CA IS COMPLIED";
							        				}
							        				//alert("first");
							        				
							        				tabstring=tabstring+"<tr><td class='tdstyle' colspan='2'>"+v.cdcasenum+"</td><td class='tdstyle' colspan='2'>"+cdstatus+"</td></tr>";
							        				tabstring=tabstring+"<tr><td>Case No.</td><td>"+v.casenum+"</td><td>Advocate Name</td><td>"+v.advname+"</td></tr>";
							        				tabstring=tabstring+"<tr><td>Case Strucked of on</td><td>"+v.struckdate+"</td><td>Remarks</td><td>"+v.remarks+"</td></tr>";
							        				tabstring=tabstring+"<tr><td>Date of sending CD to section</td><td>"+v.sectsentdatet+"</td><td>Deposit date</td><td>"+v.depositdate+"</td></tr>";
							        				tabstring=tabstring+"<tr><td>Date of receipt of original</td><td>"+v.orgnldate+"</td><td>Called for Date</td><td>"+v.calleddate+"</td></tr>";
							        				tabstring=tabstring+"<tr><td>Ready Date</td><td>"+v.readydate+"</td><td>Date of delivery</td><td>"+v.deliverdate+"</td></tr>";
							        				tabstring=tabstring+"<tr><td colspan='4'><table class='B2U-article' style='width: 100%' ><tbody>";
							        				
							        				tabstring=tabstring+"<tr><th>Doc. Name</th><th>Against Case</th><th>No. of Copies</th><th>No. of pages</th><th>Of Type</th><th>Stamp Price</th></tr>";
							        				$.each(v.docdetails, function (j, l) {
									            		tabstring=tabstring+"<tr><td>"+l.docname+"</td><td>"+l.caseaganist+"</td><td>"+l.copies+"</td><td>"+l.pages+"</td><td>"+l.doctype+"</td><td>"+l.stampprice+"</td></tr>";
									            	})
							        				tabstring=tabstring+"</tbody></table></td></tr>"
							        			}
							        		
							        			i=parseInt(i)+1;
							        	})
							        	
							        	//alert("=="+JSON.parse(atob(data.trim())));
							            
							        	tabstring=tabstring+"</tbody>";
							            //alert("tabstring=="+tabstring);
							            $("#inftable").html(tabstring);
							            //alert("resp=="+atob(data));  
							        },
							        error: function () {
							            alert("No details found");
							        }


							    });
							 
						  })
						  
						  
					});