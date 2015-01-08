#Donut Store JavaScript Program

This program will take in a list of Top Pot stores and output the amount of donuts each store sells for each hour they are open.

This starts with a constructor function to make a store prototype, which takes all of each stores information including:
location, hours, average traffic(high and low), percent of people that come in to the store, and how many donuts those customers buy. This prototype
also contains functions to generate a random traffic count within the range of the average given as a high and a low number. It also contains a 
function to determine how many people in that traffic count come into the store, and how many donuts they buy.

A separate store object was made for each location.

the 'report' function is used to calculate the total number of donuts sold, for each hour a store is open a loop is run that will generate a new customer count and donuts sold amount.

Finally the 'bigReport' function will take in the array containing all of the stores and return the amount of donuts each store sold for each hour of the day.

This is what the final output looks like in the console:

bigReport(stores)


donut-store.html:50 Downtown Donuts per hour.
donut-store.html:43 6
donut-store.html:43 13
donut-store.html:43 46
donut-store.html:43 6
donut-store.html:43 50
donut-store.html:43 42
donut-store.html:43 2
donut-store.html:43 24
donut-store.html:43 18
donut-store.html:43 50
donut-store.html:43 19
donut-store.html:50 Capitol Hill Donuts per hour.
donut-store.html:43 12
donut-store.html:43 29
donut-store.html:43 32
donut-store.html:43 15
donut-store.html:43 31
donut-store.html:43 6
donut-store.html:43 36
donut-store.html:43 31
donut-store.html:43 9
donut-store.html:43 10
donut-store.html:43 3
donut-store.html:50 South Lake Union Donuts per hour.
donut-store.html:43 9
donut-store.html:43 21
donut-store.html:43 9
donut-store.html:43 7
donut-store.html:43 21
donut-store.html:43 9
donut-store.html:43 0
donut-store.html:43 2
donut-store.html:43 8
donut-store.html:43 3
donut-store.html:43 0
donut-store.html:50 Wedgewood Donuts per hour.
donut-store.html:43 11
donut-store.html:43 2
donut-store.html:43 9
donut-store.html:43 5
donut-store.html:43 6
2donut-store.html:43 11
donut-store.html:43 12
2donut-store.html:43 4
donut-store.html:43 6
donut-store.html:50 Ballard Donuts per hour.
donut-store.html:43 31
donut-store.html:43 22
donut-store.html:43 30
donut-store.html:43 18
donut-store.html:43 2
donut-store.html:43 8
donut-store.html:43 26
donut-store.html:43 30
donut-store.html:43 26
donut-store.html:43 18
donut-store.html:43 4