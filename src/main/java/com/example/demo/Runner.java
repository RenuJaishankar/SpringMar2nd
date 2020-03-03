package com.example.demo;

import com.example.demo.Model.Donut;
import com.example.demo.Model.Type;
import com.example.demo.Repo.DonutRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Runner implements CommandLineRunner {
    @Autowired
    DonutRepo donutRepo;
    @Override
    public void run(String...args)throws Exception{
     donutRepo.save(new Donut("Glazed",true, Type.YEAST));
        donutRepo.save(new Donut("Strawberry Glazed",true, Type.YEAST));
        donutRepo.save(new Donut("Chocolate Glazed",true, Type.YEAST));
        donutRepo.save(new Donut("Strawberry Glazed",true, Type.YEAST));
        donutRepo.save(new Donut("Chocolate Glazed",true, Type.YEAST));
        donutRepo.save(new Donut("Strawberry Glazed",true, Type.YEAST));
        donutRepo.save(new Donut("Chocolate Glazed",false, Type.YEAST));
        donutRepo.save(new Donut("Strawberry Glazed",true, Type.YEAST));
        donutRepo.save(new Donut("Chocolate Glazed",true, Type.YEAST));
        donutRepo.save(new Donut("Strawberry Glazed",true, Type.YEAST));
        donutRepo.save(new Donut("Chocolate Glazed",true, Type.YEAST));
        donutRepo.save(new Donut("Strawberry Glazed",true, Type.YEAST));
        donutRepo.save(new Donut("Chocolate Glazed",false, Type.YEAST));

    }
}
