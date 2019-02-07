import mysql.connector
import os
from pprint import pprint
from amazon.api import AmazonAPI

ENV=os.environ

MYSQL_DB_HOST=ENV['MYSQL_DB_HOST'] or die("DB host not specified");
MYSQL_DB_USER=ENV['MYSQL_DB_USER'] or die("DB User not specified");
MYSQL_DB_PASSWORD=ENV['MYSQL_DB_PASSWORD'] or  die("DB User password not specified");
MYSQL_DB_PORT=ENV['MYSQL_DB_PORT'] or  die("DB port not specified");
MYSQL_DB=ENV['MYSQL_DB'] or  die("DB  not specified");


cnx = mysql.connector.connect(user=MYSQL_DB_USER, password=MYSQL_DB_PASSWORD,
                              host=MYSQL_DB_HOST, port=MYSQL_DB_PORT,
                              database=MYSQL_DB)
query = ("SELECT json from watchlist")

cursor = cnx.cursor()

cursor.execute(query)

for (json) in cursor:
  print(json)


AMAZON_AFFILATE_ID=ENV['AMAZON_AFFILATE_ID']
AMAZON_SECRET_KEY=ENV['AMAZON_SECRET_KEY']
AMAZON_ACCESS_KEY=ENV['AMAZON_ACCESS_KEY']

cursor.close()
cnx.close()


amazon = AmazonAPI(AMAZON_ACCESS_KEY, AMAZON_SECRET_KEY, AMAZON_AFFILATE_ID, region="IN")
products = amazon.search(Keywords='dyson', SearchIndex='All')
for i, product in enumerate(products):
  print(product.parsed_response.ItemAttributes.ListPrice.FormattedPrice)