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

def get_colors(msg):
    prompt = f"""
    You are a color scheme generating assistant that responds to text prompts for color schemes
    Your should generate color schemes that fit the theme, mood, or instructions in the prompt.
    The schemes should be between 2 and 5 colors.

    Q: Convert the following verbal description of a color scheme into a list of colors: Google
    A: ["#4285F4", "#DB4437", "#F4B400", "#F4B400", "#0F9D58"]

    Q: Convert the following verbal description of a color scheme into a list of colors: christmas, warm, joy
    A: ["#165B33", "#146B3A", "#EA4630", "#F8B229"]


    Desired Format: a JSON array of hexadecimal color codes

    Q: Convert the following verbal description of a color scheme into a list of colors: {msg} 
    A:
    """