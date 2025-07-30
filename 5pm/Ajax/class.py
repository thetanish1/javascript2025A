# tanish=[1,2,3,4,5]
# print(type(tanish))

# for i in range(len(tanish)):
#     print(tanish[i])

# tanish.append('g')
# print(tanish)
# tanish.pop()
# print(tanish)

# print(tanish)

# fruits=['apple','banana','grapes','chicko']
# i=0
# while(i<len(fruits)):
#     print(fruits[i])
#     i+=1

# for i in range(1,11,1):
#     print(i*2)



#list comphriesnion



# years = [2000,2001,2002,2003]
# #[25,24,23,22]
# birthYear = []
# for x in years:
#     age = 2025 -  x
#     birthYear.append(age)
# print(birthYear)




# year=[2000,2001,2002,2003]
# #outuput-> 25,24,23,22
# #put it in new list
# age=[]
# for i in year:
#     a = 2025 - i
#     age.append(a)
# print(age)



# profile = ("tanish","dewase","cs","cyber")
# tanish=()

# for i, lop in enumerate(profile):
#     print(tanish,(profile),1)

# for i in profile:
#     print(profile)

# for x in range(len(profile)):
#     print(profile)
# print(type(profile))

# y=0
# while(y>len(profile)):
#     print(profile[y])
#     y=y+1


# functions resusable code

def addA():
    print(5+5)

addA()    

# ----------------------
def addB(x,y):
    print(f"{x+y}")

addB(10,20)


def addC(x,y):
    return x+y

sum1 =addC(20,20)
print(f"sum is {sum1}")

#default parameter

def addD(x=1,y=10):
    return x+y

r1=addD(10,10)
print(r1)

r2=addD()
print(r2)

# -----------------------------

def fullName(fn, ln):
    print(f"first name is : {fn} and last name is : {ln}")

fullName("chawde","dipanshu")    

fullName(ln="chawde", fn="dipanshu")

# -------------------------------------

# *args allows multiple positional arguments
# **kwargs allows key word arguments

# *args

# def addC(x,y):
#     return x+y

# (1,2,3,4,56,4,,3,4,56,5)

def addE(*args):
    return sum(args)

total=addE(1,2,3,4,56,4,4,3,4,56,5)
print(total)

# **kwargs
print("------------")
def fullName1(**kwargs):
    for key,value in kwargs.items():
        print(f"{key} : {value}")


fullName1(name="dipanshu",lastname="chawde")

print("------------")
info={
    "firstname" : "dipanshu",
    "lastname" : "chawde"
}
# city="pune"
def updateInfo(**kwargs):
    print(kwargs)
    print(info)
    info.update(kwargs)

updateInfo(city="pune")
print(info)

print("-------lambds function--------")
# lambda function anonoymus function 

# lambda argument : expression
# def addB(x,y):
#     print(f"{x+y}")

# addB(10,20)

add = lambda x,y : x+y

print(f"addition is {add(4,4)}")

print("-------map function--------")

# map  maps object iterable
# filter filter object iterable
# reduce single op

byear=[2008, 2001,2023, 2021,1986,1995]
age=[]
# for el in byear:
#     age.append(2025-el)

# print(f"ages are {list(age)}")
# map function
age = map(lambda yr : 2025-yr,byear)
print(list(age))

print("-------filter function--------")

marks =[20,40 ,90, 78,64,35,44,40,41]

passMarks = filter(lambda x : x>=40 , marks)

print(list(passMarks))

print("-------reduce function--------")

from functools import reduce

addMarks = reduce(lambda acc,y : acc+y, marks, 0)

print(addMarks)





