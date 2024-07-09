import org.w3c.dom.ls.LSOutput;

import java.util.Scanner;

public class BankAccount
{

    Scanner sc = new Scanner(System.in);

    Long accountNumber = sc.nextLong();
    Long balance = sc.nextLong();

    public void deposit(Long deposit){

        balance += deposit;
        System.out.println("Balance After Adding deposit ="+balance);

    }
    public void withdraw(Long withdraw)
    {
        balance -= withdraw;
        System.out.println("Balance After Withdraw ="+balance);

    }
    public static void main(String[] args) {

        BankAccount B = new BankAccount();
        B.deposit(100000L);
        B.withdraw(10000L);


    }
}
