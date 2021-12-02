#! /bin/bash

var=$1
DATE=$(date '+%Y-%m-%d %H:%M:%S')
val=$(( $var * 2 ))
re='^[0-9]+$'

if ! [[ $var =~ $re ]] ; then
           echo "error: Not a number" >&2; exit 1
fi

/bin/echo '{ "time": '\"$DATE\"', "double val":'\"$val\"' }' | jq -c . 2>&1 | logger -p user.notice -t awesome
