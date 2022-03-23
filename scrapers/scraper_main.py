# Scraping toAddress,fromAddress and value
import html
from urllib.request import Request,urlopen
from bs4 import BeautifulSoup as soup
import pandas as pd
import json

df = pd.read_excel('City-Data.xlsx')

places = []

for ind in df.index:
    city = df['City'][ind]
    url = df['URL'][ind]    
    num_places = df['Number of Places'][ind]
    
    if(url == '-'):
        place_dict = dict()
        place_dict['City'] = city
        place_dict['Number of Places'] = int(num_places)
        place_dict['Places'] = []
        places.append(place_dict)
        continue
    
    req = Request(url, headers={'User-Agent':'Mozilla/5.0'})
    webpage = urlopen(req).read()
    page_soup = soup(webpage,"html.parser")
    
    divContentTag = page_soup.find('div',{'id': 'content'})
    innerDivContentTag = divContentTag.find('div',{'id': 'bodyContent'})
    inner2DivContentTag = innerDivContentTag.find('div',{'id': 'mw-content-text'})
    
    trTag = inner2DivContentTag.find_all('tr')
    
    place_list = []
    for x in range(1,1+num_places):
       
        try:
            tdTag = trTag[x].find_all('td')
        except:
            continue
        #print(trTag[1])
        
        row_list = dict()
        
        
        try:
            row_list['SL. No.'] = tdTag[0].text
            row_list['Description'] = tdTag[1].text
            row_list['Location'] = tdTag[2].text
            row_list['District'] = tdTag[4].text
            row_list['Image'] = tdTag[6].find('a').find('img')['src']
        except:
            print(city,"-")
            continue
        """
        for y in tdTag[:3]:
            print(y.text)
            
        #print(tdTag[4].text)
        print(tdTag[6].find('a').find('img')['src'])
        break
        """
        
        place_list.append(row_list)
    
    """
    SL. No.

    Description
    
    Location
    
    Address
    
    District

    Coordinates
    
    Image
    """
    place_dict = dict()
    place_dict['City'] = city
    place_dict['Number of Places'] = int(num_places)
    place_dict['Places'] = place_list
    places.append(place_dict)

#final = json.dumps(places, indent=4)

with open('data.json', 'w') as fout:
    json.dump(places , fout, indent=4)

# display
#print(final)   

    
    

"""
url = 'https://en.wikipedia.org/wiki/Monuments_of_National_Importance_of_India'
base_url = 'https://en.wikipedia.org'

req = Request(url, headers={'User-Agent':'Mozilla/5.0'})
webpage = urlopen(req).read()
page_soup = soup(webpage,"html.parser")

divContentTag = page_soup.find('div',{'id': 'content'})
innerDivContentTag = divContentTag.find('div',{'id': 'bodyContent'})
inner2DivContentTag = innerDivContentTag.find('div',{'id': 'mw-content-text'})
tdTag = inner2DivContentTag.find_all('td')

"""