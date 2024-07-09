import java.util.Scanner;

public class Rectangle {


    Scanner sc = new Scanner(System.in);
    int length = sc.nextInt();
    int width = sc.nextInt();

    public void calculateArea()
    {
        int area = length * width;
        System.out.println("Area of rectangle = "+ area);
    }
    public void calculatePerimeter()
    {
        int add = length + width;
        int perimeter = 2 * add;
        System.out.println("Perimeter of Rectangle = " + perimeter);
    }

    public static void main(String[] args) {
        Rectangle r = new Rectangle();
        r.calculateArea();
        r.calculatePerimeter();
    }


}
