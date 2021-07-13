import scrapy
import json


class TulumpartySpider(scrapy.Spider):
    name = 'tulumparty'
    start_urls = ['https://www.tulum.party']

    headers = {
        "authority": "api.cosmicjs.com",
        "method": "GET",
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "cache-control": "no-cache",
        "origin": "https://www.tulum.party",
        "pragma": "no-cache",
        "referer": "https://www.tulum.party/",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "sec-gpc": "1",
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Mobile Safari/537.36"
    }

    def parse(self, response):
        url = 'https://api.cosmicjs.com/v1/tulum/object-type/parties?&limit=20&sort=-created_at'
        request = scrapy.Request(
            url, callback=self.parse_api, headers=self.headers)
        yield request

    def parse_api(self, response):
        raw = response.body
        # print(raw)
        data = json.loads(raw)
        yield data
