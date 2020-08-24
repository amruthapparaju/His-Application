package com.his.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.his.dto.HisDto;
import com.his.service.HisService;

@Controller
public class loginController {

	@Autowired
	private  HisService serv;
	
	
	
	@GetMapping("/login.htm") 
	public   String  showForm(@ModelAttribute("loginCmd") HisDto cmd) {
		return "login_form" ;
	}
	

	@PostMapping("/login.htm")
	public String unlockUserAcc(@ModelAttribute("loginCmd") HisDto acc, Model model) throws Exception {
		//         System.out.println(acc.getEmail() + "pppp" + acc.getPassword());

		
		 HisDto dto = serv.finduserbypwd(acc.getEmail(), acc.getPassword());

		//System.out.println("UnlockAccountController.unlockUserAcc()" + dto);
		if (dto != null) {

			if (dto.getStatus().equalsIgnoreCase("unlocked")) {

				return  "";

			} else if (dto.getStatus().equalsIgnoreCase("")) {

				model.addAttribute("resultMsg", "your Account is Locked,please set your  password first");
				return  "";

			}

		}

		model.addAttribute("resultMsg", "ur email n pasword are not matched");
		return  "";
	}

}
