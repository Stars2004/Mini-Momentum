import time
import requests
from datetime import datetime, timedelta

client_id = 'ecf33aee-a0be-4006-b30b-0b2ed158c8e9' # 替换成自己的
one_day = (datetime.now() + timedelta(days=26)).strftime("%Y-%m-%d")
url = 'https://api.momentumdash.com/feed/bulk?syncTypes=backgrounds&localDate={localDate}'

headers = {
    'authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDY2Mzc0OTIuMCwibmJmIjoxNTc1MDE0NzkyLjAsImlzcyI6ImxvZ2luLWFwaS12MiIsInVzZXJfZ3VpZCI6IjVjNjE5N2MxLThkYmYtNGY4MS1iODI3LTIxZTg0ZTA4YzcyZSJ9.hyAjKOjjZW1dfyKXdXkHK1lLDC4Y7xEJvpetnEpCp-M',
    'Host': 'api.momentumdash.com',
    'Accept': '*/*',
    'X-Momentum-ClientId': client_id,
    'x-momentum-clientdate': time.strftime("%Y-%m-%dT%H:%M:%S"),
    'X-Momentum-Version': '0.100.1',
    'x-momentum-settings-etag': '0400bf20-0000-0000-0000-5aaf255a0000',
    'X-Momentum-ClientDate': one_day,
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
    'Content-Type': 'application/json',
    'cookie': ''
}

if __name__ == '__main__':
    response = requests.get(url.format(localDate=one_day), headers=headers).json()
    # print(response)
    backgrounds = response['backgrounds']
    uri_1 = backgrounds[0]['filename']
    uri_2 = backgrounds[1]['filename']
    print(uri_1, uri_2, sep='\n')

