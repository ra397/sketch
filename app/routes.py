from app import app
from flask import render_template, url_for

@app.route('/', methods=['Get', 'POST'])
def main():
    return render_template(url_for('index'))