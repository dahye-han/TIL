import requests
url = "URL 주소"
headers = {"User-Agent":"UserAgent 값"}
res = requests.get(url, headers=headers)
res.raise_for_status()
with open("파일이름", "w", encoding="utf8") as f:
    f.write(res.text)