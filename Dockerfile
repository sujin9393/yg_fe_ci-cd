# 1단계: 빌드
FROM node:18 AS build
WORKDIR /app

# 의존성 설치 및 빌드
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# 2단계: Nginx를 사용한 정적 파일 서빙
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx 기본 설정 덮어쓰기 (선택)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]