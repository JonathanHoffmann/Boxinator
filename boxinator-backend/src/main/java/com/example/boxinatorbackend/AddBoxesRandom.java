package com.example.boxinatorbackend;

import com.github.javafaker.Faker;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import java.util.Random;

@Path("/addboxesrandom")
public class AddBoxesRandom {
    @GET
    @Produces("text/plain")
    public String addBoxes() {
        dbConnector db = new dbConnector();

        for(int i=0;i<20;i++) {
            String sql = db.buildInsertIntoString(generateRandomColour(), generateRandomCountry(), generateRandomName(), generateRandomWeight());

            System.out.println("Sending this SQL query:\n" + sql);
            db.insertQuery(sql);
        }
        return "Added 20 new boxes";
    }

    public String generateRandomColour()
    {
        Random r = new Random();
        StringBuffer sb = new StringBuffer();
        while(sb.length() < 6){
            sb.append(Integer.toHexString(r.nextInt()));
        }

        return "#" + sb.toString().substring(0, 6);
    }

    public String generateRandomCountry()
    {
        Random r = new Random();
        int int_random = r.nextInt(4);
        switch (int_random) {
            case 0:
                return "Sweden";
            case 1:
                return "China";
            case 2:
                return "Brazil";
            case 3:
                return "Australia";
            default:
                return "Error";
        }
    }
    public float generateRandomWeight()
    {
        Random r = new Random();
        return r.nextFloat(50);
    }

    public String generateRandomName()
    {
        Faker f = new Faker();
        return f.name().fullName();
    }

}