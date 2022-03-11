package com.example.boxinatorbackend;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/addbox")
public class AddBox {
    @GET
    @Produces("text/plain")
    public String hello() {
        dbConnector db = new dbConnector();

        String colour = "white";
        String destination = "Sweden";
        String receiver = "Test";
        float weight = 404;
        String sql = db.buildInsertIntoString(colour, destination,receiver,weight);
        db.insertQuery(sql);
        return sql;
    }
}