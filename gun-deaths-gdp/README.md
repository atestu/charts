# Gun deaths vs. GDP per capita

I was reading [this article on FiveThirtyEight](http://fivethirtyeight.com/datalab/oscar-pistorius-trial-puts-a-spotlight-on-crime-in-south-africa/) and was a little shocked at the high homicide rate in Guatemala for the simple reason that I'm going there on a vacation in a couple of weeks. I also noticed, unsurprisingly, that homicides are much more common in poorer countries so I made these charts:

![Linear chart](https://gist.github.com/atestu/10226116/raw/64f6cc9e6d9dbcabf8c988311cb4ae6613d312d6/chart-linear.png)

![Logarithmic chart](https://gist.github.com/atestu/10226116/raw/db4e49b6fde15923f7274e5c95ab9ab5c421be40/chart-log.png)

I urge you to also check out the table below. As you can see, it's not as simple as "poor → homicides"…

The chart was made in [Numbers](https://www.apple.com/mac/numbers/) and is very similar to [my previous one on gay acceptance](https://gist.github.com/atestu/9946443).

## Data Sources

* GDP per capita comes from the [IMF](http://www.imf.org/external/pubs/ft/weo/2013/02/weodata/weorept.aspx?sy=2012&ey=2012&ssd=1&sort=country&ds=.&br=1&pr1.x=16&pr1.y=7&c=512%2C668%2C914%2C672%2C612%2C946%2C614%2C137%2C311%2C962%2C213%2C674%2C911%2C676%2C193%2C548%2C122%2C556%2C912%2C678%2C313%2C181%2C419%2C867%2C513%2C682%2C316%2C684%2C913%2C273%2C124%2C868%2C339%2C921%2C638%2C948%2C514%2C943%2C218%2C686%2C963%2C688%2C616%2C518%2C223%2C728%2C516%2C558%2C918%2C138%2C748%2C196%2C618%2C278%2C522%2C692%2C622%2C694%2C156%2C142%2C624%2C449%2C626%2C564%2C628%2C565%2C228%2C283%2C924%2C853%2C233%2C288%2C632%2C293%2C636%2C566%2C634%2C964%2C238%2C182%2C662%2C453%2C960%2C968%2C423%2C922%2C935%2C714%2C128%2C862%2C611%2C135%2C321%2C716%2C243%2C456%2C248%2C722%2C469%2C942%2C253%2C718%2C642%2C724%2C643%2C576%2C939%2C936%2C644%2C961%2C819%2C813%2C172%2C199%2C132%2C733%2C646%2C184%2C648%2C524%2C915%2C361%2C134%2C362%2C652%2C364%2C174%2C732%2C328%2C366%2C258%2C734%2C656%2C144%2C654%2C146%2C336%2C463%2C263%2C528%2C268%2C923%2C532%2C738%2C944%2C578%2C176%2C537%2C534%2C742%2C536%2C866%2C429%2C369%2C433%2C744%2C178%2C186%2C436%2C925%2C136%2C869%2C343%2C746%2C158%2C926%2C439%2C466%2C916%2C112%2C664%2C111%2C826%2C298%2C542%2C927%2C967%2C846%2C443%2C299%2C917%2C582%2C544%2C474%2C941%2C754%2C446%2C698%2C666&s=PPPPC&grp=0&a=) [via Wikipedia](http://en.wikipedia.org/wiki/List_of_countries_by_GDP_(PPP)_per_capita) (2012)
* Intentional Homicide data comes from the [UNODC Homicide Statistics](https://www.unodc.org/unodc/en/data-and-analysis/homicide.html) (2011 only)

## Data

Countries | GDPPC | Homicide rate (per 100,000 people) | Sparklines
--------- | ----- | ---------------------------------- | ---
Honduras | $4,744 | 91.61 | █████████
El Salvador | $7,316 | 70.19 | ███████
Jamaica | $8,916 | 41.18 | ████
Belize | $8,659 | 39.00 | ███
Guatemala | $5,153 | 38.50 | ███
Bahamas | $10,365 | 36.58 | ███
Colombia | $10,671 | 33.18 | ███
South Africa | $11,281 | 30.93 | ███
Trinidad and Tobago | $19,826 | 26.14 | ██
Dominican Republic | $9,547 | 24.99 | ██
Mexico | $15,363 | 23.69 | ██
Brazil | $11,747 | 21.76 | ██
Panama | $15,449 | 21.25 | ██
Saint Vincent and the Grenadines | $11,768 | 19.20 | █
Guyana | $7,965 | 17.19 | █
Nicaragua | $4,352 | 12.57 | █
Bermuda | $1,556 | 12.29 | █
Uganda | $1,424 | 10.88 | █
Costa Rica | $12,545 | 10.03 | █
Russian Federation | $17,518 | 9.68 | ▊
Mongolia | $5,314 | 9.50 | ▊
Kazakhstan | $13,526 | 8.76 | ▊
Republic of Moldova | $3,378 | 8.58 | ▊
Pakistan | $3,056 | 7.84 | ▊
Bolivia (Plurinational State of) | $5,041 | 7.68 | ▊
Kyrgyzstan | $2,351 | 6.47 | ▊
Lithuania | $21,383 | 6.38 | ▊
Kenya | $1,781 | 6.35 | ▊
Uruguay | $15,865 | 5.89 | ▊
Estonia | $21,714 | 4.85 | ▎
Thailand | $9,503 | 4.76 | ▎
United States of America | $51,704 | 4.67 | ▎
Albania | $7,997 | 4.42 | ▎
Burundi | $619 | 4.07 | ▎
Chile | $18,211 | 3.68 | ▎
Montenegro | $11,610 | 3.64 | ▎
India | $3,843 | 3.46 | ▎
Mauritius | $15,424 | 3.44 | ▎
Egypt | $6,474 | 3.27 | ▎
Georgia | $5,842 | 2.47 | 
Norway | $54,397 | 2.25 | 
Finland | $35,771 | 2.15 | 
Israel | $33,878 | 2.00 | 
Belgium | $37,459 | 1.84 | 
Slovakia | $24,142 | 1.75 | 
United Kingdom (Scotland) | $36,569 | 1.75 | 
Bulgaria | $14,103 | 1.72 | 
Greece | $24,260 | 1.62 | 
Romania | $12,722 | 1.56 | 
Canada | $42,317 | 1.54 | 
The former Yugoslav Republic of Macedonia | $9,503 | 1.45 | 
Hungary | $19,497 | 1.42 | 
Bosnia and Herzegovina | $8,127 | 1.31 | 
Serbia | $10,722 | 1.27 | 
United Kingdom (Northern Ireland) | $36,569 | 1.27 | 
France | $35,295 | 1.18 | 
Poland | $20,562 | 1.17 | 
Croatia | $17,618 | 1.11 | 
Australia | $41,954 | 1.08 | 
Portugal | $23,047 | 1.07 | 
United Kingdom (England and Wales) | $36,569 | 0.96 | 
Ireland | $40,716 | 0.93 | 
Iceland | $39,718 | 0.92 | 
Italy | $29,812 | 0.91 | 
New Zealand | $29,481 | 0.88 | 
Sweden | $40,304 | 0.86 | 
Austria | $41,908 | 0.84 | 
Spain | $30,058 | 0.83 | 
Cyprus | $26,794 | 0.81 | 
Germany | $38,666 | 0.81 | 
Denmark | $37,324 | 0.79 | 
Czech Republic | $27,000 | 0.79 | 
Slovenia | $27,837 | 0.79 | 
Algeria | $7,268 | 0.78 | 
Luxembourg | $77,958 | 0.78 | 
Malta | $26,857 | 0.72 | 
Indonesia | $4,923 | 0.61 | 
Switzerland | $44,864 | 0.60 | 
Bahrain | $28,691 | 0.53 | 
Japan | $35,855 | 0.35 | 
Singapore | $60,799 | 0.31 | 
Hong Kong Special Administrative Region of China | $50,936 | 0.24 | 
