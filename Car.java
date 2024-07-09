public class Car {


    public void displayInfo(String make,String model,String year){
        System.out.println("Make="+make+" "+"Model="+model+" "+"year="+year);
    }

    public static void main(String[] args) {

        Car car = new Car();
        car.displayInfo("Maruti","Alto","27/01/2020");

    }

}
