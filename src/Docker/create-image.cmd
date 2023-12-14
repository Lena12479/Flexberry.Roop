docker build --no-cache -f SQL\Dockerfile.PostgreSql -t roop/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t roop/app ../..
