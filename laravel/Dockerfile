FROM php:7.4.20-fpm-alpine

RUN docker-php-ext-install pdo_mysql

WORKDIR /var/www/html/laravel

RUN php -r "readfile('http://getcomposer.org/installer');" | php -- --install-dir=/usr/bin/ --filename=composer
COPY . .

RUN composer install