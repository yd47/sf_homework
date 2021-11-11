FROM python:3.8-slim-buster as builder

RUN apt-get update \
        && apt-get -y install libpq-dev gcc \
        && pip3 install --user Flask==2.0.2 psycopg2==2.9.1 configparser==5.1.0

FROM python:3.8-slim-buster

RUN mkdir -p /srv/app/ && mkdir -p /srv/app/conf/

COPY --from=builder /root/.local /root/.local

COPY --from=builder /usr/lib/x86_64-linux-gnu/libpq.so.5 /usr/lib/x86_64-linux-gnu/libgssapi_krb5.so.2 \
        /usr/lib/x86_64-linux-gnu/libldap_r-2.4.so.2 /usr/lib/x86_64-linux-gnu/libkrb5.so.3 \
        /usr/lib/x86_64-linux-gnu/libk5crypto.so.3 /usr/lib/x86_64-linux-gnu/libkrb5support.so.0 \
        /usr/lib/x86_64-linux-gnu/

COPY --from=builder /lib/x86_64-linux-gnu/libkeyutils.so.1 \
        /lib/x86_64-linux-gnu/

COPY --from=builder /usr/lib/x86_64-linux-gnu/liblber-2.4.so.2 /usr/lib/x86_64-linux-gnu/libsasl2.so.2 \
        /usr/lib/x86_64-linux-gnu/

CMD [ "python3", "/srv/app/web.py" ]
