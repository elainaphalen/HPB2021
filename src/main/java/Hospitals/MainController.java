package Hospitals;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller // This means that this class is a Controller
@RequestMapping(path="/demo") // This means URL's start with /demo (after Application path)
public class MainController {
  @Autowired // This means to get the bean called userRepository
  // Which is auto-generated by Spring, we will use it to handle the data
  private UserRepository userRepository;

  @PostMapping(
          path = "/add",
          consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE},
          produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})

  public @ResponseBody String addNewUser (@RequestBody Hospital h) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request

    /*Hospital h = new Hospital();
    h.setName(name);
    h.setCounty(county);
    h.setDate(date);
    h.setVaccines(vaccines);*/
    System.out.println(h.toString());
    userRepository.save(h);
    return "Saved";
  }

  @GetMapping(path="/all")
  public @ResponseBody Iterable<String> getAllUsers() {
    Session session = AccessingMyData.sF.openSession();
    session.beginTransaction();

    List<String> result = session.createQuery("select county from Hospital", String.class).list();
    session.getTransaction().commit();
    session.close();
    // This returns a JSON or XML with the users
//    Iterable<Hospital> iH = userRepository.findAll();
//    List<Hospital> lH = new ArrayList<Hospital>((Collection<? extends Hospital>) iH);
//
//    for(Hospital h : lH) {
//      System.out.println(h.toString());
//    }

    return result;
  }

}