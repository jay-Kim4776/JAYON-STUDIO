# JSolution 1.1.2 설치 안내

작성일: 2026-10-19

## 설치 위치

Windows 프로그램 기본 경로를 C:\Program Files\JAYON STUDIO 아래로 통일했습니다.

- JSolution: JSolution 폴더
- JCore: JCore 폴더
- JView: JView 폴더
- PLC Simulator: PLC Simulator 폴더
- 바로가기 모음: 바로가기 폴더

바탕화면과 시작 메뉴의 JAYON STUDIO 제품 모음 바로가기로 모음 폴더를 엽니다. 실제 설치가 확인된 제품만 모음에 표시합니다. JView Designer와 Runtime을 구분해 제공합니다. 설치기의 진단기 복구 작업은 모음도 복구합니다.

## 포함 패키지

| 제품 | 설치 패키지 버전 | 설명 |
|---|---|---|
| JSolution | 1.1.2 | 진단기 및 바로가기 구성 |
| JCore | 1.1.4 | 설치 경로 개정본, 기존 1.1.2 프로그램 파일 그대로 유지 |
| JView | 1.2.4 | 제공된 최신 원본 MSI |
| PLC Simulator | 1.0.73 | 설치 경로 개정본, 기존 1.0.71 프로그램 파일 그대로 유지 |
| FieldScope | 1.5.7 | 별도 Android APK |

JCore와 Simulator의 새 패키지는 같은 버전 유지에 막히지 않도록 설치 패키지 버전만 올렸습니다. 실행파일·DLL 등 응용 프로그램 파일은 원본 MSI에서 추출한 파일과 모두 SHA256이 같습니다. layout-provenance.json에 원본 버전과 체크섬을 기록합니다. 제품 소스의 기능 변경을 포함하지 않습니다.

## 기존 설치 업데이트

JCore와 Simulator를 선택하면 개정 패키지의 MSI 업그레이드로 새 폴더를 사용합니다. 사용자 생성 Simulator simulators.json은 레지스트리에 기록된 기존 경로에서 새 경로로, 새 파일이 없는 경우에만 복사하며 기존 파일을 삭제하지 않습니다. 원래 사용자별 LocalAppData 설정도 그대로 유지됩니다. JCore 및 진단기의 ProgramData 데이터와 로그 경로는 변경하지 않습니다. 사용자 프로젝트는 별도로 보관하고 실행 중인 편집 내용을 저장하세요.

FieldScope는 Android 프로그램이므로 Windows Program Files에 설치하지 않습니다. 전체 ZIP 안의 APK를 Android 기기에 설치하세요.

이용 동의 → 제품 선택 → 설치 진행 → 결과 순서입니다. 관리자 권한이 필요합니다. 진단기만 설치하는 최소 구성, 현재 설치 버전 및 업데이트 대상 표시, 상세 로그 저장, .NET Framework 4.8 오프라인 설치를 지원합니다. 선택하지 않은 기존 제품은 제거하지 않습니다.

패키지 구성과 설치 경로·업그레이드 범위·바로가기 조건·실행 순서를 정적으로 검증했습니다. 실제 PC의 이전 경로에서 업데이트·서비스 시작·Simulator 설정 이전은 이 작업에서 실행하지 않았으므로 대상 PC에서 확인이 필요합니다.

최종 설치파일과 전체 ZIP 저장 위치: InstallPackage\JSolution

이번 배포는 최신 JView 1.2.4 원본 MSI를 포함합니다. 기존 경로 통일·바로가기 모음 및 설정 보존 구성을 유지합니다.

경로 이전 보완: 이동한 파일·폴더 구성 요소의 MSI 식별자를 기존 경로의 설치본과 구분하도록 갱신했습니다. 이 보완은 설치 패키지 구성 변경이며 프로그램 파일은 원본과 동일합니다.

설치 구성 요소 코드 보완 기준: https://learn.microsoft.com/en-us/windows/win32/msi/changing-the-component-code
