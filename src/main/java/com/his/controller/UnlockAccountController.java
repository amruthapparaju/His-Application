package com.his.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.his.dto.HisDto;
import com.his.dto.UnlockUserDTO;
import com.his.service.HisService;
import com.his.utills.pwdUtils;

@Controller
public class UnlockAccountController {
	
	
	@Autowired
	private HisService  serv;


	
	@GetMapping("/unlockAccount")
	public String displayUnlockAccForm(@RequestParam("email") String email, Model model) {		
		model.addAttribute("email", email);

		UnlockUserDTO UnlockUser = new UnlockUserDTO();
		UnlockUser.setEmail(email);
		model.addAttribute("UnlockUser", UnlockUser);	

		
		return "unlockform";
	}
	
	@PostMapping("/unlockAccount")
	public String unlockUserAcc(@ModelAttribute("UnlockUser") UnlockUserDTO acc,Model model) throws Exception {
 HisDto unclockAcc = serv.UnclockAcc(acc.getEmail(), pwdUtils.pwdEncrypt(acc.getTempPwd()));	

 System.out.println(unclockAcc);
		if(unclockAcc!=null)
		{
			
			unclockAcc.setPassword(acc.getNewPwd());
			boolean updateUser=false;
			try {
				 updateUser = serv.UpdateUser(unclockAcc);
			} catch (Exception e) {
				e.printStackTrace();
			}
			if(updateUser)
			{
				model.addAttribute("successMsg","succesfully changed your password");

				return "unlockform";

			}
		}
		
		model.addAttribute("ErrMsg","please enter correct  temp password");
		
		
		return "unlockform";
	}
	

}
