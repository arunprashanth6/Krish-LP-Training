public class ABCompany {

    public static void main(String[] args) {
        Manager manager1 = Manager.getManager();
        System.out.println("First robot object is " + manager1);

        Manager manager2 = Manager.getManager();
        System.out.println("Second robot object is " + manager2);
    }

}
