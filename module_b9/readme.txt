Я немного выстрелил себе в ногу. Сделал простое - сложным. Лучше эту задачку было выполнить на bash;
docker image вначале собирается из alpine образа в качестве builder, затем пересобирается из образа scratch. Разница получилась в 12Mb:

mynode_from_stratch   latest    325bbca49843   4 seconds ago   46.1MB
mynode_from_alpine    latest    9dfaba4a8e15   12 hours ago    58.1MB

Само приложение написано на js, который я не знаю, но захотелось попробовать. При запуске приложения запускается простая html страничка с формой для ввода url;
Далее приложение выполняет конкатенацию "https://"+url+"favicon.ico" и качает файл внутрь контейнера в каталог download. Защиты от дурака нет, url нужно задавать без слешей и "https://";
Можно конечно поправить, но суть задания была научиться работать с контейнерами. 

p.s приложение намерено качает файл внутрь себя, mount "наружу" не сделан. Потому что. 
p.p.s node_modules добавлен в .gitignore. 
