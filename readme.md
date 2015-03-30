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


bigReport(stores)


 Downtown Donuts per hour.
 6
 34
 54
 31
 32
 48
 24
 39
 46
 1
 46
 Total 361
 Capitol Hill Donuts per hour.
 23
 32
 8
 23
 14
 4
 14
 33
 17
 23
 26
 Total 217
 South Lake Union Donuts per hour.
 2
 14
 18
 15
 14
 9
 12
 20
 7
 21
 19
 Total 151
 Wedgewood Donuts per hour.
 5
 1
 11
 5
 2
 0
 2
 5
 4
 11
 7
 Total 53
 Ballard Donuts per hour.
 29
 20
 8
 15
 22
 16
 17
 21
 16
 20
 25
 Total 209