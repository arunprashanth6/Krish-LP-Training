public class Shop {

   
    public static void main(String[] args) {

        Phone p = new PhoneBuilder().setOS("Android").setRam(2).setBattery(2000).getPhone();
        System.out.println(p);
    }
    
}
