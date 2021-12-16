import app from "./app"

app.listen(app.get('port'))

console.log("servidor esuchando en el puerto",app.get('port'))