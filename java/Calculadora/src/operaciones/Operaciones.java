
package operaciones;

public class Operaciones {
    public float num, num2;/*creamos dos variables de tipo float*/
    public String op;/*creamos una var de tipo string para la operacion */
    public Operaciones(float num, float num2, String op){ /*Constructor */
        this.num = num;/* inicializamos los atributos */
        this.num2 = num2;
        this.op = op;
    }
    public float operacion(){ /* creamos una funcion */ switch (op) {
            case "+":
                return num+num2;
            case "-":
                return num-num2;
            case "*":
                return num*num2;
            case "/":
                return num/num2;
            default:
                return 0;
        }
    }  
}
