public class MalasiyanAirways extends Flights {
    private String type;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Car{" + "type=" + type + '}';
    }

}

