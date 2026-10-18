# JSolution 1.0.20 설치 안내

작성일: 2026-10-18

## 포함 제품

| 제품 | 버전 | 제공 형식 |
|---|---|---|
| 솔루션 진단기 | 1.0.20 | 필수 MSI, 통합 EXE에 포함 |
| JCore | 1.1.2 | 원본 MSI, 통합 EXE에 포함 |
| JView | 1.1.3 | 원본 MSI, 통합 EXE에 포함 |
| PLC Simulator | 1.0.71 | EXE, 통합 EXE 및 별도 제공 |
| FieldScope | 1.5.5 | Android APK, 별도 제공 |

최신 JCore 1.1.2를 포함했습니다. 기존 JCore 1.1.1 설치 PC는 JCore를 선택하면 버전 비교에 따라 업데이트 대상이 됩니다. 같은 버전은 유지하고 상위 버전에서 하위 버전으로 설치하는 것은 차단합니다.

관리자 권한으로 실행하세요. 이용 동의 → 제품 선택 → 설치 진행 → 결과 화면 순서입니다. 제품 선택 화면에 설치 릴리즈, 제품별 설치파일 버전, 기존 설치 버전 및 신규 설치·업데이트·동일 버전 유지 여부를 표시합니다. 진단기만 설치하는 최소 구성, .NET Framework 4.8 오프라인 파일 및 오류 로그 저장을 지원합니다. 선택하지 않은 기존 제품은 제거하지 않습니다.

전체 설치파일 ZIP에는 JSolution_Setup.exe, PLCSimulator_Setup.exe, FieldScope-1.5.5.apk와 각 SHA256을 포함합니다. FieldScope는 Windows 통합 설치기가 설치하지 않습니다. FieldScope 문서는 제공된 1.5.4 원본입니다. JCore 사용자 매뉴얼은 1.1.1 원본입니다.

실제 대상 PC 설치·서비스 시작·업데이트 및 Android PLC 연결은 환경별 검증이 필요합니다. 최종 설치파일과 전체 ZIP은 InstallPackage\JSolution 폴더에 저장합니다.
