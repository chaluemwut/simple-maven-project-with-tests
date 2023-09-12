from node:18
workdir /app
copy . /app
cmd ["npm", "start"]