package com.tracker.expensetracker.service;

import com.tracker.expensetracker.model.Transaction;
import com.tracker.expensetracker.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository repository;

    public List<Transaction> getAllTransactions() {
        return repository.findAll(Sort.by(Sort.Direction.DESC, "date"));
    }

    public Transaction saveTransaction(Transaction transaction) {
        return repository.save(transaction);
    }

    public void deleteTransaction(Long id) {
        repository.deleteById(id);
    }
}
