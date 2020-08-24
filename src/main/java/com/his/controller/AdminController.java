package com.his.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.his.dto.HisDto;
import com.his.service.HisService;

@Controller
public class AdminController {

	@Autowired
	private HisService serv;

	@GetMapping("/validateEmail")
	public @ResponseBody String checkUser(HttpServletRequest req) {

		String emailid = req.getParameter("email");
		//System.out.println("RegistrationController.checkUser()" + emailid);
		return serv.fetchemail(emailid);
	}

	@ModelAttribute("gendersList")
	public List<String> populateGenders() {
		List<String> list = new ArrayList();
		list.add("male");
		list.add("female");
		return list;
	}

	@ModelAttribute("rolesList")
	public List<String> populateRoles() {
		List<String> list = new ArrayList();
		list.add("admin");
		list.add("cw");
		return list;
	}

	@GetMapping("/regis")
	public String loadForm( @ModelAttribute("cwregis") HisDto dto) {

		return "registration";
	}

	@PostMapping("/regis")
	public String procesForm(@ModelAttribute("cwregis") HisDto cmd, RedirectAttributes attribures, BindingResult errors)
			throws Exception {
System.out.println(cmd);
		boolean registerCw = serv.RegisterCw(cmd);

		if (registerCw)
			attribures.addFlashAttribute("succMag", "Cw Details Register Successfully");
		else
			attribures.addFlashAttribute("errMag", "Cw Details Not Registred");
		return "redirect:/success";

	}

	@GetMapping("/success")
	public String UserSaved(@ModelAttribute("cwregis") HisDto cmd) {
		return "registration";
	}
	
	
	
	
	
	/*
	 * @GetMapping("/viewworkers")
	 * 
	 * public String handleViewContactsLink(@PathVariable("role") String role,Model
	 * model) {
	 * 
	 * List<HisDto> getAllContacts = serv.FetchCWdetails(role);
	 * 
	 * model.addAttribute("viewworkers", getAllContacts); return "viewcwdetails"; }
	 */
	@GetMapping("/viewworkers")
	String handleViewContactsLink(Model model) {

		 List<HisDto> fetchAllCWdetails = serv.FetchAllCWdetails();

		model.addAttribute("cwdetails", fetchAllCWdetails);
		return "viewcwdetails";
	}
	
	@GetMapping(value = "/editcw")
	public String editContact(@RequestParam("cw_id") Integer cw_id,  Model model)
	{
		HisDto getContactById = serv.GetCwById(cw_id);
		model.addAttribute("cwregis",getContactById);
		
		return "registration";

	}	

	@GetMapping("/deletecw")
public String deleteContact(@RequestParam("cw_id") int cw_id )
{
	 serv.DeleteHisWorker(cw_id);
	 
		return "redirect:/viewworkers";

}

	@GetMapping("/Activatecw")
	public String Activatecw(@RequestParam("cw_id") int cw_id )
	{
		 serv.DeleteACtHisWorker(cw_id);
		 
			return "redirect:/viewworkers";

	}	
	

}
