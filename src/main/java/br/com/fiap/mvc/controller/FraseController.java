package br.com.fiap.mvc.controller;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import br.com.fiap.mvc.dto.RequisicaoAlterarFrase;
import br.com.fiap.mvc.dto.RequisicaoStatusFrase;
import br.com.fiap.mvc.dto.RequisicaoNovaFrase;
import br.com.fiap.mvc.model.Frase;
import br.com.fiap.mvc.model.StatusFrase;
import br.com.fiap.mvc.repository.FraseRepository;

@Controller
@RequestMapping("frases")
public class FraseController {
	
	@Autowired
	private FraseRepository fraseRepository;

	@GetMapping("formulario") 
	public String formulario(RequisicaoNovaFrase requisicao) {
		return "frases/formulario";
	}
	@GetMapping("update") 
	public String update(RequisicaoAlterarFrase requisicao) {
		return "frases/update";
	}
	@GetMapping("delete") 
	public String delete(RequisicaoStatusFrase requisicao) {
		return "frases/delete";
	}
	@GetMapping("ative") 
	public String ative(RequisicaoStatusFrase requisicao) {
		return "frases/ative";
	}
	@PostMapping("novo")
	public String novo(@Valid RequisicaoNovaFrase requisicao, BindingResult result) {
		if(result.hasErrors()) {
			return "frases/formulario";
		}	
		Frase frases = requisicao.toFrase();
		fraseRepository.save(frases);		
		return "redirect:/home";
	}
	@PostMapping("alterar")
	public String alterar(@Valid RequisicaoAlterarFrase requisicao, BindingResult result) {
	    if (result.hasErrors()) {
	        return "frases/update";
	    }
	    Long id = requisicao.getId();
	    Optional<Frase> optionalFrase = fraseRepository.findById(id);
	    if (optionalFrase.isEmpty()) {
	        return "redirect:/home";
	    }
	    Frase frase = optionalFrase.get();
	    frase.setTxt(requisicao.getTxt());
	    fraseRepository.save(frase);
	    return "redirect:/home";
	}
	@PostMapping("desativar")
	public String desativar(@Valid RequisicaoStatusFrase requisicao, BindingResult result) {
	    final Logger logger = LoggerFactory.getLogger(FraseController.class);
	    if (result.hasErrors()) {
	        logger.error("Erros de validação encontrados no formulário de desativação:");
	        for (ObjectError error : result.getAllErrors()) {
	            logger.error("- {}", error.getDefaultMessage());
	        }
	        return "frases/delete";
	    }

	    Long id = requisicao.getId();
	    Optional<Frase> optionalFrase = fraseRepository.findById(id);
	    if (!optionalFrase.isPresent()) {
	        logger.warn("ID não encontrado no banco de dados: {}", id);
	        return "redirect:/home";
	    }

	    Frase frase = optionalFrase.get();
	    frase.setStatus(StatusFrase.INATIVA);
	    fraseRepository.save(frase);

	    logger.info("Frase desativada com sucesso: ID {}", id);

	    return "redirect:/home";
	}

	@PostMapping("ativar")
	public String ativar(@Valid RequisicaoStatusFrase requisicao, BindingResult result) {
	    final Logger logger = LoggerFactory.getLogger(FraseController.class);
	    if (result.hasErrors()) {
	        logger.error("Erros de validação encontrados no formulário de ativação:");
	        for (ObjectError error : result.getAllErrors()) {
	            logger.error("- {}", error.getDefaultMessage());
	        }
	        return "frases/ative";
	    }
	    Long id = requisicao.getId();
	    Optional<Frase> optionalFrase = fraseRepository.findById(id);
	    if (!optionalFrase.isPresent()) {
	        logger.warn("ID não encontrado no banco de dados: {}", id);
	        return "redirect:/home";
	    }

	    Frase frase = optionalFrase.get();
	    frase.setStatus(StatusFrase.ATIVA);
	    fraseRepository.save(frase);

	    logger.info("Frase ativada com sucesso: ID {}", id);

	    return "redirect:/home";
	}

}
