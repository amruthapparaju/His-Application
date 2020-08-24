package com.his.dto;

public class UnlockUserDTO {
	
	private Integer cw_id;

	
	private String email;

	
	private String tempPwd;
	
	
	private String newPwd;
	
	
	private String ConformPwd;


 


	@Override
	public String toString() {
		return "UnlockUserDTO [email=" + email + ", tempPwd=" + tempPwd + ", newPwd=" + newPwd + ", ConformPwd="
				+ ConformPwd + "]";
	}


	public String getTempPwd() {
		return tempPwd;
	}


	public void setTempPwd(String tempPwd) {
		this.tempPwd = tempPwd;
	}


	public String getNewPwd() {
		return newPwd;
	}


	public void setNewPwd(String newPwd) {
		this.newPwd = newPwd;
	}


	public String getConformPwd() {
		return ConformPwd;
	}


	public void setConformPwd(String conformPwd) {
		ConformPwd = conformPwd;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public Integer getCw_id() {
		return cw_id;
	}


	public void setCw_id(Integer cw_id) {
		this.cw_id = cw_id;
	}
	
	
	 

}
