<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

<link href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css"
	rel="stylesheet" type="text/css">
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script
	src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>

<script>
	$(document).ready(function() {
		$('#contactTbl').DataTable({
			"pagingType" : "full_numbers"
		});
	});
</script>

</head>

<body>
<script>
	function deleteConfirm(){
		return confirm("Are you sure, you want to delete?");
	}
	function ActivateConfirm(){
		return confirm("Are you sure, you want to Activate Account?");
	}
	
	var role =$("#role").val();
    $.ajax({
        type:"GET",
        url : "viewworkers?role=" + role,
		success : function(data) {
			$.each(data, function(k, v) {
       		 $("#cino").val(v.cino);
             $("#firstName").val(v.firstName);
             $("#lastname").val(v.lastName);
             $("#email").val(v.email);
             $("#gender").val(v.gender);
			});
		}
	});
</script>
<!-- <a href="login.htm"> Add new Contact</a>
 -->
 
 <div>
<%-- <form:form  action="viewworkers" modelAttribute="cwdetails" id="myform" class="form-horizontal"
	onsubmit="return validate(this)">

 <table>
  
		<tr>
			<td>Role *::</td>
			<td><form:select path="role">
					<form:option value="">-Select-</form:option>
					<form:options items="${roleList}" />
				</form:select> <form:errors path="role" /><span id="role"></span>
		</tr>

		</table>
		</form:form>
 --%> </div>

	<div id="container">
	
		<div id="content">

	<table border="1"  id="contactTbl">


		<thead>
			<tr>
				<th>S.No</th>
				<th>Name</th>
				<th>Email</th>
				<th>Gender</th>
				<th>Action</th>

			</tr>

		</thead>

		<tbody>
			<c:forEach var="c" items="${cwdetails}" varStatus="index">
				<tr>
					<td>${index.count }</td>
					<td>${c.firstName } ${c.lastName}</td>
					<td>${c.email }</td>
					<td>${c.gender }</td>
					<td><%-- <a href="editcontact/${c.contactId}">Edit</a> --%>
					<a href="editcw?cw_id=${c.cw_id}" >Edit</a>|
					<c:if test="${c.delete_flag=='N'}">
<a href="deletecw?cw_id=${c.cw_id}"  onclick="deleteConfirm()">Delete</a>
	</c:if>	
				<c:if test="${c.delete_flag =='D'}">
<a href="Activatecw?cw_id=${c.cw_id}"  onclick="ActivateConfirm()">Activate</a>
	</c:if>					
					
					</td>
				</tr>
			</c:forEach>
		</tbody>

	</table>
			</div>
	
	</div>
	
</body>
</html>