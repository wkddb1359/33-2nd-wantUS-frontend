# 33기 2차 프로젝트 - wantUs 프론트 엔드



## 개요 

- 내용 : wanted 웹페이지 클론코딩 프로젝트
- 기간 : 2022.06.07 ~ 06.17
- 인원 : 총 6명 (프론트엔드: 4명, 백엔드: 2명)
- 구현 기능
  - Nav, Footer, 메인페이지
  - 소셜 로그인 페이지
  - 마이페이지 / 이력서페이지 / 좋아요페이지
  - 채용 공고 리스트 / 채용 상세 페이지
  - 검색바 / 검색 결과

## 사용한 stack & tool (front-end 공통)
- HTML5, CSS3(styled component), JavaScript, React
- github, slack, trello

## 기능 구현 영상 링크
- https://www.youtube.com/watch?v=SqFNWewFKKk

<img width="817" alt="스크린샷 2022-06-17 오후 1 14 13" src="https://user-images.githubusercontent.com/101119985/174223646-c11b401e-57c9-4a93-afe6-114b1a59674f.png">

## 담당 페이지 

### 김정준 : 로그인/회원가입, 메인페이지

### 김현주 : 채용공고리스트, 검색바/검색결과페이지


![infinite scroll](https://user-images.githubusercontent.com/101119985/174231973-78152b27-9222-4f5f-89b0-f6d7a3bf8e13.gif)

- 채용공고리스트
  - 페이지네이션 기능을 활용, 무한 스크롤 페이지 구현
  - interSection Observserf API를 활용한 성능 최적회
  - Query Parameter를 활용한 다중 필터 기능
  - 서버로부터 데이터 로딩 중 로딩 되는 데이터 수 만큼 skeleton UI를 띄워주도록 함
  - 검색 결과 페이지에서 좋아요 버튼 클릭 시 해당 내용 서버로 전달 (데이터 좋아요 페이지 연동)
  - 각 아이템 클릭 시 채용상세페이지로 이동 
![search](https://user-images.githubusercontent.com/101119985/174230995-46e5ddf6-25a6-420d-9932-f1d881c75244.gif)

- 검색바/검색결과페이지
  - 검색 모달 창 및 검색 결과 페이지 구현
  - useLocation을 활용, 검색 모달창에 입력한 내용을 백엔드 엔드포인트로 전달
  - 검색 결과 페이지에서 좋아요 버튼 클릭 시 해당 내용 서버로 전달 (데이터 좋아요 페이지 연동)
  - 각 아이템 클릭 시 채용상세페이지로 이동 

### 안성주 : Nav/Footer, 마이페이지, 이력서페이지


![Nav_텍스트_변경_AdobeExpress](https://user-images.githubusercontent.com/97432901/174237175-e84cd00e-5024-4108-814a-38141cd8a989.gif)
![Nav_dropmenu_구현_AdobeExpress](https://user-images.githubusercontent.com/97432901/174237425-641d81c2-4847-4477-a107-122ea02dec51.gif)




- Nav/Footer 
  - Navbar 메뉴별로 클릭 시 해당 페이지로 이동
  - 햄버거bar 모달창 및 2중 모달창 구현
  - 비로그인 및 로그인시 각각 토근값을 기준으로 Navbar 구성 메뉴 변경


![Mypage_AdobeExpress](https://user-images.githubusercontent.com/97432901/174237637-6832469b-c6ec-49b8-a971-94e3353e6db3.gif)




- 마이페이지
  - 백앤드로부터 로그인된 사용자 정보 및 사용자 지원 현황 정보를 받아 페이지로 표출
  - 고정적으로 사용되는 데이터와 지속적으로 변경되는 데이터를 구분하여 페이지 구현
  - 지원 현황 정보 수치를 계산하여 지원 요약 정보로 표현 
 
 ![이력서1_AdobeExpress](https://user-images.githubusercontent.com/97432901/174237800-95889354-b8e0-4a68-b2ec-8a90137643fb.gif)

 ![이력서_삭제_AdobeExpress](https://user-images.githubusercontent.com/97432901/174238009-4ce43086-a6d5-492c-bfb6-c89be160a4a1.gif)

 ![이력서_다운로드_AdobeExpress](https://user-images.githubusercontent.com/97432901/174238164-2674eba8-33e7-4032-8740-6469a880dcc5.gif)

 ![이력서_업로드_AdobeExpress](https://user-images.githubusercontent.com/97432901/174238356-69687df2-88d7-4aba-b589-1fc2135b5d1a.gif)

 
- 이력서페이지
  - 사용자 컴퓨터로 접근하여 파일데이터 업로드 구현
  - 업로드된 파일 다운로드, 삭제기능 구현
  - 백앤드로 사용자가 어떤 파일을 업로드 하였는지 데이터 전달 구현
  - 파일 삭제 버튼을 눌렀을 때 method: DELETE 전달
 

### 염종은 : 채용상세페이지, 좋아요페이지
