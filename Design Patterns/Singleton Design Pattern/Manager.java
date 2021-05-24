package SingletonDesignPattern;

public class Manager {
    //Making Manager     Volatile, to access and modified in different threads

    private static volatile Manager manager;

    //Making method private so object cannot create from outside
    private Manager() {
        //Avoid creating objects through Reflection API
        if (manager != null) {
            throw new RuntimeException("Use getPrinterInstance() method");
        }
    }

    public static Manager getManager() {
        if (manager == null) {
            /*Double checking before treating the object in concurrent access
            from multiple threads**/
            synchronized (Manager.class) {
                manager = new Manager();
            }
        }
        return manager;
    }

}
