package com.his.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name="his_admin")
public class HisEntity implements Serializable {

	@Id
    //@GenericGenerator(name = "cw_id", strategy = "com.his.generator.cwGenerator")
	//format=XX-XX-XXXX
	@GeneratedValue(generator = "cw_id")
	private Integer cw_id;
	@Column(name = "first_name")

	private String firstName;

	@Column(name = "last_name")
	private String lastName;
	private String email;

	private String gender;

	private String role;
	@Transient
	private Date dob;

	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "created_date", updatable = false)
	private Date created_date;
	@UpdateTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "updated_date", insertable = false)
	private Date updated_date;

	@Column(name = "password")

	private String password;
	private String status ;
	
	private String delete_flag;
	@Override
	public String toString() {
		return "HisEntity [cw_id=" + cw_id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", gender=" + gender + ", role=" + role + ", dob=" + dob + ", created_date=" + created_date
				+ ", updated_date=" + updated_date + ", password=" + password + ", status=" + status + "]";
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
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public Date getCreated_date() {
		return created_date;
	}
	public void setCreated_date(Date created_date) {
		this.created_date = created_date;
	}
	public Date getUpdated_date() {
		return updated_date;
	}
	public void setUpdated_date(Date updated_date) {
		this.updated_date = updated_date;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getDelete_flag() {
		return delete_flag;
	}
	public void setDelete_flag(String delete_flag) {
		this.delete_flag = delete_flag;
	}

	
	
}
