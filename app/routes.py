from app import app
from flask import render_template

@app.route('/', methods=['Get', 'POST'])
def index():
    return render_template('index.html')

@app.route('/explore', methods=['GET', 'POST'])
def explore():
    return render_template('explore.html')