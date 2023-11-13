import tkinter as tk
from tkinter import ttk
from datetime import datetime, timedelta
import os

def salvar_formulario():
    titulo = titulo_entry.get()
    historia = historia_text.get("1.0", "end-1c")
    clima = clima_entry.get()
    horario = horario_entry.get()
    pessoas_conhecidas = pessoas_conhecidas_entry.get()
    pessoas_conhecidas_quem = pessoas_conhecidas_quem_entry.get()
    pessoas_conhecidas_assunto = pessoas_conhecidas_assunto_entry.get()
    pessoas_desconhecidas = pessoas_desconhecidas_entry.get()
    pessoas_desconhecidas_nome = pessoas_desconhecidas_nome_entry.get()
    pessoas_desconhecidas_assunto = pessoas_desconhecidas_assunto_entry.get()
    itens_diferentes = itens_diferentes_entry.get()
    construcoes_diferentes = construcoes_diferentes_entry.get()
    sensacoes_experimentadas = sensacoes_experimentadas_entry.get()
    significado_pessoal = significado_pessoal_entry.get()
    outras_observacoes = outras_observacoes_entry.get()
    nivel_lucidez = nivel_lucidez_entry.get()
    emocoes = emocoes_entry.get()
    acoes = acoes_entry.get()

    data_criacao = (datetime.now() - timedelta(days=1)).strftime("%Y-%m-%d")
    pasta = "sonhos"
    nome_arquivo = f"{pasta}/{titulo}_{data_criacao}.txt"
    
    if not os.path.exists(pasta):
        os.makedirs(pasta)

    with open(nome_arquivo, "a", encoding="utf-8") as file:
        file.write(f"Data de Criação: {data_criacao}\n")
        file.write(f"Título: {titulo}\n")
        file.write(f"História: {historia}\n")
        file.write(f"Clima: {clima}\n")
        file.write(f"Horário: {horario}\n")
        file.write(f"Pessoas conhecidas: {pessoas_conhecidas}\n")
        file.write(f"Quem: {pessoas_conhecidas_quem}\n")
        file.write(f"Assunto: {pessoas_conhecidas_assunto}\n")
        file.write(f"Pessoas desconhecidas: {pessoas_desconhecidas}\n")
        file.write(f"Nome: {pessoas_desconhecidas_nome}\n")
        file.write(f"Assunto: {pessoas_desconhecidas_assunto}\n")
        file.write(f"Itens Diferentes: {itens_diferentes}\n")
        file.write(f"Construções Diferentes: {construcoes_diferentes}\n")
        file.write(f"Sensações Experimentadas: {sensacoes_experimentadas}\n")
        file.write(f"Significado Pessoal: {significado_pessoal}\n")
        file.write(f"Outras Observações: {outras_observacoes}\n")
        file.write(f"Nível de Lucidez: {nivel_lucidez}\n")
        file.write(f"Emoções: {emocoes}\n")
        file.write(f"Ações: {acoes}\n")
        file.write("\n")

    # Limpar os campos após salvar
    titulo_entry.delete(0, "end")
    historia_text.delete("1.0", "end")
    clima_entry.delete(0, "end")
    horario_entry.delete(0, "end")
    pessoas_conhecidas_entry.delete(0, "end")
    pessoas_conhecidas_quem_entry.delete(0, "end")
    pessoas_conhecidas_assunto_entry.delete(0, "end")
    pessoas_desconhecidas_entry.delete(0, "end")
    pessoas_desconhecidas_nome_entry.delete(0, "end")
    pessoas_desconhecidas_assunto_entry.delete(0, "end")
    itens_diferentes_entry.delete(0, "end")
    construcoes_diferentes_entry.delete(0, "end")
    sensacoes_experimentadas_entry.delete(0, "end")
    significado_pessoal_entry.delete(0, "end")
    outras_observacoes_entry.delete(0, "end")
    nivel_lucidez_entry.delete(0, "end")
    emocoes_entry.delete(0, "end")
    acoes_entry.delete(0, "end")

app = tk.Tk()
app.title("Formulário de Sonhos")
app.geometry("400x750")

frame = tk.Frame(app)
frame.pack(padx=20, pady=20, fill="both", expand=True)

titulo_label = tk.Label(frame, text="Título:")
titulo_label.grid(row=0, column=0, sticky="w")
titulo_entry = tk.Entry(frame)
titulo_entry.grid(row=0, column=1, padx=10, pady=5, sticky="w")

historia_label = tk.Label(frame, text="História:")
historia_label.grid(row=1, column=0, sticky="w")
historia_text = tk.Text(frame, height=5, width=30)
historia_text.grid(row=1, column=1, padx=10, pady=5, sticky="w")

clima_label = tk.Label(frame, text="Clima:")
clima_label.grid(row=2, column=0, sticky="w")
clima_entry = tk.Entry(frame)
clima_entry.grid(row=2, column=1, padx=10, pady=5, sticky="w")

horario_label = tk.Label(frame, text="Horário:")
horario_label.grid(row=3, column=0, sticky="w")
horario_entry = tk.Entry(frame)
horario_entry.grid(row=3, column=1, padx=10, pady=5, sticky="w")

pessoas_conhecidas_label = tk.Label(frame, text="Pessoas conhecidas:")
pessoas_conhecidas_label.grid(row=4, column=0, sticky="w")
pessoas_conhecidas_entry = tk.Entry(frame)
pessoas_conhecidas_entry.grid(row=4, column=1, padx=10, pady=5, sticky="w")

pessoas_conhecidas_quem_label = tk.Label(frame, text="Quem:")
pessoas_conhecidas_quem_label.grid(row=5, column=0, sticky="w")
pessoas_conhecidas_quem_entry = tk.Entry(frame)
pessoas_conhecidas_quem_entry.grid(row=5, column=1, padx=10, pady=5, sticky="w")

pessoas_conhecidas_assunto_label = tk.Label(frame, text="Assunto:")
pessoas_conhecidas_assunto_label.grid(row=6, column=0, sticky="w")
pessoas_conhecidas_assunto_entry = tk.Entry(frame)
pessoas_conhecidas_assunto_entry.grid(row=6, column=1, padx=10, pady=5, sticky="w")

pessoas_desconhecidas_label = tk.Label(frame, text="Pessoas desconhecidas:")
pessoas_desconhecidas_label.grid(row=7, column=0, sticky="w")
pessoas_desconhecidas_entry = tk.Entry(frame)
pessoas_desconhecidas_entry.grid(row=7, column=1, padx=10, pady=5, sticky="w")

pessoas_desconhecidas_nome_label = tk.Label(frame, text="Nome:")
pessoas_desconhecidas_nome_label.grid(row=8, column=0, sticky="w")
pessoas_desconhecidas_nome_entry = tk.Entry(frame)
pessoas_desconhecidas_nome_entry.grid(row=8, column=1, padx=10, pady=5, sticky="w")

pessoas_desconhecidas_assunto_label = tk.Label(frame, text="Assunto:")
pessoas_desconhecidas_assunto_label.grid(row=9, column=0, sticky="w")
pessoas_desconhecidas_assunto_entry = tk.Entry(frame)
pessoas_desconhecidas_assunto_entry.grid(row=9, column=1, padx=10, pady=5, sticky="w")

itens_diferentes_label = tk.Label(frame, text="Itens Diferentes:")
itens_diferentes_label.grid(row=10, column=0, sticky="w")
itens_diferentes_entry = tk.Entry(frame)
itens_diferentes_entry.grid(row=10, column=1, padx=10, pady=5, sticky="w")

construcoes_diferentes_label = tk.Label(frame, text="Construções Diferentes:")
construcoes_diferentes_label.grid(row=11, column=0, sticky="w")
construcoes_diferentes_entry = tk.Entry(frame)
construcoes_diferentes_entry.grid(row=11, column=1, padx=10, pady=5, sticky="w")

sensacoes_experimentadas_label = tk.Label(frame, text="Sensações Experimentadas:")
sensacoes_experimentadas_label.grid(row=12, column=0, sticky="w")
sensacoes_experimentadas_entry = tk.Entry(frame)
sensacoes_experimentadas_entry.grid(row=12, column=1, padx=10, pady=5, sticky="w")

significado_pessoal_label = tk.Label(frame, text="Significado Pessoal:")
significado_pessoal_label.grid(row=13, column=0, sticky="w")
significado_pessoal_entry = tk.Entry(frame)
significado_pessoal_entry.grid(row=13, column=1, padx=10, pady=5, sticky="w")

outras_observacoes_label = tk.Label(frame, text="Outras Observações:")
outras_observacoes_label.grid(row=14, column=0, sticky="w")
outras_observacoes_entry = tk.Entry(frame)
outras_observacoes_entry.grid(row=14, column=1, padx=10, pady=5, sticky="w")

nivel_lucidez_label = tk.Label(frame, text="Nível de Lucidez:")
nivel_lucidez_label.grid(row=15, column=0, sticky="w")
nivel_lucidez_entry = tk.Entry(frame)
nivel_lucidez_entry.grid(row=15, column=1, padx=10, pady=5, sticky="w")

emocoes_label = tk.Label(frame, text="Emoções:")
emocoes_label.grid(row=16, column=0, sticky="w")
emocoes_entry = tk.Entry(frame)
emocoes_entry.grid(row=16, column=1, padx=10, pady=5, sticky="w")

acoes_label = tk.Label(frame, text="Ações:")
acoes_label.grid(row=17, column=0, sticky="w")
acoes_entry = tk.Entry(frame)
acoes_entry.grid(row=17, column=1, padx=10, pady=5, sticky="w")

botao_salvar = ttk.Button(frame, text="Salvar", command=salvar_formulario)
botao_salvar.grid(row=18, column=0, columnspan=2, sticky="ew")

app.mainloop()