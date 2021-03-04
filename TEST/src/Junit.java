public class Junit {
        private String name;
        private int age;
        private float tall;

        public Junit(String name) {
            this.name = name;
        }

        public Junit(String name, int age){
            this.name = name;
            this.age = age;
        }

        public Junit(String name, float tall){
            this.name = name;
            this.tall = tall;
        }

        public Junit(String name, int age, float tall){
            this.name = name;
            this.age = age;
            this.tall = tall;
        }

        public String getName(){
            return name;
        }

        public int getAge(){
            return age;
        }

        public float getTall(){
            return tall;
        }

        public void setName(String name){
            this.name = name;
        }

        public void setAge(int age) {
            this.age = age;
        }

        public void setTall(float tall) {
            this.tall = tall;
        }

        public void printInfo(){
            System.out.println("name: " + name + ", age: " + String.valueOf(age) + ", tall:" + String.valueOf(tall));
        }
}
