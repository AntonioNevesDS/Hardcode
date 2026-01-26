function showTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById(tab).classList.add('active');
    if (tab === 'tarefas') {
        loadFuncionariosSelect();
    }
}

async function loadFuncionarios() {
    const res = await fetch('/api/funcionarios');
    const funcionarios = await res.json();
    const tbody = document.querySelector('#tabelaFuncionarios tbody');
    tbody.innerHTML = funcionarios.map(f => `
        <tr>
            <td>${f.nome}</td>
            <td>${f.email}</td>
            <td>${f.cargo}</td>
            <td>${f.data_admissao}</td>
            <td><button class="delete-btn" onclick="deleteFuncionario(${f.id})">Remover</button></td>
        </tr>
    `).join('');
}

async function loadFuncionariosSelect() {
    const res = await fetch('/api/funcionarios');
    const funcionarios = await res.json();
    const select = document.getElementById('funcionarioTarefa');
    select.innerHTML = '<option value="">Selecione um funcionário</option>' +
        funcionarios.map(f => `<option value="${f.id}">${f.nome}</option>`).join('');
}

async function loadTarefas() {
    const res = await fetch('/api/tarefas');
    const tarefas = await res.json();
    const tbody = document.querySelector('#tabelaTarefas tbody');
    tbody.innerHTML = tarefas.map(t => `
        <tr>
            <td>${t.titulo}</td>
            <td>${t.descricao || '-'}</td>
            <td>${t.funcionario_nome || 'Não atribuída'}</td>
            <td class="status-${t.status}">
                <select onchange="updateStatus(${t.id}, this.value)">
                    <option value="pendente" ${t.status === 'pendente' ? 'selected' : ''}>Pendente</option>
                    <option value="em-andamento" ${t.status === 'em-andamento' ? 'selected' : ''}>Em Andamento</option>
                    <option value="concluida" ${t.status === 'concluida' ? 'selected' : ''}>Concluída</option>
                </select>
            </td>
            <td>${t.data_criacao}</td>
            <td><button class="delete-btn" onclick="deleteTarefa(${t.id})">Remover</button></td>
        </tr>
    `).join('');
}

document.getElementById('formFuncionario').onsubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/funcionarios', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            cargo: document.getElementById('cargo').value
        })
    });
    e.target.reset();
    loadFuncionarios();
};

document.getElementById('formTarefa').onsubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/tarefas', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            titulo: document.getElementById('tituloTarefa').value,
            descricao: document.getElementById('descricaoTarefa').value,
            funcionario_id: document.getElementById('funcionarioTarefa').value || null
        })
    });
    e.target.reset();
    loadTarefas();
};

async function deleteFuncionario(id) {
    if (confirm('Deseja remover este funcionário?')) {
        await fetch(`/api/funcionarios/${id}`, {method: 'DELETE'});
        loadFuncionarios();
    }
}

async function deleteTarefa(id) {
    if (confirm('Deseja remover esta tarefa?')) {
        await fetch(`/api/tarefas/${id}`, {method: 'DELETE'});
        loadTarefas();
    }
}

async function updateStatus(id, status) {
    await fetch(`/api/tarefas/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({status})
    });
    loadTarefas();
}

loadFuncionarios();
loadTarefas();