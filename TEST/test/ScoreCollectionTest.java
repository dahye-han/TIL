import org.junit.Test;

import static org.junit.Assert.*;

public class ScoreCollectionTest {

    @Test
    public void answersArithmeticMeanOfTwoNumbers() {
        ScoreCollection collection = new ScoreCollection();
        collection.add(() -> 5);
        collection.add(() -> 7);

        int actualResult = collection.arithmeticMean();
        assertEquals(6, actualResult);
    }

}