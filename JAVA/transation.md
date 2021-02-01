논리적 단위로 어떤 한 부분의 작업이 완료되었다 하더라도, 다른 부분의 작업이 완료되지 않을 경우 전체 취소되는 것입니다.

 

-PlatformTransactionManager

1) servlet-context.xml안에 삽입

<beans:bean name="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">

      <beans:property name="dataSource" ref="dataSource" />

</beans:bean>

 

<beans:bean name="dao" class="dao주소">

       <beans:property name="template" ref="template" />

       <beans:property name="transactionManager" ref="transactionManager"/>

</beans:bean>

 

2) dao안에 삽입

PlatformTransactionManager transationManager;

 

public void setTransactionManager(PlatformTransactionManager transationManager){

     this.transationManager=transationManager;

}

 

method 안에 아래의 내용 삽입

TransactionDefinition definition = new DefaultTransitionDefinition();

TransactionStatus status = transationManager.getTransaction(definition);

 

실행 시 : transationManager.commit(status);

실패 시 : transationManager.rollback(status); 를 catch문 안에 삽입

 

-TransactionTemplate

1) servlet-context.xml안에 삽입

<beans:bean name="transactionTemplate" class="org.springframework.transaction.support.TransactionTemplate">

      <beans:property name="transactionManager" ref="transactionManager" />

</beans:bean>

 

<beans:bean name="dao" class="dao주소">

       <beans:property name="template" ref="template" />

       <beans:property name="transactionManager" ref="transactionManager"/>

</beans:bean>

 

2) dao안에 삽입

TransactionTemplate transactionTemplate;

 

public void setTemplate(JdbcTemplate template){

     this.template=template;

}

 

transactionTemplate.execute(new TransactionCallBackWithoutResult(){

    트렌젝션

}