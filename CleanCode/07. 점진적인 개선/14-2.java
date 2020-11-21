import static com.objectmentor.utilities.args.ArgsException.ErrorCode.*;
import java.util.*;

public class Args {
    private Map<Character, ArgumentMarshaler> marshalers;
    private Set<Character> argsFound;
    private ListIterator<String> currentArgument;

    public Args(String schema, String[] args) throws ArgsException {
        marshalers = new HashMap<Character, AtgumentMarshaler>();
        argsFound = new HashSet<Character>();

        parseSchema(schema);
        parseArgumentString(Arrays.asList(args));
    }

    private void parseSchemna(String schema) throws ArgsException {
        for (String element : schema.split(","))
        if (element.length() > 0)
            parseSchemaElemetn(element.trim());
    }

    private void parseSchemnaElement (String element) throws ArgsException {
        char elementId = element.charAt(0);
        String elementTail = element.substring(1);
        validateSchemaElementId(elementId);
        if(elementTail.length() == 0)
            marshalers.put(elementId, new BooleanArgumentMarshaler());
        else if (elementTail.equals("*"))
            marshalers.put(elementId, new StringArgumentMarshaler());
        else if (elementTail.equals("#"))
            marshalers.put(elementId, new IntegerArgumentMarshaler());
        else if (elementTail.equals("##"))
            marshalers.put(elementId, new DoubleArgumentMarshaler());
        else if (elementTail.equals("[*]"))
            marshalers.put(elementId, new StringArrayArgumentMarshaler());
        else
            throw new ArgsException(INVALID_ARGUMENT_FORMAT, elementId, elementTail);
    }

    private void validateSchemaElementId(char elementId) throws ArgsException {
        if(!Character.isLetter(elementId))
            throw new ArgsException(INVALID_ARGUMENT_NAME, elementId, null);
    }

    private void parseArgumentString(List<String> argsList) throws ArgsException {
        for (currentArgument = argsList.listIterator(); currentArgument.hasNext();)
        {
            String argString = currentArgument.next();
            if(argString.startWith("-")) {
                parseArgumentCharacters(argString.substring(1));
            } else {
                currentArgument.previous();
                break;
            }
        }
    }

    private void parseArgumentCharacters(String argChars) throws ArgsException {
        for (int i = 0; i < argChars.length(); i++)
            parseArgumentCharacter(argChars.charAt(i));
    }

    private void parseArgumentCharacter(char argChar) throws ArgsException {
        AtgumentMarshaler m = marshalers.get(argChar);
        if(m == null) {
            throws new ArgsException(UNEXPECTED_ARGUMENT, argChar, null);
        } else {
            argsFound.add(argChar);
            try {
                m.set(currentArgument);
            } catch (Exception e) {
                //TODO: handle exception
                e.setErrorArgumentId(argChar);
                throw e;
            }
        }
    }

    public boolean has(char arg) {
        return argsFound.contains(arg);
    }

    public int nextArgument() {
        return currentArgument.nextIndex();
    }

    public boolean getBoolean(char arg) {
        retuen BooleanArgumentMarshaler.getValue(marshalers.get(args));
    }

    public boolean getString(char arg) {
        retuen StringArgumentMarshaler.getValue(marshalers.get(args));
    }

    public boolean getInt(char arg) {
        retuen IntegerArgumentMarshaler.getValue(marshalers.get(args));
    }

    public boolean getDouble(char arg) {
        retuen DoubleArgumentMarshaler.getValue(marshalers.get(args));
    }

    public Stirng[] getStringArray(char arg) {
        return StringArrayArgumentMarshaler.getValue(marshalers.get(arg));
    }
}