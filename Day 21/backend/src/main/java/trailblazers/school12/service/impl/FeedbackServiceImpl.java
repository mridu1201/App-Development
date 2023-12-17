package trailblazers.school12.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import trailblazers.school12.dto.request.FeedbackRequest;
import trailblazers.school12.dto.response.FeedbackResponse;
import trailblazers.school12.model.Feedback;
import trailblazers.school12.repository.FeedbackRepository;
import trailblazers.school12.service.FeedbackService;
@Service
@Transactional
@RequiredArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {
	 private final FeedbackRepository feedbackRepository;

	    @Override
	    public boolean saveFeedback(FeedbackRequest request) {
	        if (feedbackRepository.findByNameAndEmail(request.getName(),
	                request.getEmail()).isPresent()) {
	            return false;
	        }

	        var feedback = Feedback.builder()
	                .name(request.getName())
	                .email(request.getEmail())
	                .comment(request.getComment())
	                
	                .build();
	        feedbackRepository.save(feedback);
	        return true;
	    }

	    @Override
	    public List<FeedbackResponse> getFeedbacks() {
	        List<Feedback> feedbacks = feedbackRepository.findAll();
	        return feedbacks.stream()
	                .map(feedback -> {
	                    FeedbackResponse response = new FeedbackResponse();
	                    response.setFid(feedback.getFid());
	                    response.setName(feedback.getName());
	                    response.setEmail(feedback.getEmail());
	                    response.setComment(feedback.getComment());
	                    return response;
	                })
	                .collect(Collectors.toList());
	    }
	}