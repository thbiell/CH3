package br.com.fiap.mvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.fiap.mvc.model.Frase;
import br.com.fiap.mvc.model.StatusFrase;
import br.com.fiap.mvc.repository.FraseRepository;

@Controller
@RequestMapping("/home")
public class HomeController {
	
	@Autowired
	private FraseRepository repository;
	
	@GetMapping()
	public String home(Model model) {
		List<Frase> frases = repository.findAll();
		model.addAttribute("frases", frases);
		return "home"; 
	}
	
	@GetMapping("/{status}")
	public String porStatus(@PathVariable("status") String status, Model model) {
		List<Frase> frases = repository.findByStatus(StatusFrase.valueOf(status.toUpperCase()));
		model.addAttribute("frases", frases);
		model.addAttribute("status", status);
		return "home"; 
	}
	
	@ExceptionHandler(IllegalArgumentException.class)
	public String onError() {
		return "redirect:/home";
	}
}
