# notes-app
A command line note taken application built in NodeJs...

## Usage:
Run these commands right inside the root of project directory

# To add a new note
## The add command
```bash
node app.js add <title> [value] <body> [value]

or 

node app.js a <t> [value] <> [value]
``` 
### Example
```bash
node app.js add --title="Note One" --body="Note one body"

or

node app.js a -t="Note one" -b="Note one body"
```
# To remove a note
## The remove command
```bash
node app.js remove <title> [value]

or 

node app.js r <t> [value]
```
### Example
```bash
node app.js remove --title="Note one"

or 

node app.js r -t="Note one"
```

# To list your notes
## The list command
```bash
node app.js list

or 

node app.js l
```

# To read a note
### The read command
```bash
node app.js read <title> [value]

or

node app.js R --title="Note one"

or

node app.js R -t="Note one"
```

# To clear all your notes
### The clear command
```bash
node app.js clear

or 

node app.js c
```


## For help
```bash
node app.js --help
```

...




