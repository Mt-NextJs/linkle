#!/bin/sh

# 기존 output 디렉토리 삭제 (있을 경우)
rm -rf output

# output 디렉토리 생성
mkdir output

# 현재 디렉토리의 모든 내용(자신 제외)을 output 디렉토리로 복사
rsync -av --progress ./ ./output --exclude output