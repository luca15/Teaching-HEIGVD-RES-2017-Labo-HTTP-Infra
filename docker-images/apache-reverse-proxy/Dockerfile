FROM php:7.0-apache

RUN apt-get update && apt-get install nano

COPY conf/ /etc/apache2
COPY apache2-foreground /usr/local/bin/
COPY templates /var/apache2/templates

RUN a2enmod proxy proxy_http
RUN a2ensite 000* 001*
