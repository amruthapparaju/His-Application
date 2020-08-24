package com.his.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.his.dto.HisDto;
import com.his.entity.HisEntity;
import com.his.repo.HisAdminRepo;
import com.his.utills.EmailUtils;
import com.his.utills.Passwordgeneratorone;
import com.his.utills.pwdUtils;

@Service
public class HisServiceimpl implements HisService {

	@Autowired
	private HisAdminRepo repo;

	@Autowired
	private Passwordgeneratorone repo1;
	@Autowired
	private pwdUtils pwd;

	@Autowired
	private EmailUtils emailutils;

	@Override
	public String fetchemail(String emailid) {

		HisEntity findByEmail = repo.findByEmail(emailid);
		if (null != findByEmail) {
			return "Duplicate";
		}
		return "Unique";
	}

	@Override
	public boolean RegisterCw(HisDto dto) throws Exception {
		HisEntity entity = new HisEntity();
		BeanUtils.copyProperties(dto, entity);

		entity.setPassword(pwdUtils.pwdEncrypt(repo1.generatePasswordone(6)));
		entity.setStatus("LOCKED");
		entity.setDelete_flag("N");
		HisEntity save = repo.save(entity);
		emailutils.MailSend(save);

		return save != null;
	}

	@Override
	public HisDto UnclockAcc(String email, String password) {

		HisEntity emailAndPassword = repo.findByEmailAndPassword(email, password);
		HisDto dto = new HisDto();
		if (emailAndPassword != null) {
			BeanUtils.copyProperties(emailAndPassword, dto);
			return dto;
		}

		return null;
	}

	@Override
	public boolean UpdateUser(HisDto unclockAcc) throws Exception {
		HisEntity entity = new HisEntity();

		BeanUtils.copyProperties(unclockAcc, entity);
		String password = entity.getPassword();

		entity.setPassword(pwdUtils.pwdEncrypt(password));
		entity.setStatus("UN-LOCKED");
		HisEntity save = repo.save(entity);
		return save != null;
	}

	@Override
	public List<HisDto> FetchCWdetails(String role) {
List<HisDto> listDTo=new ArrayList();	
		List<HisEntity> findByRole = repo.findByRole(role);
		findByRole.forEach(dto->{
			HisDto dto1=new HisDto();
			listDTo.add(dto1);
		});
		
		
		return listDTo;
	}
	
	public List<HisDto> FetchAllCWdetails() {
		List<HisDto> Listdto = new ArrayList<HisDto>();
		List<HisEntity> findAll=null;
		try {
			 findAll = repo.findAll();
				if (findAll != null)
				{
			findAll.forEach(dto1 -> {
				HisDto dto = new HisDto();

				BeanUtils.copyProperties(dto1, dto);
				Listdto.add(dto);
			});
				}
		} catch (Exception e) {
e.printStackTrace();
		}

		return Listdto;
	}

	@Override
	public HisDto GetCwById(Integer no) {
		HisDto dto = null;
		Optional<HisEntity> result = repo.findById(no);
			if (result.isPresent()) {
			HisEntity contactEntity = result.get();
			dto = new HisDto();
			BeanUtils.copyProperties(contactEntity, dto);
			return dto;

		}
			else
				System.out.println("not there");
			return null;
		}

	@Override
	public boolean DeleteHisWorker(Integer no) {
		 Optional<HisEntity> findById = repo.findById(no);
				HisEntity entity = findById.get();
				entity.setDelete_flag("D");
				
				HisEntity save = repo.save(entity);
				
				return save!=null;
				
		
			

	}

	@Override
	public boolean DeleteACtHisWorker(int no) {
		 Optional<HisEntity> findById = repo.findById(no);
				HisEntity entity = findById.get();
				entity.setDelete_flag("N");
				
				HisEntity save = repo.save(entity);
				
				return save!=null;		
	}

	@Override
	public HisDto finduserbypwd(String email, String password) throws Exception {
		HisDto dto =new HisDto();
		
		HisEntity ByEmailAndPassword = repo.findByEmailAndPassword(email, pwdUtils.pwdEncrypt(password));
//		System.out.println("RegistrationImpl.finduserbypwd()"+findByEmailAndPassword);
		if(ByEmailAndPassword!=null)
		{
			BeanUtils.copyProperties(ByEmailAndPassword, dto);
			return dto;
		}
		
		return null;
	}

}
