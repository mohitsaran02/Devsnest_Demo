from os import putenv
from flask import Flask, request

app = Flask('__name__')
defMethods = ['GET', 'POST']

Data = []

@app.route('/', methods = defMethods)
def home():
    return '''
    <h1>API</h1>
    <ol>
    <li>To add string : /add/your_string</li>
    <li>To merge string : /merge</li>
    </ol>
    '''

@app.route('/add', methods = ["POST"])
@app.route('/add/<string:inp>')
def add_string(inp=None):
    if request.method == "GET":
        Data.append(inp)
        return f"'{inp}' succesfully inserted via GET"
    elif request.method == "POST":
        string_json = request.get_json()
        Data.append(string_json['data'])
        return f"'{string_json['data']}' successfully stored via POST"


@app.route('/merge', methods=defMethods)
def merge():
    return " ".join(Data)

if __name__ == "__main__":
    app.run(debug=True)