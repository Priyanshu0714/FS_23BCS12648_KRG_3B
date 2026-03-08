package com.priyanshu.healthhub.service;

import com.priyanshu.healthhub.dto.PatientDTO;
import com.priyanshu.healthhub.model.Patient;
import com.priyanshu.healthhub.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public PatientDTO createPatient(PatientDTO dto) {
        Patient patient = new Patient();
        patient.setName(dto.getName());
        patient.setEmail(dto.getEmail());
        patient.setHealthRecord(dto.getHealthRecord());

        Patient savedPatient = patientRepository.save(patient);
        dto.setId(savedPatient.getId());
        return dto;
    }

    public List<PatientDTO> getAllPatients() {
        return patientRepository.findAll().stream().map(patient -> {
            PatientDTO dto = new PatientDTO();
            dto.setId(patient.getId());
            dto.setName(patient.getName());
            dto.setEmail(patient.getEmail());
            dto.setHealthRecord(patient.getHealthRecord());
            return dto;
        }).collect(Collectors.toList());
    }
}