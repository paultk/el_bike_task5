package com.example;

import com.fasterxml.jackson.annotation.JsonView;
import jdk.nashorn.internal.runtime.JSONFunctions;
import net.minidev.json.JSONArray;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.stream.Collectors;

/**
 * Created by paul on 15.09.16.
 */
@RestController
public class MyRestController {

    boolean started = false;
    BookingService bookingService = new BookingService();


    public void startUp() {

        if (!started) {
            ArrayList<ParkingSpot> parkingSpots = new ArrayList<>();
            for (int i = 0; i <10; i++) {
                parkingSpots.add((new ParkingSpot("gloshaugen" + i)));
            }
            bookingService.setParkingSpots(parkingSpots);

            ArrayList<Bike> bikes = new ArrayList<>();
            for (int i = 0; i < 11; i++) {
                bikes.add(new Bike(i, i+1, "bike" + i));
            }

            for (int i = 0; i < 10; i++) {

                bookingService.getParkingSpots().get(i).setBikes(bikes);
            }
            started = true;
        }
    }

    @RequestMapping(value = "/get-locations", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    JSONArray getLocations() {
        startUp();
        ArrayList<String> names = bookingService.getParkingSpots().stream().map(ParkingSpot::getName).collect(Collectors.toCollection(ArrayList::new));
        JSONArray js = new JSONArray();
        js.addAll(names);
        return js ;
    }

    @RequestMapping("/get-bikes")
    public @ResponseBody
    JSONArray getBikes() {
        startUp();
        ArrayList<Bike> bikes = bookingService.getParkingSpots().get(0).getAvailableBikes();
        JSONArray availableBikesJS = new JSONArray();

        for (Bike bike : bikes) {
            if (bike.isAvailable()) {
                availableBikesJS.add(bike);
            }
        }
        return availableBikesJS;
    }

    @RequestMapping("/get-bikes{id}")
    public @ResponseBody ParkingSpot getBikes(@PathVariable String id) {
        startUp();
        for (ParkingSpot parkingSpot :
                bookingService.getParkingSpots()) {
            if (parkingSpot.getName().equals(id)) {
                return parkingSpot;
            }
        }
        return null;
    }

    @RequestMapping("/get-bikes2")
    public @ResponseBody ParkingSpot getBikes2() {
        startUp();
        return bookingService.getParkingSpots().get(0);
    }

    @RequestMapping("/booking")
    public String book(@RequestParam( value = "date", required = false)String date) {
        startUp();
        Bike bike = bookingService.getParkingSpots().get(0).getBikes().get(0);
        return "Bike:\t" + bike.getName() + "\nbooked for:\t" + date;
    }

//    using both path variables as well as RequestBody
    @RequestMapping("/bookTry/{id}/{date1}/{date2}")
    public void bookBike(@RequestBody User user, @PathVariable String id, @PathVariable String date1, @PathVariable String date2) throws ParseException
    {
        startUp();

        System.out.println("Name:\t" + user.getName());
        System.out.println("date1:\t" + date1);
        System.out.println("date2:\t" + date2);
        System.out.println("id:\t" + id);

        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");

        for (ParkingSpot parkingspot :
                bookingService.getParkingSpots()) {
            for (Bike bike :
                    parkingspot.getBikes()) {
                if(bike.getId() == Integer.parseInt(id)) {
                    bookingService.getBookings().add(new Booking(bike, user, df.parse(date1), df.parse(date2)));
                    bike.setAvailable(false);
                    bookingService.getParkingSpots().get(0).getBikes().remove(bike);
                    return;
                }
            }
        }
    }

}
