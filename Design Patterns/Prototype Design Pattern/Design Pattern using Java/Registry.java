import java.util.HashMap;
import java.util.Map;


public class Registry {
    private final Map<FlightType, Flights> vehicles= new HashMap<>();

    public Registry() {
        this.initialize();
    }
    

    public Flights getVehicle(FlightType vehicleType){
		Flights vehicle = null;
		try{
			vehicle = (Flights) vehicles.get(vehicleType).clone();			
		}catch(CloneNotSupportedException ex){
			ex.printStackTrace();
		}
		return vehicle;
	}

private void initialize(){
    MalasiyanAirways MAirways = new MalasiyanAirways();
    MAirways.setEngineCapacity(2000);
    MAirways.setType("Public");
    MAirways.setFuelType("Gasoline");
    
    QatarAirways QAirways=new QatarAirways();
    QAirways.setNumberOfSeats(32);
    QAirways.setEngineCapacity(3000);
    QAirways.setFuelType("Petrol");
    
    EmiratesAirways EAirways = new EmiratesAirways();
    EAirways.setEngineCapacity(5000);
    EAirways.setBusinessClass("First Class");
    EAirways.setFuelType("Super Petrol");
    
    vehicles.put(FlightType.MalasiyanAirways,MAirways);
    vehicles.put(FlightType.QatarAirways,QAirways);
}


}
