# 수정된 build.sh
# 빌드 디렉토리로 이동하여 Next.js 빌드 진행
npm run build

# output 디렉토리 생성 후 .next 폴더 복사
mkdir -p output
cp -R .next/* output/