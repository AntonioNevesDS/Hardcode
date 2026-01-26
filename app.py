from flask import Flask, render_template
from flask_cors import CORS
from database import init_db
from routes import api

app = Flask(__name__)
CORS(app)

# Inicializar banco de dados
init_db()

# Registrar rotas da API
app.register_blueprint(api, url_prefix='/api')

# Rota principal
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
