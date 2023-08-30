package br.com.fiap.mvc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.fiap.mvc.model.Frase;
import br.com.fiap.mvc.model.StatusFrase;

@Repository
public interface FraseRepository extends JpaRepository<Frase, Long> {

	List<Frase> findByStatus(StatusFrase aguardando);
	
}