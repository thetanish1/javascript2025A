
# la= lambda a:a>10 
# print(la(11))

# Write a lambda function that adds 10 to the input number.
r=lambda a:a+10
print(r(10))

# Write a lambda function to multiply two numbers.
t=lambda s,r:s*r
print(t(4,3))

# Write a lambda function that returns the greater number between two inputs.
y=lambda t1,t2:f"{t1} is greater" if t1>t2 else f"{t2} is greater"
print(y(10,20))

# Sort this list by the second value of each tuple using lambda./
pairs = [(1, 3), (2, 2), (4, 1)]
# [(4, 1), (2, 2), (1, 3)] => output

sort_by_second = lambda lst: sorted(lst, key=lambda x: x[1])
print(sort_by_second(pairs)) # only this question is solved by chatgpt


# Write a lambda function that checks whether a number is even.
t=lambda num1: num1 % 2 ==0
print(t(6))