package com.his.service;

import java.util.List;

import com.his.dto.HisDto;

public interface HisService {

	
	public boolean RegisterCw(HisDto dto) throws Exception;

	String fetchemail(String emailid);
		public HisDto   UnclockAcc(String email,String password);

		public boolean UpdateUser(HisDto unclockAcc) throws Exception;
		
		public List<HisDto> FetchCWdetails(String role);

		public List<HisDto> FetchAllCWdetails();

		HisDto GetCwById(Integer no);
		
		boolean DeleteHisWorker(Integer no);

		public boolean DeleteACtHisWorker(int cw_id);

		public HisDto finduserbypwd(String email, String password) throws Exception;
}

