package com.example;

import java.util.ArrayList;

/**
 * Created by paul on 15.09.16.
 */
public class ParkingSpot {
    private String name;
    ArrayList<Bike> bikes = new ArrayList<>();


    public ParkingSpot(String name) {
        this.name = name;
    }

    public ArrayList<Bike> getBikes() {
        return bikes;
    }

    public void setBikes(ArrayList<Bike> bikes) {
        this.bikes = bikes;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
