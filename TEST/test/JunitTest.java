import org.junit.*;

import static org.junit.Assert.*;

public class JunitTest {
    public static Junit junitTest;

    @BeforeClass
    public static void makeInstance()throws Exception  {
        junitTest = new Junit("홍길동", 20, 180.0f);

    }
    @Before
    public void beforeTest()throws Exception {
        System.out.println("before!!");
    }
    @Test
    public void getName() throws Exception {
        assertEquals("홍길동", junitTest.getName());
    }

    @Test
    public void getAge() throws Exception{
        assertEquals(20,junitTest.getAge());
    }

    @Test
    public void getTall() throws Exception{
        assertEquals(180.0f, junitTest.getTall());
    }

    @Test
    public void setAge()throws Exception {
        junitTest.setAge(29);
    }

    @Test
    public void getAge2() throws Exception{
        assertEquals(20,junitTest.getAge());
    }

    @Test
    @Ignore
    public void setTall()throws Exception {
        junitTest.setTall(170.0f);
    }

    @Test
    public void getTall2() throws Exception{
        assertEquals(170.0f, junitTest.getTall());
    }


    @Test
    public void setName()throws Exception {
        junitTest.setName("임꺽정");
    }

    @Test
    public void getName2() throws Exception {
        assertEquals("홍길동", junitTest.getName());
    }

    @After
    public void printAfter()throws Exception {
        System.out.println("After!!");
    }

    @AfterClass
    public static void printAfterClass()throws Exception {
        System.out.println("AFTER CLASS");
    }


}