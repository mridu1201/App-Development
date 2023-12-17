package trailblazers.school12.service;

import java.util.List;

import trailblazers.school12.model.Application;

public interface ApplicationService {
    public Application submitApplication(Long uid, String name, String fathername, String emis, String occupation, String mobile, String gender, String appemail, String address);
    public List<Application> getApplicationsByUid(Long uid);
    public void postApplication(Application app);
}
