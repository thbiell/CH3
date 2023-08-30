package br.com.fiap.mvc.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import br.com.fiap.mvc.model.Frase;
import br.com.fiap.mvc.model.StatusFrase;


public class RequisicaoAlterarFrase {
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	//@NotNull
	private Long id;
	@NotBlank 
	private String txt;
	
	public String getTxt() {
		return txt;
	}
	public void setTxt(String txt) {
		this.txt = txt;
	}
	public Frase atualizacao() {
		Frase fr = new Frase();
		fr.setId(id);
		fr.setTxt(txt);
		fr.setStatus(StatusFrase.ATIVA);
		return fr;
	}

}
