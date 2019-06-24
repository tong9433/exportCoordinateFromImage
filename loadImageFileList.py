import os
import json

path_dir = "./images"

file_list = os.listdir(path_dir);

object = { "list":[]}
for file in file_list:
  object["list"].append(file)


jstring = json.dumps(object, indent=4)
f = open("imageFileList.json", "w")
f.write(jstring)
f.close()