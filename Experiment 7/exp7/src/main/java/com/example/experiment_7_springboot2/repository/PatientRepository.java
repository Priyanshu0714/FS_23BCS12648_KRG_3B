package com.example.experiment_7_springboot2.repository;

import com.example.experiment_7_springboot2.entity.Patient;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PatientRepository extends JpaRepository<Patient, Long> {
    Slice<Patient> findByIdGreaterThanOrderByIdAsc(Long id, Pageable pageable);
    @Query("SELECT p FROM Patient p WHERE p.disease = :disease")
    List<Patient> findByDisease(@Param("disease") String disease);
}