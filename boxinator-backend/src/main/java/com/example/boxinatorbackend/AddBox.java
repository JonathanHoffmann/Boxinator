package com.example.boxinatorbackend;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.json.JSONObject;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/addbox")
public class AddBox {
    @POST
    @Consumes("application/json")
    @Produces("text/plain")
    public String addBox(String jsonstring) {
        dbConnector db = new dbConnector();

        System.out.println("Received the following JSON Object:\n" + jsonstring);

        JsonObject jsonObject = JsonParser.parseString(jsonstring).getAsJsonObject();
        String colour = jsonObject.get("colour").getAsString();
        String destination = jsonObject.get("destinationcountry").getAsString();
        String receiver = jsonObject.get("receiver").getAsString();
        float weight = jsonObject.get("weightKG").getAsFloat();
        String sql = db.buildInsertIntoString(colour, destination,receiver,weight);

        System.out.println("Sending this SQL query:\n" + sql);
        db.insertQuery(sql);
        return sql;
    }
}