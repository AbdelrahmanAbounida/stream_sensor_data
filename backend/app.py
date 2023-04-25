from flask import Flask, Response,render_template
from flask_cors import CORS
import random
import time

app = Flask(__name__)
app.secret_key = 'e09c4d4df3c64b9b4ec5ee6089e28142'
CORS(app)

@app.route("/")
def index():
    return "Stream is working"



@app.route('/stream')
def stream():
    def get_data():
        while True:
            yield f"data: {random.random()}\n\n"
            time.sleep(1)
    return Response(get_data(), mimetype='text/event-stream')

if __name__ == '__main__':
    app.run(debug=True)

