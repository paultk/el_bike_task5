package com.example;

import org.apache.tomcat.jni.Local;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;

/**
 * Created by paul on 15.09.16.
 */
public class Booking {
    private ArrayList<Bike> bikeTest = new ArrayList<>();
    private Bike bike;
    private User user;
    private LocalDateTime timeOfBooking;
    private String bookingCode;


    public Booking(Bike bike, User user, LocalDateTime timeOfBooking, String bookingCode) {
        this.bike = bike;
        this.user = user;
        this.timeOfBooking = timeOfBooking;
        this.bookingCode = bookingCode;
        bikeTest.add(bike);
    }

    public Bike getBike() {
        return bike;
    }

    public void setBike(Bike bike) {
        bikeTest.remove(bike);
        this.bike = bike;
        bikeTest.add(bike);
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDateTime getTimeOfBooking() {
        return timeOfBooking;
    }

    public void setTimeOfBooking(LocalDateTime timeOfBooking) {
        this.timeOfBooking = timeOfBooking;
    }

    public String getBookingCode() {
        return bookingCode;
    }

    public void setBookingCode(String bookingCode) {
        this.bookingCode = bookingCode;
    }

    public ArrayList<Bike> getBikeTest() {
        return bikeTest;
    }

    public void setBikeTest(ArrayList<Bike> bikeTest) {
        this.bikeTest = bikeTest;
    }
}
