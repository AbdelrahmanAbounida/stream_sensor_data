from flask import Flask, Response
import time
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
def generate():
    i = 0
    while True:
        yield f"data: {i}\n\n"
        i += 1
        time.sleep(1)

@app.route('/stream')
def stream():
    return Response(generate(), mimetype='text/event-stream')


if __name__ == '__main__':
    app.run(debug=True)