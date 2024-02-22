# Bio Digestion

**Backend Setup**
First of all make sure that you are in \Bio_Digestion folder.
Yo must have installed Python, if you don't, you can download here: https://www.python.org/downloads/

## Create a virtual env to install the dependencies
```
python -m venv back/env
```
## Active the virtual env
```
cd back/env/Scripts
activate
```

## Install the dependencies
Go to the the backend folder of the app (back/core) and install the dependencies:

```
pip install -r requirements.txt
```

## Run the migrations
```
python manage.py makemigrations
python manage.py migrate
```

## Run the server
```
python manage.py runserver
```

## It's done, now you can setup the front of the app, register an user and use "Bio Digestion" 

**Frontend Setup**
Make sure you are in the frontend folder (/front)
Yo must have installed Node.js, if you don't, you can download here: https://nodejs.org/en/download/current

## Install the dependencies
```
npm install
```

### run the development server
```
npm run dev
```

**Note:**
The backend of the app runs by default on http://127.0.0.1:8000 and the front on http://localhost:5173.
In case you change the default address and port that Django runs, 
put that address in the file settings.js, cause there is the route that the front use to fecth the api.

