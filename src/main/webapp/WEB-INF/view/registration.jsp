<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<script src="js/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script language="JavaScript" src="./js/validation.js"></script>
<script language="JavaScript" src="./js/ajax.js"></script>
<script src="./js/bootstrap-datepicker.js" type="text/javascript"></script>
<script src="./js/" type="text/javascript"></script>
<link rel="stylesheet" href="css/dcss/bootstrap.min.css">
<script src="./js/bootstrap.min.js" type="text/javascript"></script>
<h1 style="text-align: center"> Case Worker Registration Form </h1>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<form:form  action="regis" modelAttribute="cwregis" id="myform" class="form-horizontal"
	onsubmit="return validate(this)">
	<p style="color: red">
		<form:errors path="*" />
	</p>
		<c:if test="${not empty succMag}">
		<strong>${succMag}</strong>
	</c:if>
	<c:if test="${not empty errMag}">
		<strong>${errMag}</strong>
	</c:if>
	<table align='center'>
							<form:input path="cw_id" type="hidden" />
	
		<tr>
			<td>First Name*::</td>
			<td><form:input path="firstName" /> <form:errors
					path="firstName" /><span id="firstNameErr"></span></td>
		</tr>
		<tr>
			<td>Last Name *::</td>
			<td><form:input path="LastName" /> <form:errors
					path="LastName" /><span id="lastNameErr"></span></td>
		</tr>
		<tr>
			<td>Email *::</td>
			<td><form:input path="email" /> <form:errors path="email" /><span
				id="EmailNameErr"></span> <font color='red'>
					<div id="dupEmail"></div>
			</font></td>
		</tr>
		<%-- <tr>
			<td>DOB *::</td>
			<td><form:input type="date" path="dob"   class="form-control" />(dd-MM-yyyy) <form:errors
					path="dob" /><span id="dobErr"></span></td>
		</tr> --%>

		<tr>
			<td>Gender *::</td>
			<td><form:radiobuttons path="gender" items="${gendersList }" />
				<form:errors path="gender" /><span id="gendleErr"></span></td>
		</tr>
				<tr>
			<td>Role *::</td>
			<td><form:select path="role">
					<form:option value="">-Select-</form:option>
					<form:options items="${rolesList}" />
				</form:select> <form:errors path="role" /><span id="roleErr"></span>
		</tr>
		
					<td colspan="2"><input type="reset" value="reset" />
		
		<input type="submit" value="register" /></td>
		</tr>
	</table>

</form:form>


