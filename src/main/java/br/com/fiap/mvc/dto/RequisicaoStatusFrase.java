package br.com.fiap.mvc.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class RequisicaoStatusFrase {

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @NotNull
    private Long id;

    //@NotBlank
    private String txt;

    public String getTxt() {
        return txt;
    }

    public void setTxt(String txt) {
        this.txt = txt;
    }
}
