import java.util.Scanner;

public class salarycalculator {
    public static void main(String[] args) { 

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter basic salary: " );
        double basicSalary = sc.nextDouble();

        System.out.print("Enter Allowances: ");
        double Allowances = sc.nextDouble();

        System.out.print("Enter Deductions: ");
        double Deductions = sc.nextDouble();

        double grossSalary = basicSalary + Allowances;
        double netSalary = grossSalary - Deductions;


        System.out.println("\nSalary Breakdown:");
        System.out.println("basic Salary: "+ basicSalary);
        System.out.println("Allowances: "+ Allowances);
        System.out.println("deduction: "+ Deductions);
        System.out.println("gross Salary "+ grossSalary);
        System.out.println("Net Salary: "+ netSalary);
         

             // close the scanner
        sc.close();








    }
    
}
