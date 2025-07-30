def adde(*args):
    return sum(args)


tottal = adde(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
print(tottal)


def namee(**kwargs):
    for key, value in kwargs.items():
        print(f"{key} : {value}")


bio = namee(name="Tanish", lastname="Dewase", Location="Nagpur")
print(bio)


info = {
    "Name": "Tanish", 
    "LastName": "Dewase",
    
    }
print(type(info))
