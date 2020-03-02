package com.example.demo.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Donut {
     @Id
     @GeneratedValue(strategy= GenerationType.AUTO)
     private Long id;
    private String name;
    private boolean frosted;
    private Type DonutType;
    public Donut() {
    }
    public Donut( String name, boolean frosted, Type donutType) {
        this.name = name;
        this.frosted = frosted;
        DonutType = donutType;
    }


    public Type getDonutType() {
        return DonutType;
    }

    public void setDonutType(Type donutType) {
        DonutType = donutType;
    }

    public Long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

        public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isFrosted() {
        return frosted;
    }

    public void setFrosted(boolean frosted) {
        this.frosted = frosted;
    }


}
