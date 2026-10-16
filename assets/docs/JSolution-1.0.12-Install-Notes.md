# JSolution 1.0.12 배포 안내

배포일: 2026-10-16 · JAYONSTUDIO

| 제품 | 버전 | 설치 원본 |
|---|---|---|
| JSolution 진단기 | 1.0.12 | 필수 MSI |
| JCore | 1.0.37 | 최신 버전 폴더의 MSI |
| JView | 1.0.10 | 최신 버전 폴더의 MSI |
| PLC Simulator | 1.0.71 | EXE |

통합 설치는 JSolution_Setup.exe 하나이며 .NET Framework 4.8 오프라인 파일을 포함합니다. 진단기만 설치하는 최소 구성과 제품 선택 설치를 지원합니다. Simulator 단독 설치는 PLCSimulator_Setup.exe입니다. 제품 원본의 SHA256과 번들 추출 파일의 동일성을 확인했습니다.

## 변경 내용

- 현재 문제 화면에서 원인과 필요한 조치를 먼저 표시합니다. 상세 상태·지표·상태 이력과 접속 이력은 별도 탭입니다.
- 수집 실패 시 이전 자료를 현재 문제로 표시하지 않습니다.
- 회사 심볼 투명 아이콘을 바로가기·설치 파일·브라우저 탭에 사용합니다.
- 운영 JView·Simulator 진단 연결을 기본 활성화합니다. 미설치 제품은 설치 탐지에 따라 제외합니다.

## 운영 진단 설정

| 제품 | 기본 주소 | 보호 키 경로 |
|---|---|---|
| JCore | http://127.0.0.1:8080/ | `C:\ProgramData\JAYON\JCore\Runtime\Diagnostics\read-key.dat` |
| JView | http://127.0.0.1:5080/ | `C:\ProgramData\JAYON STUDIO\JView\Diagnostics\Keys\read-key.dat` |
| PLC Simulator | http://127.0.0.1:5099/ | `C:\ProgramData\JAYON\PLCSimulator\Diagnostics\Keys\read-key.dat` |

대시보드는 기본 http://localhost:5088/ 입니다. 다른 PC는 설치 서버의 IP와 5088 포트로 접속합니다. 제품 진단 API는 같은 PC에서만 읽습니다. 개발 경로와 CollectWhenUninstalled=true는 운영 패키지에 포함하지 않습니다.

기존 host.json은 보존합니다. Release 진단기는 구버전의 정확한 JView/Simulator 초기 자리표시자(기존 UpgradeCode, Enabled=false, 진단 주소·키 경로 없음)에만 위 기본값을 실행 중 적용합니다. 파일은 덮어쓰지 않습니다. 주소·키 경로가 지정됐거나 개발 실행 수집이 허용된 항목, 다른 설치 식별자는 변경하지 않습니다. 명시적으로 진단을 비활성화하려면 주소·키 경로를 유지한 채 Enabled=false로 지정합니다.

사용자 지정 포트·데이터 디렉터리는 host.json에도 실제 값으로 반영합니다. 키는 DPAPI LocalMachine 보호 파일이며 공개 패키지에 키 평문을 포함하지 않습니다. JSolution LocalService의 읽기 권한이 필요합니다.

Simulator는 프로그램 실행 중에만 진단 API를 제공합니다. 최신 EXE 설치기의 URL 예약·설치 ID·읽기 키·실행 계정 권한 준비가 필요합니다. 다른 계정으로 운영한다면 Simulator 설치 안내에 따라 실제 운영 사용자 SID를 지정하세요. 디버그 실행만으로 진단 환경을 준비하지 않습니다.

## 검증 범위

Release 진단 검증 66개, 운영 설정 호환 검증 8개, 대시보드 원인 분류 8개, 설치 패키지 구성·정책·로그·호출 검증 74개 및 도움말 실행을 확인했습니다. 실제 대상 PC 설치·서비스 시작·업데이트·재부팅·일반 사용자 진단은 환경별 추가 확인이 필요합니다.
