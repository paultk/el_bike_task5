package com.example;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.Random;

/**
 * Created by paul on 15.09.16.
 */
public class BookingService {

    private ArrayList<ParkingSpot> parkingSpots = new ArrayList<>();
    private ArrayList<Booking> bookings = new ArrayList<>();

    public ArrayList<ParkingSpot> getParkingSpots() {
        return parkingSpots;
    }

    public void setParkingSpots(ArrayList<ParkingSpot> parkingSpots) {
        this.parkingSpots = parkingSpots;
    }

    public String bookBike(Bike bike, User user, LocalDateTime timeOfBooking, String code) {
        bookings.add(new Booking(bike, user, timeOfBooking, code));
        Random random = new Random();
        String randomNumbers = "";
        for (int i = 0; i < 10; i++) {
            randomNumbers = randomNumbers + random.nextInt(10);
        }
        return randomNumbers;
    }

    public void addBooking(Booking booking) {
        bookings.add(booking);
    }

    public ArrayList<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(ArrayList<Booking> bookings) {
        this.bookings = bookings;
    }
}

// TODO: 15.09.16 Implement date with booking

/*
* priorities {
*
* }*/