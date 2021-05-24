import java.util.Scanner;

class FrogJumpCalculation1{
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
                
		System.out.println("Enter the Total distance : ");
                double travelingDistance = scanner.nextDouble();
                
		int time = 0;
		int hope = 0;
		
		int[] hopes = {5,3,1}; 
		int[] resTime = {1,2,5};
		while(true){
			int index = hope%3;
			hope += 1;
			travelingDistance -= hopes[index];
			if(travelingDistance <= 0){
				break;
			}
			time +=  resTime[index];
		}
                
                System.out.println("The Total Rest Time Are :  " + time + "Seconds");
                
		System.out.println("The number of hopes are " + hope);

	}
}