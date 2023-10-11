package trailblazers.school12.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import trailblazers.school12.dto.request.UserRequest;
import trailblazers.school12.dto.response.UserResponse;
import trailblazers.school12.model.User;
import trailblazers.school12.model.enumerate.Role;
import trailblazers.school12.repository.OrderRepository;
import trailblazers.school12.repository.UserRepository;
import trailblazers.school12.service.UserService;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

//    private final UserRepository userRepository;
//    private final OrderRepository orderRepository;
//
//    @Override
//    public List<UserResponse> getAllUsers() {
//        List<User> userList = userRepository.findAll();
//        return userList.stream()
//                .filter(user -> !user.getRole().equals(Role.ADMIN))
//                .map(this::mapUserToUserResponse)
//                .collect(Collectors.toList());
//    }
//
//    @Override
//    public UserResponse getUser(Long uid) {
//        User user = userRepository.findByUid(uid);
//        return mapUserToUserResponse(user);
//    }
//
//    @Override
//    public UserResponse updateUser(UserRequest request, Long uid) {
//        User user = userRepository.findByUid(uid);
//        User newUser = new User();
//        if (user != null) {
//            newUser = User.builder()
//            		.firstname(request.getFirstname())
//            		.lastname(request.getLastname())
//                    .email(request.getEmail())
//                    .password(request.getPassword())
//                    .age(request.getAge())
//                    .role(request.getRole())
//                    .isEnabled(request.getIsEnabled())
//                    .build();
//            userRepository.save(newUser);
//        }
//        return mapUserToUserResponse(newUser);
//    }
//
//    @Override
//    public boolean deleteUser(Long uid) {
//        User user = userRepository.findByUid(uid);
//
//        if (user != null) {
//            orderRepository.deleteByUserUid(uid);
//            userRepository.deleteByUid(uid);
//            return true;
//        } else {
//            return false;
//        }
//    }
//
//    private UserResponse mapUserToUserResponse(User user) {
//        return UserResponse.builder()
//                .uid(user.getUid())
//                .firstname(user.getFirstname())
//                .lastname(user.getLastname())
//                .password(user.getPassword())
//                .age(user.getAge())
//                .email(user.getEmail())
//                .role(user.getRole())
//                .isEnabled(user.getIsEnabled())
//                .build();
//    }
	 private final UserRepository userRepository;
	    private final OrderRepository orderRepository;

	    @Override
	    public List<UserResponse> getAllUsers() {
	        List<User> userList = userRepository.findAll();
	        return userList.stream()
	                .filter(user -> !user.getRole().equals(Role.ADMIN))
	                .map(this::mapUserToUserResponse)
	                .collect(Collectors.toList());
	    }

	    @Override
	    public UserResponse getUser(Long uid) {
	        User user = userRepository.findByUid(uid);
	        if (user != null) {
	            return mapUserToUserResponse(user);
	        } else {
	            return null; // Handle user not found
	        }
	    }

	    @Override
	    public UserResponse updateUser(UserRequest request, Long uid) {
	    	 User user = userRepository.findByUid(uid);
	    	    if (user != null) {
	    	        user.setFirstname(request.getFirstname());
	    	        user.setLastname(request.getLastname());
	    	        user.setEmail(request.getEmail());
	    	        user.setPassword(request.getPassword());
	    	        user.setAge(request.getAge());
	    	        user.setRole(request.getRole());
	    	        
	    	        // Check if request.getIsEnabled() is not null before setting it
	    	        if (request.getIsEnabled() != null) {
	    	            user.setIsEnabled(request.getIsEnabled());
	    	        }
	    	        
	    	        userRepository.save(user); // Update the existing user
	    	        return mapUserToUserResponse(user);
	    	    } else {
	    	        return null; // Handle user not found
	    	    }
	    }

	    @Override
	    public boolean deleteUser(Long uid) {
	        User user = userRepository.findByUid(uid);

	        if (user != null) {
	            orderRepository.deleteByUserUid(uid);
	            userRepository.delete(user); // Use delete instead of deleteByUid
	            return true;
	        } else {
	            return false; // Handle user not found
	        }
	    }

	    private UserResponse mapUserToUserResponse(User user) {
	        return UserResponse.builder()
	                .uid(user.getUid())
	                .firstname(user.getFirstname())
	                .lastname(user.getLastname())
	                .password(user.getPassword())
	                .age(user.getAge())
	                .email(user.getEmail())
	                .role(user.getRole())
	                .isEnabled(user.getIsEnabled())
	                .build();
	    }
}

