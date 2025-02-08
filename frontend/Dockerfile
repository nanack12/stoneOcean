# 1. Node.js 18 버전 사용 (Vite 호환)
FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .

# 6. Vite 개발 서버 실행
ENV VITE_PORT=5173
CMD ["npm", "run", "dev"]

