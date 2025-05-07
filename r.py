
s = ""
with open("home.html", "r") as f:
    s = f.read()

s.replace("**", "<br>")

ind = 0
indlist = []
for i in s:
    if i == "*":
        indlist.append(ind)
    ind += 1
for j in indlist:
    s = s[:j]+ " " + s[j+1:]

print(s)
with open("home.html", 'w') as f:
    f.write(s)
