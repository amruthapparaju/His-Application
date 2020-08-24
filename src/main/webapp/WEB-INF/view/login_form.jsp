<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" isELIgnored="false"%>
 <%@taglib uri="http://www.springframework.org/tags/form"  prefix="form" %>
 <%@taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c" %>
 <link href="css/style.css" rel="stylesheet">
<link href="css/styles.css" rel="stylesheet">
 <meta name="description" content="" />
<meta name="keywords" content="" />
<!--[if lte IE 8]><script src="js/html5shiv.js"></script><![endif]-->
<script src="js/jquery.min.js"></script>
<script src="js/jquery-latest.min.js"></script>
<script src="js/script.js"></script>
 	<script src="js/skel-panels.min.js"></script>
<script src="js/init.js"></script>
<link href="css/responsive-tabs.css" rel="stylesheet" type="text/css" />
<script src="js/responsive-tabs.js" type="text/javascript"></script>
<link rel="stylesheet" href="css/styles.css">


  <h1 style="text-align: center"  class="col-sm-6"> SRI RAM HOSPITAL </h1>
 
<script language="JavaScript" src="./js/validation.js"></script>

 <br>
          <div class="col-sm-6"><h2 class="texyt">Login page 	</h2> </div>
        </div>
   
    <div class="col-sm-4"> 
      <div class="3u">
          <div id="sidebar2">
            


     
                <div class="form">
                   <form:form  modelAttribute="loginCmd"    onSubmit = "return loginvalidate(this)">
   <table >
       <tr>
           <td> username </td>
		<td><form:input path="email" /><form:errors
			path="email" /><span id="emailErr"></span></td>
					  
       </tr>
       <tr>
           <td> password</td>
		<td><form:password path="password" /><form:errors
			path="password" /><span id="passwordErr"></span></td>
       </tr>
       <tr>
         <td colspan="2"> <input type="submit" value="Login"> </td>  
       </tr>
   
   </table>   
   </form:form>
   </div>
   </div>
   </div>
   </div>
   </div>
     <br>
     <c:if test="${!empty resultMsg }">
        <h1 style="color:black;text-align:center"> ${resultMsg}  </h1>
     </c:if>
      
