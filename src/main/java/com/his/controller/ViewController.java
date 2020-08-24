package com.his.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;

import com.his.dto.HisDto;
import com.his.dto.HisModel;
import com.his.service.HisService;

@Controller
public class ViewController {
	
	@Autowired
	private HisService serv;

	@ModelAttribute("roleList")
	public   List<String>  populateroles(){
		List<String> list=new ArrayList();
		 list.add("cw");
		list.add("admin");
		return list;
	}	
	
	
	@GetMapping("/getworkers")
	public String loadForm(@ModelAttribute("cwdetails") HisModel dto) {

		return "viewcwdetails";
	}
	
	
	

	
 

}
