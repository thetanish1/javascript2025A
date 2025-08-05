# la= lambda a:a>10
# print(la(11))

# Write a lambda function that adds 10 to the input number.
r = lambda a: a + 10
print(r(10))

# Write a lambda function to multiply two numbers.
t = lambda s, r: s * r
print(t(4, 3))

# Write a lambda function that returns the greater number between two inputs.
y = lambda t1, t2: f"{t1} is greater" if t1 > t2 else f"{t2} is greater"
print(y(10, 20))

# Sort this list by the second value of each tuple using lambda./
pairs = [(1, 3), (2, 2), (4, 1)]
# [(4, 1), (2, 2), (1, 3)] => output

sort_by_second = lambda lst: sorted(lst, key=lambda x: x[1])
print(sort_by_second(pairs))  # only this question is solved by chatgpt


# Write a lambda function that checks whether a number is even.
t = lambda num1: num1 % 2 == 0
print(t(6))

info={
    "fn":"tanish",
    "ln":"dewase"
}
def citie(**kwargs):
    print(kwargs)
    info.update(kwargs)
    return info
e=citie(city="pune",lang="marathi")
print(e)


# decorator.......................................................................................................................

# def decorator(func):
#     def wrapper():
#         print("Transacation started")
#         func()
#         print("Transaction Completed")
#     return wrapper


# def hello():
#     print("Executing all process")

# hello1=decorator(hello) # -> @decorator used here
# hello1()


# Write a decorator that prints "Before function" before the function runs, and "After function" after the function runs

# def decorator(func):
#     def wrapper ():
#         print("before function")
#         func()
#         print("After Function")
#     return wrapper

# @decorator
# def hello():
#     print("Hello..!")

# hello()

# Create a decorator that prints the time taken by a function to execute.



# Write a decorator @is_authenticated that only allows running the function if a variable authenticated = True

# def is_authenticated(login):
#     authenticated = True
#     def wrapper():
#         if authenticated==True:
#          login()
#          print(" Authenciated person ")
#         else:
#            print("Acess Denied")
#     return wrapper

# @is_authenticated
# def dashboard():
#     print("Welcome to dashboard")

# dashboard()
# ..................................................................
authenticated = True  # Can set this to False to test access

def is_authenticated(func):
    def wrapper():
        if authenticated:
            func()
            print("Authenticated person")
        else:
            print("Access Denied")
    return wrapper

@is_authenticated
def dashboard():
    print("Welcome to dashboard")

dashboard()

# ..................................................................

# Create a decorator that doubles the return value of a function.

def double_result(decorator):
    def wrapper(a):
        print(a+a)
        decorator()
    return wrapper

@double_result
def get_number():
    return 5

get_number(5)
# ................. GPT code
def double_result(func):
    def wrapper():
        result = func()       # call the original function
        return result * 2     # double the return value
    return wrapper

@double_result
def get_number():
    return 5

print(get_number())  # Output: 10

# .................................................


# Write a decorator that logs function name and arguments