package com.example.boxinatorbackend;

import org.json.JSONArray;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/listboxes")
public class ListBoxes {
    @GET
    @Produces("text/plain")
    public String listboxes() {
        dbConnector db = new dbConnector();
        JSONArray json = db.selectQuery(db.buildSelectAllString());

        return json.toString();
    }
}