package br.com.fiap.mvc.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Frase {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(length = 8000)
	private String txt;
	
	@Enumerated(EnumType.STRING)
	private StatusFrase status;

	public String getTxt() {
		return txt;
	}

	public void setTxt(String txt) {
		this.txt = txt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public StatusFrase getStatus() {
		return status;
	}

	public void setStatus(StatusFrase status) {
		this.status = status;
	}
	
	

}
