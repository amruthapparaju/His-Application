<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<form:form  action="viewworkers" modelAttribute="cwdetails" id="myform" class="form-horizontal"
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
 </div>


</body>
</html>