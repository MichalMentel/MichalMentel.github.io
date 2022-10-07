# script to start docker container of apache mapped
docker run -it -p 8080:80 \
  -v "$PWD"/www.decor-art.pl:/usr/local/apache2/htdocs/ \
  -v "$PWD"/my-httpd.conf:/usr/local/apache2/conf/httpd.conf \
  httpd:2.4