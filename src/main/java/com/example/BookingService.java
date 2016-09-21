package com.example;

import java.util.ArrayList;
import java.util.Random;

/**
 * Created by paul on 15.09.16.
 */
public class BookingService {




    private ArrayList<ParkingSpot> parkingSpots;
    private ArrayList<Booking> bookings;


    public ArrayList<ParkingSpot> getParkingSpots() {
        return parkingSpots;
    }

    public void setParkingSpots(ArrayList<ParkingSpot> parkingSpots) {
        this.parkingSpots = parkingSpots;
    }

    public String bookBike(Bike bike, User user) {
        bookings.add(new Booking(bike, user));
        Random random = new Random();
        String randomNumbers = "";
        for (int i = 0; i < 10; i++) {
            randomNumbers = randomNumbers + random.nextInt(10);
        }
        return randomNumbers;
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