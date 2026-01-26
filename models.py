from database import get_connection
from datetime import datetime

class Funcionario:
    @staticmethod
    def get_all():
        conn = get_connection()
        c = conn.cursor()
        c.execute('SELECT * FROM funcionarios')
        funcionarios = [
            {
                'id': row[0],
                'nome': row[1],
                'email': row[2],
                'cargo': row[3],
                'data_admissao': row[4]
            } for row in c.fetchall()
        ]
        conn.close()
        return funcionarios
    
    @staticmethod
    def create(nome, email, cargo):
        conn = get_connection()
        c = conn.cursor()
        c.execute(
            'INSERT INTO funcionarios (nome, email, cargo, data_admissao) VALUES (?, ?, ?, ?)',
            (nome, email, cargo, datetime.now().strftime('%Y-%m-%d'))
        )
        conn.commit()
        funcionario_id = c.lastrowid
        conn.close()
        return funcionario_id
    
    @staticmethod
    def delete(funcionario_id):
        conn = get_connection()
        c = conn.cursor()
        c.execute('DELETE FROM tarefas WHERE funcionario_id = ?', (funcionario_id,))
        c.execute('DELETE FROM funcionarios WHERE id = ?', (funcionario_id,))
        conn.commit()
        conn.close()


class Tarefa:
    @staticmethod
    def get_all():
        conn = get_connection()
        c = conn.cursor()
        c.execute('''
            SELECT t.id, t.titulo, t.descricao, t.funcionario_id, 
                   f.nome, t.status, t.data_criacao 
            FROM tarefas t 
            LEFT JOIN funcionarios f ON t.funcionario_id = f.id
        ''')
        tarefas = [
            {
                'id': row[0],
                'titulo': row[1],
                'descricao': row[2],
                'funcionario_id': row[3],
                'funcionario_nome': row[4],
                'status': row[5],
                'data_criacao': row[6]
            } for row in c.fetchall()
        ]
        conn.close()
        return tarefas
    
    @staticmethod
    def create(titulo, descricao, funcionario_id):
        conn = get_connection()
        c = conn.cursor()
        c.execute(
            'INSERT INTO tarefas (titulo, descricao, funcionario_id, data_criacao) VALUES (?, ?, ?, ?)',
            (titulo, descricao, funcionario_id, datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
        )
        conn.commit()
        tarefa_id = c.lastrowid
        conn.close()
        return tarefa_id
    
    @staticmethod
    def update_status(tarefa_id, status):
        conn = get_connection()
        c = conn.cursor()
        c.execute('UPDATE tarefas SET status = ? WHERE id = ?', (status, tarefa_id))
        conn.commit()
        conn.close()
    
    @staticmethod
    def delete(tarefa_id):
        conn = get_connection()
        c = conn.cursor()
        c.execute('DELETE FROM tarefas WHERE id = ?', (tarefa_id,))
        conn.commit()
        conn.close()