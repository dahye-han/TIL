jdbc를 사용해서 query문을 사용한것에서 xml에 작성해서 사용할수 있다.

https://blog.mybatis.org/

https://mybatis.org/mybatis-3/ko/getting-started.html


1) pom.xml에서 MyBatis libs 다운로드

2) package안에 xml파일 만들어서 mybatis xml양식 붙여넣기
   ex)  <mapper namespace="xml파일 주소">
               <select id="listDao" resultType="dto주소">
                     query문 ""없이
               </select>

        </mapper>

3) controller에서 사용

   @Autowired
     private SqlSession sqlSession;

     @RequestMapping안에 
        sqlSession.getMapper(IDao.class);