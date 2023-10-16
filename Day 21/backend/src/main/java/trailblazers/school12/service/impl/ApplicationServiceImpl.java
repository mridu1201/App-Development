package trailblazers.school12.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import trailblazers.school12.model.Application;
import trailblazers.school12.model.User;
import trailblazers.school12.repository.ApplicationRepository;
import trailblazers.school12.repository.UserRepository;
import trailblazers.school12.service.ApplicationService;

@Service
public class ApplicationServiceImpl implements ApplicationService {
	
	@Autowired
    private  ApplicationRepository applicationRepository;
    private final UserRepository userRepository;

    @Autowired
    public ApplicationServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

	@Override
	public Application submitApplication(Long uid, String name, String fathername, String emis, String occupation, String mobile, String gender, String appemail, String address) {
        User user = userRepository.findById(uid).orElseThrow(() ->
        new EntityNotFoundException("User not found with ID: " + uid)
    );

    Application application = new Application();
    application.setSubmitted(true);
    application.setUser(user);
    application.setName(name);
    application.setFathername(fathername); 
    application.setEmis(emis); 
    application.setOccupation(occupation); 
    application.setMobile(mobile); 
    application.setGender(gender); 
    application.setAppemail(appemail); 
    application.setAddress(address); 

    return applicationRepository.save(application);
	}

	@Override
	public List<Application> getApplicationsByUid(Long uid) {
        return applicationRepository.findByUser_Uid(uid);
	}

	@Override
	public void postApplication(Application app) {
		applicationRepository.save(app);
		
	}

}
