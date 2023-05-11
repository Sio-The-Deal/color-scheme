import openai
from flask import Flask, render_template, request
from dotenv import dotenv_values
import json
from flask_cors import CORS


config = dotenv_values('.env');
openai.api_key = config["OPENAI_API_KEY"]


app = Flask(__name__,
    template_folder='templates',
    static_url_path='', 
    static_folder='static'
)