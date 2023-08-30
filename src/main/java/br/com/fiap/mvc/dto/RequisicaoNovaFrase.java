package br.com.fiap.mvc.dto;

import javax.validation.constraints.NotBlank;

import br.com.fiap.mvc.model.Frase;
import br.com.fiap.mvc.model.StatusFrase;

public class RequisicaoNovaFrase {

	@NotBlank 
	private String txt;
	
	public String getTxt() {
		return txt;
	}
	public void setTxt(String txt) {
		this.txt = txt;
	}
	
	public Frase toFrase() {
		Frase fr = new Frase();
		fr.setTxt(txt);
		fr.setStatus(StatusFrase.ATIVA);
		return fr;
	}
	
	
}
