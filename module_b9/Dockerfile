FROM alpine:latest as builder
RUN apk add nodejs npm && mkdir /app

FROM scratch
COPY --from=builder /lib/ld-musl-x86_64.so.1 /lib/libz.so.1 /lib/libcrypto.so.1.1 /lib/libssl.so.1.1 /lib/
COPY --from=builder /usr/lib/libbrotlidec.so.1 /usr/lib/libbrotlienc.so.1 /usr/lib/libcares.so.2 /usr/lib/libnghttp2.so.14 /usr/lib/libstdc++.so.6 /usr/lib/libgcc_s.so.1 /usr/lib/libbrotlicommon.so.1 /usr/lib/
COPY --from=builder /usr/bin/node /usr/bin/npm /usr/bin/node-gyp /usr/bin/
COPY --from=builder /bin/sh /bin/

COPY nodejs/ /app/
CMD node /app/server.js
