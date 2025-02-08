From python:3.11-slim

WORKDIR /app

RUN pip install --upgrade pip

#Docker 캐싱 최적화 위해 의존 파일 복사 및 설치
# 코드 변경 있을 시 의존 설치 안해도 됨
COPY requirements.txt . 
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

RUN apt-get update && apt-get install -y curl \
    && curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs

#FastAPI 서버 실행
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
