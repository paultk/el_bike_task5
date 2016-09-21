package com.example;

/**
 * Created by paul on 15.09.16.
 */
public class Booking {
    private Bike bike;
    private User user;


    public Booking(Bike bike, User user) {
        this.bike = bike;
        this.user = user;
    }

    public Bike getBike() {
        return bike;
    }

    public void setBike(Bike bike) {
        this.bike = bike;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
