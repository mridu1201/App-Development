package trailblazers.school12.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import trailblazers.school12.model.Product;
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    Optional<Product> findByProductName(String productName);

    Product findByPid(Long pid);

    void deleteByPid(Long pid);

}

