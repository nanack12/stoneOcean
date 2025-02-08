# stoneOcean 프로젝트 - Docker 환경 설정 가이드

이 가이드는 Docker를 사용하여 stoneOcean 프로젝트를 시작 하기 위한 가이드입니다.

- **데이터 분석가용 가이드**: Jupyter Notebook 환경 설정 및 사용법
- **웹 서버 개발자용 가이드 (백엔드 + 프론트엔드)**: FastAPI 및 React 개발 환경 설정 방법

---

## 프로젝트 소스 가져오기 (공통)

프로젝트를 처음 시작할 때 GitHub에서 소스를 가져와야 합니다. 아래 명령어를 사용하여 소스를 클론하세요:

```sh
git clone https://github.com/nanack12/prj_stoneOcean.git
```

`stoneOcean` 폴더로 이동합니다:

```sh
cd stoneOcean
```

이제 프로젝트 환경을 설정할 준비가 되었습니다.

---

## Visual Studio Code 환경 설정 (공통)

### 1️⃣ 필수 확장 기능 설치

Visual Studio Code를 사용할 때 다음 확장 기능을 설치하는 것이 좋습니다:

- **Docker**: Docker 컨테이너 관리 및 연동
- **Python**: Python 개발을 위한 기본 확장
- **Dev Containers**: Docker 컨테이너 안에서 직접 개발 가능
- **ESLint**: JavaScript/TypeScript 코드 품질 검사

### 2️⃣ Docker 연동 및 Remote Container 사용

1. **Remote - Containers 확장 기능**을 설치한 후 \*\*Command Palette (`Cmd+Shift+P`)\*\*를 열고 `Remote-Containers: Open Folder in Container...` (또는 `Dev-Containers:` 로 시작) 를 선택하세요.
2. 프로젝트 폴더를 선택하면 VS Code가 Docker 컨테이너 안에서 작업 환경을 자동으로 설정합니다.
3. **Python 및 Node.js 환경**도 자동으로 세팅되므로, 별도의 환경 구성 없이 바로 개발할 수 있습니다.

### 3️⃣ Python Interpreter 설정 (데이터 분석가)

1. \*\*Command Palette (`Cmd+Shift+P`)\*\*에서 `Python: Select Interpreter`를 선택하세요.
2. Docker 컨테이너의 Python 경로 `/opt/conda/bin/python`을 선택합니다.
3. 선택 후 Jupyter Notebook 및 Python 스크립트를 편집할 수 있습니다.

---

## 사전 준비 사항

시작하기 전에 아래 항목이 설치되어 있는지 확인하세요:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- 선택사항: [PyCharm](https://www.jetbrains.com/pycharm/) (Python 개발 시 권장)

---

## 1️⃣ 데이터 분석가용 가이드

### 1단계: Jupyter Notebook 서비스 시작하기

아래 명령어를 사용하여 Jupyter Notebook 환경을 시작하세요:

```sh
docker-compose up jupyter
```

### 2단계: Jupyter Notebook 접속하기

- 브라우저에서 [http://localhost:8888](http://localhost:8888)로 접속합니다.
- `/analysis` 폴더에 있는 모든 파일에 접근할 수 있습니다.

### 3단계: Notebook 작업하기

- Jupyter Notebook과 Python 스크립트는 `/stoneOcean/analysis` 폴더에 저장하세요.
- 변경 사항은 자동으로 Docker 컨테이너와 동기화됩니다.

### 4단계: PyCharm 사용하기 (선택사항)

PyCharm에서 Python 스크립트를 편집하려면:

1. `/stoneOcean/analysis` 폴더를 새 프로젝트로 엽니다.
2. Docker 기반 Python Interpreter를 설정합니다.
   - Docker 컨테이너 내 Python Interpreter 경로: `/opt/conda/bin/python`

---

## 2️⃣ 웹 서버 개발자용 가이드 (백엔드 + 프론트엔드)

### 백엔드 (FastAPI)

#### 1단계: 백엔드 서비스 시작하기

아래 명령어를 사용하여 FastAPI 서버를 시작하세요:

```sh
docker-compose up backend
```

#### 2단계: API 접속하기

- FastAPI 서버는 [http://localhost:8000](http://localhost:8000)에서 실행됩니다.
- Swagger 문서는 [http://localhost:8000/docs](http://localhost:8000/docs)에서 확인할 수 있습니다.

### 프론트엔드 (React)

#### 1단계: 프론트엔드 서비스 시작하기

아래 명령어를 사용하여 React 개발 서버를 시작하세요:

```sh
docker-compose up frontend
```

#### 2단계: 프론트엔드 접속하기

- 프론트엔드 서버는 [http://localhost:5173](http://localhost:5173)에서 실행됩니다.

---

## 공통 명령어

### 모든 서비스 빌드 및 시작

```sh
docker-compose up --build
```

### 모든 서비스 중지

```sh
docker-compose down
```

### 실행 중인 컨테이너 확인

```sh
docker ps
```

---

## 문제 해결

### 포트 충돌

8000, 5173, 8888 포트가 사용 중이지 않은지 확인하세요.

### Docker Compose 오류

오류가 발생하면 서비스를 다시 빌드하세요:

```sh
docker-compose up --build
```
