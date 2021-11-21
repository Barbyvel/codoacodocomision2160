
package activu2java;

import java.util.Scanner;

public class ActivU2Java {
    
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Ingrese su nombre: ");
        String nombre = entrada.nextLine();
        System.out.println("Ingrese su apellido: ");
        String apellido = entrada.nextLine();
        System.out.println("Ingrese su edad: ");
        int edad = entrada.nextInt();
        entrada.nextLine();
        System.out.println("Cuál es su hobbie? ");
        String hobbie = entrada.nextLine();
        System.out.println("Editor de código preferido: ");
        String editor = entrada.nextLine();
        System.out.println("Qué sistema operativo utiliza? ");
        String sistema = entrada.nextLine();
       
        System.out.println("Bienvenid@ " + nombre +" "+ apellido);
        System.out.println("Su edad es: " + edad + " años");
        System.out.println("Su hobbie es: " + hobbie);
        System.out.println("Su editor de código preferido es: " + editor );
        System.out.println("El sistema operativo que utiliza es: " + sistema);       
       
       
       
 }
    
}
