import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        String str = scanner.nextLine();
        char[] chars = str.toCharArray();
        int res = 0;
        for (Character digit : chars) {
            res += Character.getNumericValue(digit);
        }
        System.out.println(res);
    }
}
