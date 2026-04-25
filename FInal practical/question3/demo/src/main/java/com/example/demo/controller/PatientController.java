package com.example.demo.controller;


import com.example.demo.model.Patient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class PatientController {

    @GetMapping("/patients")
    public ResponseEntity<List<Patient>> getPatients() {

        List<Patient> patients= Arrays.asList(
                new Patient(1, "Priyanshu", 21),
                new Patient(2, "Sahil", 23),
                new Patient(3, "Rahul ", 24)
        );
        return new ResponseEntity<>(patients, HttpStatus.OK);
    }

    @PostMapping("/patients")
    public ResponseEntity<Patient> createPatient(@RequestBody Patient patient) {
        System.out.println("Creating a new patient with id " + patient.getId());
        System.out.println(patient.getName());
        System.out.println(patient.getAge());
        return new ResponseEntity<>(patient, HttpStatus.CREATED);
    }
}


