### Do it! 오라클로 배우는 데이터베이스 입문 정리

## Database, DBMS
- 데이터베이스 : 특정 목적을 위해 여러 사람이 공유하여 사용할 수 있으며, 효율적인 관리와 검색을 위해 구조화한 데이터 집합
- DBMS : 효율적인 데이터 관리 조건을 만족하며 서비스 제공의 효율성을 높이기 위한 데이터베이스 관리 시스템

## 데이터 모델
- 계층형 데이터 모델
    - 나뭇가지 형태의 트리 구조를 활용하여 데이터 관련성을 계층별로 나누어 부모 자식 같은 관계를 정의하고 데이터를 관리
    - 일대다 관계
- 네트워크형 데이터 모델
    - 그래프 구조를 기반으로 함
    - 개체 간 관계를 그래프 구조로 연결하므로 자식 개체가 여러 부모 개체를 가질 수 있음
- 객체 지향형 데이터 모델
    - 객체 지향 프로그래밍에서 사용하는 객체 개념을 기반으로 한 데이터 모델
    - 데이터를 독립된 객체로 구성하고 관리하며 상속, 오버라이드 등 객체 지향 프로그래밍에 사용되는 강력한 기능을 활용할 수 있음
- 관계형 데이터 모델
    - 현대에 가장 많이 사용하는 관계형 데이터베이스의 바탕이 되는 모델
    - 각 데이터의 독립 특성만을 규정하여 데이터 묶음을 나눔
    - 중복이 발생할 수 있는 데이터는 별개의 릴레이션으로 정의
    - 개체(entity)
        - 데이터베이스에서 데이터화하려는 사물, 개념의 정보 단위
        - 관계형 데이터베이스의 테이블 개념과 대응
        - 테이블은 릴레이션으로 표기하기도 함
    - 속성(attribute)
        - 개체를 구성하는 데이터의 가장 작은 논리적 단위
        - 데이터의 종류, 특성, 상태 등을 정의
        - 관계형 데이터베이스의 열 개념과 대응
    - 관계(relationship)
        - 개체와 개체 또는 속성 간의 연관성을 나타내기 위해 사용
        - 관계형 데이터베이스에서는 테이블 간의 관계를 외래키 등으로 구현하여 사용

## 관계형 데이터베이스(RDBMS)
- 관계형 데이터 모델 개념을 바탕으로 데이터를 저장, 관리하는 데이터베이스를 의미
- SQL(Structured Query Language)
    - 데이터를 다루고 관리하는 데 사용하는 데이터베이스 질의 언어
    - DQL(Data Query Language) : RDBMS에 저장한 데이터를 원하는 방식으로 조회하는 명령어
    - DML(Data Manipulation Language) : RDBMS 내 테이블의 데이터를 저장, 수정, 삭제하는 명령어
    - DDL(Data Definition Language) : RDBMS 내 데이터 관리를 위해 테이블을 포함한 여러 객체를 생성, 수정, 삭제하는 명령어
    - TCL(Transaction Control Language) : 트랜잭션 데이터의 영구 저장, 취소 등과 관련된 명령어
    - DCL(Data Control Language) : 데이터 사용 권한과 관련된 명령어

## 관계형 데이터베이스의 구성 요소
- 테이블
    - 데이터를 2차원 표 형태로 저장하고 관리
    - 가로줄을 행(row, 로) : 저장하려는 하나의 개체를 구성하는 여러 값을 가로로 늘어뜨린 형태
    - 세로줄을 열(column, 열) : 데이터를 대표하는 이름과 공통 특성을 정의
- 키
    - 데이터를 구별할 수 있는 유일한 값
    - 기본키(primary key)
        - 한 테이블 내에서 중복되지 않는 값만 가질 수 있는 키
        - 테이블에 저장된 행을 식별할 수 있는 유일한 값
        - 값의 중복이 없어야 함
        - NULL 값을 가질 수 없음
    - 후보키(candidate key)
        - 대체키(alternate key)라고도 부르며 후보키(candidate key)에 속해 있는 키
        - 후보키 중에서 기본키로 지정되지 않은 열
    - 외래키(foreign key)
        - 특정 테이블에 포함되어 있으면서 다른 테이블의 기본키로 지정된 키
    - 복합키(composite key)
        - 여러 열을 조합하여 기본키 역할을 할 수 있게 만든 키를 뜻함
        - 적게는 두세 개, 많게는 열 개가 넘는 열을 조합하기도 함

## 오라클 데이터베이스
- 자료형 : 테이블을 구성하는 열에 지정
    - VARCHAR2(길이) : 4000byte만큼의 가변 길이 문자열 데이터를 저장할 수 있음
    - NUMBER(전체 자리수, 소수점 이하 자릿수)
        - +38자릿수의 숫자를 저장할 수 있음
        - NUMBER(p, s)와 같이 표기할 경우 s자리만큼 소수점 이하 자릿수를 표현하고, 이 소수점 자리를 포함한 전체 p자리만큼 숫자 데이터를 저장
    - DATE : 날짜 형식을 저장하기 위해 사용하는 자료형으로 세기, 연, 월, 일, 시, 분, 초 저장이 가능
    - CHAR(길이) : 4000byte만큼의 고정 길이 문자열 데이터를 저장할 수 있음
    - NVARCHAR2(길이) : 4000byte만큼의 가변 길이 국가별 문자 세트 데이터를 저장할 수 있음
    - BLOB : 최대 크기 4GB의 대용량 이진 데이터를 저장할 수 있음
    - CLOB : 최대 크기 4GB의 대용량 텍스트 데이터를 저장할 수 있음
    - BFILE : 최대 크기 4GB의 대용량 이진 데이터 파일을 저장할 수 있음
- 객체
    - 오라클 데이터베이스 내에서 데이터를 저장하고 관리하기 위한 논리 구조를 가진 구성 요소
    - 테이블(table) : 데이터를 저장하는 장소
    - 인덱스(index) : 테이블의 검색 효율을 높이기 위해 사용
    - 뷰(view) : 하나 또는 여러 개의 선별된 데이터를 논리적으로 연결하여 하나의 테이블처럼 사용하게 해 줌
    - 시퀀스(sequence) : 일련 번호를 생성해 줌
    - 시노님(synonym) : 오라클 객체의 별칭(다른 이름)을 지정함
    - 프로시저(procedure) : 프로그래밍 연산 및 기능 수행이 가능함(반환 값 없음)
    - 함수(function) : 프로그래밍 연산 및 기능 수행이 가능함(반환 값 있음)
    - 패키지(package) : 관련 있는 프로시저와 함수를 보관함
    - 트리거(trigger) : 데이터 관련 작업의 연결 및 방지 관련 기능을 제공함
- PL/SQL
    - 데이터 관리를 위한 별도의 프로그래밍 언어
    - 변수, 조건문, 반복문 등 프로그래밍 언어에서 제공하는 요소를 사용하여 데이터를 관리할 수 있음
    - 