package com.example;

import java.util.Date;

/**
 * Created by paul on 15.09.16.
 */
public class Booking {
    private Bike bike;
    private User user;
    private Date startDate;
    private Date endDate;


    public Booking(Bike bike, User user, Date startDate, Date endDate) {
        this.bike = bike;
        this.user = user;
        this.startDate = startDate;
        this.endDate = endDate;
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

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
