1. npm install --global expo-cli (if you don’t have Expo installed already)
2. expo init todoList.(If it throw error use following command on powershell as administrative:  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted)
3. cd todoList
4. expo start (Use expo start --tunnel to run app on physical device. For this first install expo from play store. Sign in on expo for hot reload)
6. Scan the qrcode on your expo app
7. Always type r if expo is not hot reload after saving
8. npm i react-native-vector-icons
9. npm link react-native-vector-icons
10. npm i uuidv4

N.B : If you clone the repo then you have to run npm install to produce the node_modules folder since it is in .gitignore
