

import java.io.FileReader;

import java.io.FileWriter;


import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

/**
 * Servlet implementation class MainServlet
 */
@WebServlet("/MainServlet")
public class MainServlet extends HttpServlet {
	private static int count=0;
	private static final long serialVersionUID = 1L;
	private String path = "/home/sapient/Documents/workspace-sts-3.9.2.RELEASE/weatherReports/src/fav.json";
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MainServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		JSONObject main = new JSONObject();
		JSONArray  cities = new JSONArray();
		JSONObject city = new JSONObject();
		
			JSONParser parser = new JSONParser();
		    try {
				main = (JSONObject) parser.parse(new FileReader(path));
				this.count = Integer.parseInt(String.valueOf(main.get("Count")));
				
				//System.out.println(this.count);
				cities = (JSONArray) main.get("cities");
				
			} catch (Exception e) {
				
				e.printStackTrace();
			}
		
		try {
			count++;
			main.put("Count",count );
			city.put("city",request.getParameter("city"));
			city.put("min_temp",request.getParameter("min_temp"));
			city.put("max_temp",request.getParameter("max_temp"));
			city.put("humidity",request.getParameter("humidity"));
			cities.add(city);
			main.put("cities",cities);
			
			FileWriter jsonFileWriter = new FileWriter(path);
			//System.out.println(info.toString());
			jsonFileWriter.write(main.toString());
			jsonFileWriter.flush();
			jsonFileWriter.close();
			
		} catch (Exception e) {
			
			e.printStackTrace();
		} finally {
			response.setContentType("application/json");
			response.getWriter().write(main.toString());
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
