package com.example.demo;

import com.example.demo.Model.Donut;
import com.example.demo.Repo.DonutRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
     public Integer returnsInteger(Integer i) {return i;};
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);

			};

		}




