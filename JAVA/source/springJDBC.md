-dependency(pom.xml)

<dependency>

    <groupId>org.springframework</groupId>

    <artifactId>spring-jdbc</artifactId>

    <version>4.1.4.RELEASE</version>

</dependency>


-controller에 추가

public JdbcTemplate template;

 

@Autowired

public void setTemplate(Jdbc Template template){

this.template = template;

}

 

-servlet-context.xml에 추가

<beans:bean name="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">

     <beans:property name="driverClassName" value="oracle.jdbc.driver.OracleDriver"/>
     <beans:property name="url" value="jdbc:oracle:thin:@localhost:1521:orcl"/>

     <beans:property name="username" value="사용자이름">

     <beans:property name="password" value="사용자비밀번호">

</beans:bean>

 

<beans:bean name="template" class="org.springframework.jdbc.core.JdbcTemplate">

      <beans:property name="dataSource" ref="dataSource"></beans:property>

</beans:bean>

 

-package 생성

Constant 클래스 생성

public class Constant{

     public static JdbcTemplate template;

}

 

-controller 수정

public JdbcTemplate template;

 

@Autowired

public void setTemplate(Jdbc Template template){

     this.template = template;

     Constant.template = this.template;

}

 

-dao에서 사용
JdbcTemplate template = null;

 

public BDao(){

    try{

        Context context = new InitialContext();

        dataSource = (DataSource) context.lookup("java:comp/env/jdbc/Oracle11g");

    }catch(Exception e){

        e.printStackTrace();

    }

    template = Constant.template;

}

 

1)list();

public ArrayList<BDto> list(){

     String quert = "";

     return (ArrayList<BDto>) template.query(query, new BeanPropertyRowMapper<BDto>(BDto.class));

}

 

2)contentView();

public BDto contenView(String strID){

     upHit(strID);

 

    String query="";

    return template.queryForObject(query,new BeanPropertyRowMapper<BDto>(BDto.class));

}

 

3)update

public void upHit(final String bId){

     String query="";

     template.update(query, new PreparedStatementSetter(){

          @Override

          public void setValues(PreparedStatement ps) throws SQLException{

                ps.setInt(1, Integer.parseint(bId));

          }

    }

}