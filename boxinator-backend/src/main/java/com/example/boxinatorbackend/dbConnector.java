
package com.example.boxinatorbackend;

import org.json.JSONArray;
import org.json.JSONObject;

import java.sql.*;

public class dbConnector {
    String connectionUrl = "jdbc:mysql://localhost:3306/boxinator_database";
    String username = "root";
    String password = "";
    public String buildInsertIntoString (String colour, String destination, String receiver, float weight)
    {
        return "INSERT INTO `boxes` (colour, destinationcountry,receiver,weightKG) VALUES ('" + colour + "','" + destination + "','" + receiver + "'," + weight + ")";
    }
    public String buildSelectAllString()
    {
        return "SELECT * FROM `boxes`";
    }

    public void insertQuery(String sql)
    {
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        try {
            Connection conn = DriverManager.getConnection(connectionUrl, username, password);
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public JSONArray selectQuery(String sql)
    {
        JSONArray json = new JSONArray();
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        try (Connection conn = DriverManager.getConnection(connectionUrl, username, password);
             PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {

            ResultSetMetaData rsmd = rs.getMetaData();
            while(rs.next()) {
                int numColumns = rsmd.getColumnCount();
                JSONObject obj = new JSONObject();
                for (int i=1; i<=numColumns; i++) {
                    String column_name = rsmd.getColumnName(i);
                    obj.put(column_name, rs.getObject(column_name));
                }
                json.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return json;
    }
}
