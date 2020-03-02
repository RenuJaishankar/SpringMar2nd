package com.example.demo.Controller;

import com.example.demo.Model.Donut;
import com.example.demo.Repo.DonutRepo;
import com.example.demo.Service.DonutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class DonutController {
@Autowired
    DonutService donutService;
@Autowired
DonutRepo donutRepo;
    //get method
    @GetMapping("/donuts")
    public Iterable getAllDonuts() {
        return donutService.getAllDonuts();
    }
//TODO implement create method
        @PostMapping("/donut")
       public Donut createDonut(@RequestBody Donut donut){// "create" aligns with create in CRUD

        return donutService.createDonut(donut); //create aligns with create in CRUD
    }

    @PutMapping("/donut/{id}")
        public Optional<Donut> updateDonut(@RequestBody Donut newDonut, @PathVariable Long id) {
            Optional<Donut> updatedDonut = donutRepo.findById(id).map(donut -> {
                donut.setFrosted(newDonut.isFrosted());
                donut.setName(newDonut.getName());
                donut.setDonutType(newDonut.getDonutType());
                return donutRepo.save(donut);
            });
            return donutRepo.findById(id);
        }

@GetMapping("/donut/{id}")
public Optional <Donut > getDonut(@PathVariable Long id){

            return donutService.getDonut(id);
        }


        @DeleteMapping("/donut/{id}")
        public void deleteDonut(@PathVariable Long id){
            donutService.deleteDonut(id);
        }


}
