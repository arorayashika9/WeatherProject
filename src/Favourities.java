

import java.io.FileReader;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

/**
 * Servlet implementation class Favourities
 */
@WebServlet("/Favourities")
public class Favourities extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String path = "/home/sapient/Desktop/WeatherProject/src/fav.json";
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Favourities() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	
		JSONParser parser = new JSONParser();
		try {
			JSONObject main = (JSONObject) parser.parse(new FileReader(path));
			response.setContentType("application/json");
			response.getWriter().write(main.toString());	
		} catch (ParseException e) {
			e.printStackTrace();
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
