from flask import Blueprint, request, jsonify
from models import Funcionario, Tarefa

api = Blueprint('api', __name__)

# Rotas de Funcionários
@api.route('/funcionarios', methods=['GET'])
def get_funcionarios():
    funcionarios = Funcionario.get_all()
    return jsonify(funcionarios)

@api.route('/funcionarios', methods=['POST'])
def add_funcionario():
    data = request.json
    funcionario_id = Funcionario.create(
        data['nome'],
        data['email'],
        data['cargo']
    )
    return jsonify({
        'id': funcionario_id,
        'message': 'Funcionário adicionado com sucesso'
    }), 201

@api.route('/funcionarios/<int:id>', methods=['DELETE'])
def delete_funcionario(id):
    Funcionario.delete(id)
    return jsonify({'message': 'Funcionário removido com sucesso'})

# Rotas de Tarefas
@api.route('/tarefas', methods=['GET'])
def get_tarefas():
    tarefas = Tarefa.get_all()
    return jsonify(tarefas)

@api.route('/tarefas', methods=['POST'])
def add_tarefa():
    data = request.json
    tarefa_id = Tarefa.create(
        data['titulo'],
        data['descricao'],
        data.get('funcionario_id')
    )
    return jsonify({
        'id': tarefa_id,
        'message': 'Tarefa criada com sucesso'
    }), 201

@api.route('/tarefas/<int:id>', methods=['PUT'])
def update_tarefa(id):
    data = request.json
    Tarefa.update_status(id, data['status'])
    return jsonify({'message': 'Tarefa atualizada com sucesso'})

@api.route('/tarefas/<int:id>', methods=['DELETE'])
def delete_tarefa(id):
    Tarefa.delete(id)
    return jsonify({'message': 'Tarefa removida com sucesso'})

