import java.util.*;


class Main{
    public static void main(String[] args){
        ArrayList<ArrayList <Integer>> twoD = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
        ArrayList <Integer> al = new ArrayList<>();
        al.add(1);
        al.add(2);
        System.out.println("a1 = "+al);

        ArrayList <Integer> a2 = new ArrayList<>();
        a2.add(3);
        a2.add(4);
        a2.add(5);

        System.out.println("a2 =" + a2);

        twoD.add(al);
        twoD.add(a2);
        
        System.err.println(twoD);
    }
}