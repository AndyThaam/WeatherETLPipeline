from airflow import DAG
from datetime import timedelta, datetime
from airflow.providers.http.sensors.http import HttpSensor
import json

default_args = {
    'owner' :'airflow',
    'depends_on_past': False,
    'start_date' : datetime(2023,1,8),
    'email': [],
    'email_on_failure' :False,
    'retries' : 2,
    'retry_delay' : timedelta(minutes=2)
}

with DAG('weather_dag',
    default_args = default_args,
    schedule_interval = '@daily',
    catchup= False) as dag: 


    is_weather_api_ready = HttpSensor(
        task_id='is_weather_api_ready',
        http_conn_id = 'weathermap_api',
        endpoint= '/data/2.5/weather?q=Houston&appid=86e3ce6ebc9be60cbbef88a2856b8938'
    )

    extract_weather_data = SimpleHttpOperator(
        task_id='extract_weather_data',
        http_conn_id = 'weathermap_api',
        endpoint= '/data/2.5/weather?q=Houston&appid=86e3ce6ebc9be60cbbef88a2856b8938',
        method = 'GET',
        response_filter= lambda r :json.loads(r.text),
        log_response = True
    )