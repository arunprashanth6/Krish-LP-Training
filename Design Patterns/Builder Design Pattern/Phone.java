//Bulder Pattern - Creational Design Pattern
public class Phone {
    private final String OS;
    private final int ram;
    private final String processor;
    private final double screenSize;
    private final int battery;

    public Phone(String OS, int ram, String processor, double screenSize, int battery) {
        this.OS = OS;
        this.ram = ram;
        this.processor = processor;
        this.screenSize = screenSize;
        this.battery = battery;
    }

    @Override
    public String toString() {
        return "Phone{" + "OS=" + OS + ", ram=" + ram + ", processor=" + processor + ", screenSize=" + screenSize + ", battery=" + battery + '}';
    }
    
    
}
