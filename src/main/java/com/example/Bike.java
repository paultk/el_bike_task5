package com.example;

/**
 * Created by paul on 15.09.16.
 */
public class Bike {
    private int id;
    private int battery;
    private String name;
    private boolean available = true;


    public Bike(int id, int battery, String name) {
        this.id = id;
        this.battery = battery;
        this.name = name;
    }

    public Bike() {
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBattery() {
        return battery;
    }

    public void setBattery(int battery) {
        this.battery = battery;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String toString() {
        return "Bike id: " + getId() + "\nName: " + getName() + "\nBattery: " + getBattery() + "\nAvailable: " + isAvailable();
    }
}
