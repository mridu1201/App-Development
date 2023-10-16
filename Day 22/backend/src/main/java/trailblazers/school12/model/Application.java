package trailblazers.school12.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "_application")
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long aid;
    
    private String name;
    private String fathername;
    private String emis;
    private String occupation;
    private String mobile;
    private String gender;
    private String appemail;
    private String address;

    private boolean submitted;
    @ManyToOne
    @JoinColumn(name = "uid")
    private User user;

    public void setUser(User user) {
        this.user = user;
    }

    public void setSubmitted(boolean submitted) {
        this.submitted = submitted;
    }
 
    // Getters and setters
}
