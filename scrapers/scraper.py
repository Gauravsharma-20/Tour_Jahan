# Scraping toAddress,fromAddress and value
import html
from urllib.request import Request,urlopen
from bs4 import BeautifulSoup as soup
import pandas as pd

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
for index,x in enumerate(tdTag[11:-8]): # start from 11: AP, listLink, numberOfSites, 
    if index == 5: break
    print(x)
    print("----",index)
#print(tdTag)
    """
final_list = tdTag[11:-8]
#print(final_list)


df = pd.DataFrame([], columns=['City', 'URL', 'Number of Places'])

#print(len(final_list))

for x in range(0,len(final_list),3):
    
    place = final_list[x].find('a')['title']
    try:
        URL = base_url + str(final_list[x+1].find('a')['href'])
        #print(x,final_list[x+1].find('a')['href'])
    except:
        URL = '-'
        
    number = final_list[x+2].text
    
    df.loc[len(df.index)] = [place,URL,number]
    
df.to_excel('City-Data.xlsx', sheet_name='Data')
    