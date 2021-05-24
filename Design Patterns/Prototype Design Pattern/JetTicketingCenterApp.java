
public class JetTicketingCenterApp {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
       
        Registry registry=new Registry();
        
        MalasiyanAirways MAirways=(MalasiyanAirways) registry.getVehicle(FlightType.MalasiyanAirways);
        System.out.println(MAirways);
        
        MAirways.setType("Private");
        
        System.out.println(MAirways);
        
        MalasiyanAirways MAirways1=(MalasiyanAirways) registry.getVehicle(FlightType.MalasiyanAirways);
        System.out.println(MAirways1);
    }
    
}
