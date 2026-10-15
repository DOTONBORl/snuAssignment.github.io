# URL Tools

## 개요

URL Tools는 URL을 QR 코드로 만들거나 짧은 주소로 변환하는 정적 웹 앱이다. 첫 화면에서 원하는 도구를 선택한다.

## 기능 명세

| 화면 | 기능 | 동작 |
| --- | --- | --- |
| 메인 | QR코드 버튼 | `url2qr/index.html`로 이동한다. |
| 메인 | URL단축 버튼 | `urlShort/index.html`로 이동한다. |
| QR코드 | URL 입력·생성 | 유효한 HTTP/HTTPS URL을 QR 코드로 생성하고, 입력창을 QR 코드 아래로 이동한다. |
| QR코드 | JPG 다운로드 | QR 코드를 클릭하면 `qr-code.jpg`를 다운로드한다. |
| URL단축 | 입력 검증 | URL입력 값이 비어 있으면 단축하기 버튼을 비활성화한다. |
| URL단축 | URL 생성 | Open API(clck.ru)에 URL 단축을 요청하고 응답 주소를 읽기 전용 출력 상자에 표시한다. |
| URL단축 | 복사 | 복사 버튼은 출력 주소를 클립보드에 복사하고 `복사하였습니다.` 알림을 표시한다. |

## 파일 구조

```
index.html                 메인 선택 화면
url2qr/                    QR 코드 도구
urlShort/                  URL 단축 도구
  index.html
  css/style.css
  js/app.js
```
