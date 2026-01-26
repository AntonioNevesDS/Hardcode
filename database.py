import sqlite3
from datetime import datetime

def init_db():
    conn = sqlite3.connect('empresa.db')
    c = conn.cursor()
    
    c.execute('''CREATE TABLE IF NOT EXISTS funcionarios
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  nome TEXT NOT NULL,
                  email TEXT NOT NULL,
                  cargo TEXT NOT NULL,
                  data_admissao TEXT NOT NULL)''')
    
    c.execute('''CREATE TABLE IF NOT EXISTS tarefas
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  titulo TEXT NOT NULL,
                  descricao TEXT,
                  funcionario_id INTEGER,
                  status TEXT DEFAULT 'pendente',
                  data_criacao TEXT NOT NULL,
                  FOREIGN KEY (funcionario_id) REFERENCES funcionarios (id))''')
    
    conn.commit()
    conn.close()

def get_connection():
    return sqlite3.connect('empresa.db')