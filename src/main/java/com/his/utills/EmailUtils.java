package com.his.utills;

import java.io.BufferedReader;
import java.io.FileReader;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import com.his.entity.HisEntity;

@Configuration
public class EmailUtils {
	
	@Autowired
	private JavaMailSender  mail;
	
	public Boolean MailSend(HisEntity save) throws Exception
	{
		boolean isSent=false;
		try {
			MimeMessage createMimeMessage = mail.createMimeMessage();
			MimeMessageHelper helper=new MimeMessageHelper(createMimeMessage);
			helper.setTo(save.getEmail());
			helper.setSubject("Unlock your Account");
			helper.setText(UnlockMailSender(save),true);
			System.out.println("EmailUtils.MailSend()"+save);
			//mail.send(createMimeMessage);
			return true;
			
			
		} catch (MessagingException e) {
			e.printStackTrace();
		}	
		
		return isSent;

	}
	
	private String  UnlockMailSender(HisEntity user) throws Exception
	{
		//System.out.println("EmailUtils.UnlockMailSender()---------------------------------"+user);
		StringBuffer sb=new StringBuffer("");
		FileReader fr=new FileReader("D:/Email-Message-Format.txt");
		BufferedReader br=new BufferedReader(fr);
		
		String line = br.readLine();

		while (line != null) {
			sb.append(line);
			line = br.readLine();
		}
		
		br.close();
		
		
		String mailBody = sb.toString();
		mailBody = mailBody.replace("{FNAME}", user.getFirstName());
		mailBody = mailBody.replace("{LNAME}", user.getLastName());
		mailBody = mailBody.replace("{TEMP-PWD}",pwdUtils.decryptMsg(user.getPassword()));
		mailBody = mailBody.replace("{EMAIL}", user.getEmail());
	//	mailBody = mailBody.replace("{ID}", user.getCw_id());

		return mailBody;
	}

	
	

}
