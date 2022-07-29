package com.ironhack.FPBackend.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Persona extends JpaRepository<Persona, Long> {

    double getSaldo();

    Long getIdPersona();
}
