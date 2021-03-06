import os
from flask import Flask, render_template, send_from_directory

# initialization
app = Flask(__name__)
app.config.update(
    DEBUG = True,
)

# controllers
@app.route("/")
def index():
    return render_template('index.html')


@app.route("/dark")
def dark():
    return render_template('headerdark.html')


@app.route("/trans")
def trans():
    return render_template('headertrans.html')


# launch
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
