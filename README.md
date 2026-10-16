# JSolution Releases

JAYONSTUDIO 공개 제품 소개·문서·설치 파일 배포 저장소입니다. 제품 소스 코드는 포함하지 않습니다.

- 홈페이지: https://jay-kim4776.github.io/JAYON-STUDIO/
- 다운로드: https://jay-kim4776.github.io/JAYON-STUDIO/downloads.html
- 문서: https://jay-kim4776.github.io/JAYON-STUDIO/docs.html

설치 파일은 JSolution_Setup.exe와 PLCSimulator_Setup.exe 두 종류입니다. JSolution에는 필수 진단기와 선택 설치 제품 JCore·JView·PLC Simulator, .NET Framework 4.8 오프라인 설치 파일이 포함됩니다. 진단기만 설치할 수도 있습니다.

현재 확인된 배포: JSolution 1.0.12 / JCore 1.0.37 / JView 1.0.10 / PLC Simulator 1.0.71. 패키지 정적·정책·로그 검사 74개 통과. 실제 환경의 서비스 시작은 설치 후 확인해야 합니다.

문서는 제공된 회사소개서와 제품소개서 원본 4종 및 최신 제공 JCore 매뉴얼 1.0.27입니다. 구버전 매뉴얼 1.0.24는 홈페이지에 중복 게시하지 않습니다. 문서와 설치본의 기능 범위는 다를 수 있습니다.

## 배포 갱신

1. 제품 패키지 및 통합 EXE를 검증합니다.
2. 새 릴리스에 두 EXE와 SHA256 체크섬, 최신 문서를 업로드합니다.
3. js/config.js의 태그·제품 버전, downloads.html의 포함 제품 버전을 함께 갱신합니다.
4. main에 푸시하면 GitHub Pages가 배포합니다.

GitHub가 자동 생성하는 Source code ZIP/TAR는 이 홈페이지 저장소의 파일이며 제품 소스 코드가 아닙니다.

## 시각 자료

assets/automation-factory.png: AI로 제작한 산업자동화 개념 이미지입니다. 실제 고객 현장으로 표시하지 않습니다.
assets/jview-designer.png: 제공된 JView 제품소개서에 포함된 개발 예시 화면입니다.
기존 PLC Simulator 화면은 제품 기능 소개를 위해 유지합니다.
