package com.his.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.his.entity.HisEntity;

@Repository
public interface HisAdminRepo extends JpaRepository<HisEntity, Integer> {

	public HisEntity findByEmail(String emailid);

	public HisEntity findByEmailAndPassword(String emailid, String password);

	public List<HisEntity> findByRole(String role);

}
