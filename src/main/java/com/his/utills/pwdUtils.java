package com.his.utills;

import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.context.annotation.Configuration;

@Configuration
public class pwdUtils {
	private static final String SECRET_KEY = "abc123xyz123abcd";
	private static final String INIT_VECTOR = "abc123xyz123abcd";

	public static final String  pwdEncrypt(String  text) throws Exception
	{
		
		IvParameterSpec iv=new IvParameterSpec(INIT_VECTOR.getBytes());
		
		SecretKeySpec secretKeySpec = new SecretKeySpec(SECRET_KEY.getBytes("UTF-8"), "AES");
		
		Cipher instance = Cipher.getInstance("AES/CBC/PKCS5PADDING");

		instance.init(Cipher.ENCRYPT_MODE, secretKeySpec,
				iv);
		byte[] doFinal = instance.doFinal(text.getBytes());
		
		String encodeToString = Base64.getEncoder().encodeToString(doFinal);
		return encodeToString;
	}
	public static String decryptMsg(String msg) throws Exception {
		IvParameterSpec ivParamSpec = new IvParameterSpec(INIT_VECTOR.getBytes());
		SecretKeySpec secretKeySpec = new SecretKeySpec(SECRET_KEY.getBytes("UTF-8"), "AES");
		Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
		cipher.init(Cipher.DECRYPT_MODE, secretKeySpec, ivParamSpec);
		byte[] decodedMsg = Base64.getDecoder().decode(msg);
		byte[] decrypted = cipher.doFinal(decodedMsg);
		return new String(decrypted);	
	}	
	/*
	 * public static String decrypt(String encryptedData) throws Exception {
	 * 
	 * Key key = generateKey(); Cipher c = Cipher.getInstance(ALGO);
	 * c.init(Cipher.DECRYPT_MODE, key); String decordedValue = new
	 * BASE64Decoder().decodeBuffer(encryptedData).toString().trim();
	 * System.out.println("This is Data to be Decrypted" + decordedValue); return
	 * decordedValue; }
	 */
	
}
