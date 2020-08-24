<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<script language="JavaScript" src="./js/validation.js"></script>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

<c:if test="${not empty ErrMsg}">
		<strong>${ErrMsg}</strong>
	</c:if>
	
	<c:if test="${not empty successMsg}">
		<strong>${successMsg}</strong>
	</c:if>
<form:form  action="unlockAccount" modelAttribute="UnlockUser" id="myForm" method="post"   onSubmit = "return checkPassword(this)">

	<table align='center'>
	
				<form:input path="cw_id" type="hidden" />
 
	
		<p style="color: red">
		<form:errors path="*" />
	</p>
	
		<tr>
			<td>Your Email :</td>
						<td><form:input path="email"    readonly="true" /></td>
			
		</tr>
		<tr>
			<td>Temporary Password :</td>
			<td><form:password path="tempPwd" /><form:errors
					path="tempPwd" /><span id="oldpasswordErr"></span></td>
		</tr>
		<tr>
			<td>New Password :</td>
			<td><form:password path="newPwd" /><form:errors
					path="newPwd" /><span id="newPwdErr"></span></td>
		</tr>

		<tr>
			<td>Conform Password :</td>
			<td><form:password path="ConformPwd" /><form:errors
					path="ConformPwd" /><span id="ConformPwdErr"></span></td>
		</tr>


		<tr>
			<td colspan="2"><input type="submit" value="unlock" /></td>
		</tr>


	</table>

</form:form>
</head>
<body>

</body>
</html>