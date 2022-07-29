package com.ironhack.FPBackend.servicio;

import java.util.List;

import com.ironhack.FPBackend.interfaces.Persona;
import com.ironhack.FPBackend.interfaces.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PersonaServiceImpl implements PersonaService {

    @Autowired
    private Persona persona;

    @Override
    @Transactional(readOnly = true)
    public List<Persona> listarPersonas() {
        return (List<Persona>) persona.findAll();
    }

    @Override
    @Transactional
    public void guardar(Persona persona) {
        persona.save(persona);
    }

    @Override
    @Transactional
    public void eliminar(Persona persona) {
        persona.delete(persona);
    }

    @Override
    @Transactional(readOnly = true)
    public Persona encontrarPersona(Persona persona) {
        return persona.findById(persona.getIdPersona()).orElse(null);
    }
}
