package com.his.dto;

public class HisModel {

	private Integer cw_id;
	private String firstName;
	private String lastName;
	private String email;
	private String gender;
	private String role;

@Override
public String toString() {
	return "HisDto [cw_id=" + cw_id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
			+ ", gender=" + gender + ", role=" + role +  "]";
}
public Integer getCw_id() {
	return cw_id;
}
public void setCw_id(Integer cw_id) {
	this.cw_id = cw_id;
}
public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public String getRole() {
	return role;
}
public void setRole(String role) {
	this.role = role;
}

  
}
