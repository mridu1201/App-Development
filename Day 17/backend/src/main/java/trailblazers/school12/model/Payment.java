package trailblazers.school12.model;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private BigDecimal amount;
    
    // Other payment-related fields, getters, setters, etc.
    
    @ManyToOne
    @JoinColumn(name = "uid")
    private User user;
    
    // Constructors, getters, setters, etc.
}
