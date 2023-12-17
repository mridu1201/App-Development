package trailblazers.school12.service;

import java.util.List;

import trailblazers.school12.dto.request.FeedbackRequest;
import trailblazers.school12.dto.response.FeedbackResponse;

public interface FeedbackService {

    boolean saveFeedback(FeedbackRequest request);

    List<FeedbackResponse> getFeedbacks();

}