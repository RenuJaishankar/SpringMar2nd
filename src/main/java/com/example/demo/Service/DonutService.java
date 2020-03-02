package com.example.demo.Service;


import com.example.demo.Model.Donut;
import com.example.demo.Model.Type;
import com.example.demo.Repo.DonutRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Service
public class DonutService {
@Autowired
DonutRepo donutRepo;
//get all method
    public Iterable getAllDonuts(){return donutRepo.findAll();};
    //TODO implement create method
public Donut  createDonut(Donut donut ){
     return donutRepo.save(donut);
}
//TODO make update method

    public Optional<Donut> updateDonut(Long id){
    return donutRepo.findById(id);
    };
//to do make individual real method

public Optional<Donut> getDonut(Long id){
    return donutRepo.findById(id);
}
    public void deleteDonut(Long id){
        donutRepo.deleteById(id);
    }
}
