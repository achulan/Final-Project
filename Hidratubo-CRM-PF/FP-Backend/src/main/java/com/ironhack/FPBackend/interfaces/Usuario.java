package com.ironhack.FPBackend.interfaces;

import com.ironhack.FPBackend.dominio.Rol;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Usuario extends JpaRepository<Usuario, Long> {
    static Usuario findByUsername(String username) {
        return null;
    }

    String getPassword();

    Rol[] getRoles();

    String getUsername();
}