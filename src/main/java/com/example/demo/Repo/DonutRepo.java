package com.example.demo.Repo;

import com.example.demo.Model.Donut;
import org.springframework.data.repository.CrudRepository;

public interface DonutRepo extends CrudRepository<Donut, Long> {
}
