package com.example;

import java.util.ArrayList;

/**
 * Created by paul on 15.09.16.
 */
public class ParkingSpot {
    private String name;
    ArrayList<Bike> bikes = new ArrayList<>();
    ArrayList<Bike> availableBikes = new ArrayList<>();

    public ParkingSpot(String name) {
        this.name = name;
    }

    public ArrayList<Bike> getBikes() {
        return bikes;
    }

    public ArrayList<Bike> getAvailableBikes() {
        return availableBikes;
    }

    public void setBikes(ArrayList<Bike> bikes) {
        this.bikes = bikes;
        this.availableBikes = bikes;

        for (Bike bike : bikes) {
            if (!bike.isAvailable()) {
                availableBikes.remove(bike);
            }
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
