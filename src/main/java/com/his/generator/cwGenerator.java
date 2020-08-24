package com.his.generator;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public class cwGenerator implements IdentifierGenerator {
	private static final String sql_seq = "select cw_seq.nextval from dual";
	public static final String INCREMENT_PARAM = null;
	public static final String VALUE_PREFIX_PARAMETER = null;
	public static final String NUMBER_FORMAT_PARAMETER = null;

	
	@Override
	public Serializable generate(SharedSessionContractImplementor session, Object object) throws HibernateException {

		String prefix = "CW";
		String suffix = "";
		try {
			Connection con = session.connection();
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(sql_seq);

		if (rs.next()) {
				int seqval = rs.getInt(1);
				suffix = String.valueOf(seqval);
			}
			

		} catch (Exception e) {
			e.printStackTrace();
		}

		return prefix + suffix;
	}

}
