1. npm install --global expo-cli (if you don’t have Expo installed already)
2. expo init todoList.(If it throw error use following command on powershell as administrative:  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted)
3. cd todoList
4. expo start (Use expo start --tunnel to run app on physical device. For this first install expo from play store. Sign in on expo for hot reload)
6. Scan the qrcode on your expo app
7. Always type r if expo is not hot reload after saving
8. npm i react-native-vector-icons
9. npm link react-native-vector-icons
10. npm i uuidv4

# CI CD start

# Expo doesn't come with a package for writing tests by default, you’d have to install a package to handle that like jest for testing
1. npm i jest-expo --save-dev 
# check the added jest script in package.json file

# Next, we need to add react-test-renderer to our project:
2. npm i react-test-renderer --save-dev 

# if previous command need lates npm versions, just run the following commands
1. npm install -g npm-check-updates
2. ncu -u
3. npm install

# if the new npm vesions are not compitable with expo then just run to rollback to previous vesion
1. expo doctor --fix-dependencies

# if react-test-render is not compitable the current version of react then simply run: npm i react-test-renderer@17.0.2 where 17.0.2 is my current version of react

# to test a specific test file, run the following command:
1. npm test [test file name]

# input:  const tree = renderer.create(<App />).toJSON(); expect(tree.children.length).toBe(4);
# output: number of child elements of parent element which is view in return 

# CI CD end

```diff
+N.B : If you clone the repo then you have to run "npm install" to produce the node_modules folder since it is in .gitignore
```