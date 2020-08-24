package com.his.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.his.dto.HisDto;
import com.his.service.HisService;

@RestController
public class viewRestController {
	
	
	@Autowired
	private HisService serv;
	@GetMapping(value = "/viewworkers", produces = { "application/json" })
	public List<HisDto> handleViewContactsLink(@RequestParam("role") String role) {

		List<HisDto> getAllContacts = serv.FetchCWdetails(role);
System.out.println(getAllContacts);
		return getAllContacts;
	}

}
