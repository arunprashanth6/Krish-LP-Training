
public class EmiratesAirways extends Flights{
    private String BusinessClass;

    public String getBusinessClass() {
        return BusinessClass;
    }

    public void setBusinessClass(String BusinessClass) {
        this.BusinessClass = BusinessClass;
    }

    @Override
    public String toString() {
        return "EmiratesAirways{" + "BusinessClass=" + BusinessClass + '}';
    }

  
    
}
