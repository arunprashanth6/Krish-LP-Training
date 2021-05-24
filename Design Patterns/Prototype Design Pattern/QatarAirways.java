public class QatarAirways extends Flights {
    private int numberOfSeats;

    @Override
    public String toString() {
        return "Bus{" + "numberOfSeats=" + numberOfSeats + '}';
    }

    public int getNumberOfSeats() {
        return numberOfSeats;
    }

    public void setNumberOfSeats(int numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
    }
    
}
