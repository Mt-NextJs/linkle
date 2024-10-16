#!/bin/sh
cd ./  # 프로젝트의 올바른 경로로 이동

# 빌드 결과물을 output 디렉토리로 복사
mkdir output
cp -R .next/* ./output