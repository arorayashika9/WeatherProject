

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
	private static final long serialVersionUID = 1L;
	private int count;
	private String path = "C:\\Users\\lenovo\\Documents\\workspace-sts-3.9.2.RELEASE\\ClearSky\\src\\fav.json";
       
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
		String action=request.getParameter("action");
		System.out.println("here" +action);
		
		if(action.equalsIgnoreCase("add"))
		{
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
				if(count>10)
				{
					cities.remove(0);
					count--;
				}
				main.put("Count",count );
				System.out.println(request.getParameter("city"));
				city.put("city",request.getParameter("city"));
				city.put("weather",request.getParameter("weather"));
				city.put("temp",request.getParameter("temp"));
				city.put("min_temp",request.getParameter("min_temp"));
				city.put("max_temp",request.getParameter("max_temp"));
				city.put("wind_speed",request.getParameter("wind_speed"));
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
		
		if(action.equalsIgnoreCase("view"))
		{
			JSONParser parser = new JSONParser();
			try {
				JSONObject main = (JSONObject) parser.parse(new FileReader(path));
				response.setContentType("application/json");
				response.getWriter().write(main.toString());	
			} catch (ParseException e) {
				e.printStackTrace();
			}	
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
