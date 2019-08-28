#!/usr/bin/python

theFile = open("numbers.txt", "r")

lines = theFile.readlines()

for line in lines:
	total = 0
	numbers = [int(n) for n in line.split(',')]
	for n in numbers:
		total+=n

	print "total = ", total

theFile.close()
