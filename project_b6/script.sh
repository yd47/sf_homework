apt-get update
apt-get install python3 python3-pip libpq-dev -y
python3 -m pip install psycopg2
python3 -m pip install Django
pip3 freeze | egrep -i "(django|psycopg)" 
