const proyectos = {
    Calificaciones: {
    titulo: "Calificaciones y Clasificación de Alumnos",
    descripcion: "Procesa un arreglo estático de calificaciones escolares. Calcula el promedio general del grupo y realiza clasificaciones numéricas para determinar cuántos alumnos están aprobados, reprobados, regulares o sobresalientes.",
    consola: "El promedio de las calificaciones es: 7.7\nAlumnos reprobados, 3 Alumnos aprobados, 7\nAlumnos regulares. 4 Alumnos sobresalientes, 6",
    codigo: `Cal_alumnos = [8,8,7,5,10,9,9,5,6,10]
sum=0
for i in Cal_alumnos:
    sum+=i
    prom=sum/len(Cal_alumnos)
    
print("El promedio de las calificaciones es:",prom)
vi =0
vs =0
aa=0
for i in Cal_alumnos:
    if i <= 6:
        vi += 1 
    aa = 10-vi
print( "Alumnos reprobados,",vi, "Alumnos aprobados,",aa)

va =0
ve =0
bb=0
for i in Cal_alumnos:
    if i >= 8:
       ve += 1    
    bb = 10 - ve 
    

           
print("Alumnos regulares.",bb, "Alumnos sobresalientes,",ve)`
},
Parangaricutimiricuaro: {
    titulo: "Conteo de Caracteres en 'Parangaricutimiricuaro'",
    descripcion: "Procesa una cadena de texto para contar la frecuencia de cada carácter.",
    consola: "A:2\nB:1\nC:1\nD:1\nE:1\nF:1\nG:1\nH:1\nI:2\nJ:1\nK:1\nL:1\nM:2\nN:1\nO:2\nP:1\nQ:1\nR:2\nS:1\nT:2\nU:2\nV:1\nW:1\nX:1\nY:1\nZ:1",
    codigo: `CADENA="Parangaricutimiricuaro"
cadena2=[]

for i in CADENA:
    cadena2.append(i.upper())
conteo =[0]*26

for cadena2 in cadena2:
           posicion=ord(cadena2)-ord('A')
           conteo[posicion]+=1
           
for i in range(26):
    if conteo[i]>0: 
     print(f"{chr(i+ord('A'))}:{conteo[i]}")
`
},
    Repetidos: {
    titulo: "Repetidos",
    descripcion: "Eliminación de elementos duplicados en una lista ordenada.",
    consola: "LISTA ORIGINAL: [1, 2, 4, 4, 5, 7, 9, 11, 11, 13, 14, 15, 16, 16]\nLISTA ACTUALIZADA: [1, 2, 4, 5, 7, 9, 11, 13, 14, 15, 16]",
    codigo: `X=[1,2,4,4,5,7,9,11,11,13,14,15,16,16]

print("LISTA ORIGINAL:",X)

for i in range(len(X)-1,0,-1):
    if X[i]==X[i-1]:
        X.pop(i)

print("LISTA ACTUALIZADA:",X)`
},
    Toneladas_de_cereal: {
        titulo: "Toneladas de Cereal",
        descripcion: "Calcula el promedio anual de toneladas de cereal producidas por mes.",
        consola: "LAS TONELADAS DE CEREAL POR MES SON: [12, 24, 16, 15, 20, 18, 6, 10, 12, 11, 15, 12]\nEL PROMEDIO ANUAL DE TONELADAS DE CEREAL ES:  14.25\nLOS QUE FUERON INFERIORES A EL PROMEDIO ANUAL SON: [24,16,15,20,18,6,10,11,15]\nLOS QUE FUERON SUPERIORES A EL PROMEDIO ANUAL SON: [12,6,10,12,11,12]",
        codigo: `Tonelada_cereal = [12, 24, 16, 15, 20, 18, 6, 10, 12, 11, 15, 12]
print ("LAS TONELADAS DE CEREAL POR MES SON:", Tonelada_cereal)
suma = 0
for i in Tonelada_cereal:
    suma += i

promedio = suma / len(Tonelada_cereal)
print("EL PROMEDIO ANUAL DE TONELADAS DE CEREAL ES: ",promedio)
superior =[]
inferior =[]
for i in Tonelada_cereal:
   if promedio > i:
       superior.append(i)
       
   else:
      inferior.append(i)


print("LOS QUE FUERON INFERIORES A EL PROMEDIO ANUAL SON:",inferior)
print("LOS QUE FUERON SUPERIORES A EL PROMEDIO ANUAL SON:",superior)
`
    },
    Asientos: {
        titulo: "Sistema de Reservación de Asientos",
        descripcion: "Implementa un sistema de reservación de asientos en una matriz 6x6, permitiendo reservar, liberar y consultar el estado de cada asiento.",
        consola: "OK: reservado\nOK: reservado\nRECHAZO: ocupado\nEstado: reservado\nOK: liberado\nRECHAZO: ya libre\nOK: reservado\nOK: reservado\nEstado: reservado\nOK: reservado\n[[0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1]]\nTotal de asientos reservados al final: 4\nFilas con más reservas: [1,2,3,6]",
        codigo: `A=[ [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
 ]

def reservar(i,j):
    global A
    i-=1
    j-=1
    if A[i][j] == 0:
        A[i][j] = 1
        print("OK: reservado")
    else:
        print("RECHAZO: ocupado")


def liberar(i,j):
    global A
    i-=1
    j-=1
    if A[i][j] == 1:
        A[i][j] = 0
        print("OK: liberado")
    else:
        print("RECHAZO: ya libre")


def consultar(i,j):
    global A
    i-=1
    j-=1
    if A[i][j] == 1:
        print("Estado: reservado")
    else:
        print("Estado: libre")

reservar(1,1)
reservar(1,2)
reservar(1,1)
consultar(1,1)
liberar(1,1)
liberar(1,1)
reservar(3,4)
reservar(6,6)
consultar(6,6)
reservar(2,5)
print(A)

TOTAL=sum(sum(fila) for fila in A)
print("Total de asientos reservados al final:",TOTAL)

Filas_con_mas_reservas = [i+1 for i, row in enumerate(A) if sum(row) == max(sum(r) for r in A)]
print("Filas con más reservas:", Filas_con_mas_reservas)    `
    },

    Matrices: {
        titulo: "Matriz de Multiplicación Clásica",
        descripcion: "  Este codigo implementa la multiplicación de matrices clásica.",
        consola: "[[80, 203, 331], [68, 71, 247], [77, 92, 235]]",
        codigo: `A=[[5,6,13],[5,10,1],[2,11,3]]
B=[[1,2,17],[6,5,15],[3,11,12]]

def crear_matriz(A,B):
    C=[[0,0,0],[0,0,0],[0,0,0]]
    sum=0
    if len(A[0])==len(B):
        for i in range(len(A)):
            for j in range(len(B[0])):
                for k in range(len(B)):
                    sum+=A[i][k]*B[k][j]
                C[i][j]=sum
                sum=0
        print(C)
    else:
        print("No se pueden multiplicar las matrices")
crear_matriz(A,B)`
    },

    Coordenadas: {
        titulo: "Coordenadas de un Valor en una Matriz",
        descripcion: "Busca un valor específico dentro de una matriz 6x6 y devuelve una lista de coordenadas (fila, columna) donde se encuentra dicho valor. Si el valor no existe, se indica que no fue encontrado.",
        consola: "[(1, 2), (1, 6), (2, 3), (3, 4), (4, 2), (4, 5), (6, 1), (6, 6)]",
        codigo: `A = [
    [4,7,2,9,5,7],
    [1,3,7,6,8,0],
    [9,2,5,7,4,6],
    [8,7,1,3,7,2],
    [5,0,6,4,2,9],
    [7,8,9,2,1,7]
]

def coordenadas(A, valor):
    listaCoordenadas=[]
    for i in range(len(A[0])):
        for j in range(len(A[0])):
            if A[i][j] == valor:
                listaCoordenadas.append((i+1,j+1))
    if listaCoordenadas ==[]:
        return print("No encontrado")
    else:
        return print(listaCoordenadas)
    
coordenadas(A,7)
`
    },
  

    panda: {
        titulo: "Análisis Estadístico de Precios de Viviendas",
        descripcion: " Utiliza la biblioteca pandas para cargar un conjunto de datos de precios de viviendas. Calcula la media, moda, varianza y desviación estándar muestral de los precios, proporcionando una visión estadística completa del mercado inmobiliario.",
        consola: "\nMedia: 540000.0\nModa: 540000\nVarianza: 40000000000.0\nDesviacion estandar muestral: 200000.0",
        codigo: `import numpy as np
import pandas as pd
df = pd.read_csv('PRACTICA_2/Housing.csv')
lista =df ['price']

def housingStarts(str):
    lista=lista=df ['price']
suma = 0
moda = 0
for i in lista:
        suma+= i
Media = suma/len(lista)
print('\nMedia:', Media)
m= {}
for i in lista:
    if i in m:
        m[i] += 1
    else:
        m[i] = 1
        moda = max(m, key=m.get)
print('Moda:', moda)
varianza_sum = 0
for i in lista:
    varianza_sum += (i - Media) ** 2/(len(lista) - 1)
print('Varianza:',  varianza_sum)
desviacion_muestral = np.sqrt(varianza_sum)
print('Desviacion estandar muestral:', desviacion_muestral)
 `
    },
    bicolas1: {
        titulo: "Bicolas Optimizado",
        descripcion: "Implementación de una cola circular utilizando listas. Permite encolar y desencolar elementos, así como consultar el estado de la cola.",
    consola: "Operacion: 1000 - 500 = 500  \nOperacion: 1000 - 400 = 600 \nOperacion: 1000 - 300 = 700 \nOperacion: 1000 - 200 = 800 \nOperacion: 1000 - 100 = 900 \n[500, 600, 700, 800, 900] \nOperacion: 900 + 40OTH = 13００ \nOperacion: 8００ + 3００ = 11００ \nOperacion: 7００ + 3００ = 1０００ \nOperacion: 6００ + 3００ = 9００ \nOperacion: 5００ + 4００ = 9００ \n[9００, 9０９,１００９,１１１９,１３１９]"
,
        codigo: `def enque_tail(lista, elemento):
    lista.append(elemento)
def enque_head(lista, elemento):
    lista.insert(0, elemento)
def deque_head(lista):
    lista.pop(0)
def deque_tail(lista):
    lista.pop(-1)
def head(lista):
    return (lista[0])
def tail(lista):
    return (lista[-1])
def is_empty(lista):
    if lista == []:
        return True
    else:
        return False
def size(lista):
    return len(lista)

def retiro(lista,monto):
    global retiros
    enque_head(retiros, (lista[0] - monto))
    print('Operacion:',head(lista),'-',monto,'=',head(retiros))
    deque_head(lista)
    enque_tail(lista,(retiros[0]))

def deposito(lista,monto):
    global depositos
    enque_tail(depositos, (lista[-1] + monto))
    print('Operacion:',tail(lista),'+',monto,'=',tail(depositos))
    deque_tail(lista)
    enque_head(lista,(depositos[-1]))

saldos = [1000,1000,1000,1000,1000]
retiros = []
depositos = []

retiro(saldos,500)
retiro(saldos,400)
retiro(saldos,300)
retiro(saldos,200)
retiro(saldos,100)
print(saldos)
deposito(saldos,400)
deposito(saldos,300)
deposito(saldos,300)
deposito(saldos,300)
deposito(saldos,400)
print(saldos)

`
    },
    bancario_optimizado: {
        titulo: "Simulación Bancaria Optimizada (Collections Deque)",
        descripcion: "Versión avanzada de estructura lineal con tipado estático. Utiliza la librería collections para gestionar una cola rápida, implementando un historial transaccional de tamaño acotado (maxlen) que guarda los saldos anteriores.",
        consola: "True\nHistorial (saldos antes del retiro): [1000, 1000, 1000, 1000, 1000]\nHistorial (saldos antes del deposito): [500, 500, 500, 500, 500]\nSaldos finales: [800, 800, 800, 800, 800]",
        codigo: `from collections import deque

def enqueue(q:deque, elemento) -> None:
    q.append(elemento)
def dequeue(q:deque):
    return q.popleft()
def peek(q:deque):
    return q[0]
def is_empty(q:deque)-> bool:
    return not q
def size(q:deque) -> int:
    return len(q)

def aplicar_retiro(saldos:deque[int],monto:int,historial:deque[int] | None = None) -> None:
    saldo_original = dequeue(saldos)
    if historial is not None:
        enqueue(historial,saldo_original)
    nuevo_saldo = saldo_original - monto
    enqueue(saldos, nuevo_saldo)
    
def aplicar_deposito(saldos:deque[int],monto:int,historial:deque[int] | None = None) -> None:
    saldo_original = dequeue(saldos)
    if historial is not None:
        enqueue(historial,saldo_original)
    nuevo_saldo = saldo_original + monto
    enqueue(saldos, nuevo_saldo)
    
saldos = deque()
historial_saldos = deque(maxlen=5)

print(is_empty(saldos))

for _ in range(5):
    enqueue(saldos, 1000)

monto_retiro = 500
monto_deposito = 300

for _ in range(5):
    aplicar_retiro(saldos, monto_retiro, historial_saldos)
print("Historial (saldos antes del retiro):", list(historial_saldos))
for _ in range(5):
    aplicar_deposito(saldos, monto_deposito, historial_saldos)
print("Historial (saldos antes del deposito):", list(historial_saldos))

print("Saldos finales:", list(saldos))`
    },
    Cola: {
        titulo: "Implementación de Cola",
        descripcion: "Implementación básica de una cola utilizando listas en Python.",
        consola: "True\nFalse\nTrue\n8 \n2",
        codigo: `def enque(lista, elemento):
    lista.append(elemento)

def deque(lista):
    lista.pop(0)

def peek(lista):
    return lista[0]

def isEmpty(lista):
    if lista == []:
        return True
    else:
        return False

def size(lista):
     return len(lista)   

list=[]
print(isEmpty(list))
enque(list,1)
print(isEmpty(list))
deque(list)
print(isEmpty(list))
enque(list,8)
enque(list,7)
print(peek(list))
size(list)
print(size(list))
`
    },
    deque: {
        titulo: "Simulación de Control de Tráfico con Deque",
        descripcion: "Algoritmo de control de tráfico utilizando collections.deque. Simula la llegada de procesos, expulsando automáticamente los elementos obsoletos que exceden un umbral de espera de 10 unidades de tiempo.",
        consola: "True \n Historial (saldos antes del retiro): [1000, 1000, 1000, 1000, 1000]\n Historial (saldos antes del deposito): [500, 500, 500, 500, 500] \nSaldos finales: [800, 800, 800, 800, 800]",
        codigo: `from collections import deque
def enque_tail(lista, elemento):
    lista.append(elemento)

def enque_head(lista, elemento):
    lista.appendleft(elemento)

def dequeue(q:deque):
    return q.popleft()

def deque_tail(lista):
    lista.pop()

def head(lista):
    return lista[0]

def tail(lista):
    return lista[-1]

def is_empty(lista):
    return lista == []

def size(lista):
    return len(lista)

def colas():
    cola = deque()
    tiempo = [0,2,4,6,12]

    for t in tiempo:
        while len(cola) > 0 and t - cola[0] >= 10:
            cola.popleft()
        if len(cola) < 3:
            cola.appendleft(t)
            
            print("tiempo", t, "aceptada", list(cola))
        else:
            print("tiempo", t, "rechazada",list(cola))

    print("COLA", list(cola))
colas()`
    },
    Fila_de_banco: {
        titulo: "Fila de Banco con Cola Circular",
        descripcion: "Simulación de una fila de banco utilizando una estructura de cola circular. Permite realizar operaciones de retiro y depósito, manteniendo",
        consola: "True\n[500]\n[500, 500, 500, 500, 500]\n[300]\n[800, 800, 800, 800, 800]\n800 \n 5",
        codigo: `cdef enque(lista, elemento):
    lista.append(elemento)

def deque(lista, lista2):
    enque(lista2, lista[0])
    lista.pop(0)

def retiros(lista, lista2):
    r = lista[0] - lista2[0]   
    deque(lista, lista2)
    enque(lista, r)
    
def depositos(lista, lista2):
    d = lista[0] + lista2[0]
    deque(lista, lista2)
    enque(lista, d)

def peek(lista):
    return lista[0]

def isEmpty(lista):
      if lista == []:
        return True
      else:
        return False

def size(lista):
    return len(lista)

saldos = []
retiro = []
deposito=[]

print(isEmpty(saldos))
enque(saldos, 1000)
enque(saldos, 1000)
enque(saldos, 1000)
enque(saldos, 1000)
enque(saldos, 1000)
enque(retiro, 500)
print(retiro)
retiros(saldos, retiro)
retiros(saldos, retiro)
retiros(saldos, retiro)
retiros(saldos, retiro)
retiros(saldos, retiro)
print(saldos)
enque(deposito, 300)
print(deposito)
depositos(saldos, deposito)
depositos(saldos, deposito)
depositos(saldos, deposito)
depositos(saldos, deposito)
depositos(saldos, deposito)
print(saldos)
print(peek(saldos))
size(saldos)
print(size(saldos))
`
    },
    bicolas: {
        titulo: "Bicolas",
        descripcion: " Simulación de una estructura de datos tipo 'bicolas' utilizando listas. Permite realizar operaciones de encolado y desencolado tanto por la cabeza como por la cola, así como consultar el estado de la estructura.",
        consola: "tiempo 2 aceptada [2, 0] \ntiempo 4 aceptada [4, 2, 0]\n tiempo 6 rechazada [4, 2, 0] \ntiempo 12 rechazada [4, 2, 0] \nCOLA [4, 2, 0]",
        codigo: `from collections import deque
def enque_tail(lista, elemento):
    lista.append(elemento)

def enque_head(lista, elemento):
    lista.appendleft(elemento)

def dequeue(q:deque):
    return q.popleft()

def deque_tail(lista):
    lista.pop()

def head(lista):
    return lista[0]

def tail(lista):
    return lista[-1]

def is_empty(lista):
    return lista == []

def size(lista):
    return len(lista)

def colas():
    cola = deque()
    tiempo = [0,2,4,6,12]

    for t in tiempo:
        while len(cola) > 0 and t - cola[0] >= 10:
            cola.popleft()
        if len(cola) < 3:
            cola.appendleft(t)
           
            print("tiempo", t, "aceptada", list(cola))
        else:
            print("tiempo", t, "rechazada",list(cola))

    print("COLA", list(cola))
colas()

`
    },
    arbol_posorden_inorden_postorder: {
        titulo: "Arbol, Posorden, Inorden, Postorder",
        descripcion: "Implementación estructural de un Árbol Binario de Búsqueda (BST). Desarrolla lógica recursiva para la inserción ordenada de datos y genera las tres variantes clásicas de recorrido por profundidad: Preorden, Inorden y Postorden.",
        consola: "Preorden:\n3,1,None,2,4,None,5,\nInorden:\nNone,1,2,3,None,4,5,\nPostorden:\nNone,2,1,None,5,4,3,",
        codigo: `class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.izquierdo = None
        self.derecho = None

def es_hoja(nodo):
    return nodo.izquierdo is None and nodo.derecho is None

def preorden(nodo):
    if nodo is None:
        print("None", end=",")
        return
    print(nodo.valor, end=",")
    if not es_hoja(nodo):
        preorden(nodo.izquierdo)
        preorden(nodo.derecho)

def inorden(nodo):
    if nodo is None:
        print("None", end=",")
        return
    if not es_hoja(nodo):
        inorden(nodo.izquierdo)
    print(nodo.valor, end=",")
    if not es_hoja(nodo):
        inorden(nodo.derecho)

def postorden(nodo):
    if nodo is None:
        print("None", end=",")
        return
    if not es_hoja(nodo):
        postorden(nodo.izquierdo)
        postorden(nodo.derecho)
    print(nodo.valor, end=",")

def agregar_recursivo(nodo, dato):
    if dato < nodo.valor:
        if nodo.izquierdo is None:
            nodo.izquierdo = Nodo(dato)
        else:
            agregar_recursivo(nodo.izquierdo, dato)
    else:
        if nodo.derecho is None:
            nodo.derecho = Nodo(dato)
        else:
            agregar_recursivo(nodo.derecho, dato)

valores = [1, 2, 4, 5]
raiz = Nodo(3)
for v in valores:
    agregar_recursivo(raiz, v)

print("Preorden:")
preorden(raiz)
print("\\nInorden:")
inorden(raiz)
print("\\nPostorden:")
postorden(raiz)


# Preorden:
# 3,1,None,2,4,None,5,
# Inorden:
# None,1,2,3,None,4,5,
# Postorden:
# None,2,1,None,5,4,3,



#         3
#       /   \\
#      1     4
#     / \\   /  \\
#   None 2 None 5`
    },
    Diccionario_de_arbol: {
        titulo: "Diccionario de arbol",
        descripcion: "Implementa una clase de nodo con punteros bidireccionales explícitos hacia hijos y padres. Incluye una función de mapeo estructurada con retorno condicional para convertir la jerarquía en un JSON limpio.",
        consola: "Diccionario del árbol:\n{1: {13: {11: {5: {3: null, 9: {6: null, 10: {12: null}}}}}}}",
        codigo: `class NodoArbol:
    def __init__(self, clave, valor, izquierdo=None, derecho=None, padre=None):
        self.clave = clave
        self.cargaUtil = valor
        self.hijoIzquierdo = izquierdo
        self.hijoDerecho = derecho
        self.padre = padre

    def tieneHijoIzquierdo(self):
        return self.hijoIzquierdo

    def tieneHijoDerecho(self):
        return self.hijoDerecho

    def esHijoIzquierdo(self):
        return self.padre and self.padre.hijoIzquierdo == self

    def esHijoDerecho(self):
        return self.padre and self.padre.hijoDerecho == self

    def esRaiz(self):
        return not self.padre

    def esHoja(self):
        return not (self.hijoDerecho or self.hijoIzquierdo)

    def tieneAlgunHijo(self):
        return self.hijoDerecho or self.hijoIzquierdo

    def tieneAmbosHijos(self):
        return self.hijoDerecho and self.hijoIzquierdo

    def reemplazarDatoDeNodo(self, clave, valor, hizq, hder):
        self.clave = clave
        self.cargaUtil = valor
        self.hijoIzquierdo = hizq
        self.hijoDerecho = hder
        if self.tieneHijoIzquierdo():
            self.hijoIzquierdo.padre = self
        if self.tieneHijoDerecho():
            self.hijoDerecho.padre = self


def insertar_nodo(raiz, clave, valor=None):
    if raiz is None:
        return NodoArbol(clave, valor)
    if clave < raiz.clave:
        if raiz.hijoIzquierdo:
            insertar_nodo(raiz.hijoIzquierdo, clave, valor)
        else:
            raiz.hijoIzquierdo = NodoArbol(clave, valor, padre=raiz)
    elif clave > raiz.clave:
        if raiz.hijoDerecho:
            insertar_nodo(raiz.hijoDerecho, clave, valor)
        else:
            raiz.hijoDerecho = NodoArbol(clave, valor, padre=raiz)
    return raiz

def arbol_a_diccionario(nodo):
    if nodo is None:
        return None
    
    
    if not nodo.tieneAlgunHijo():
        return None
    
    hijos = {}
   
    if nodo.hijoIzquierdo:
        hijos[nodo.hijoIzquierdo.clave] = arbol_a_diccionario(nodo.hijoIzquierdo)
    else:
        hijos[None] = None 
        del hijos[None] 
    if nodo.hijoDerecho:
        hijos[nodo.hijoDerecho.clave] = arbol_a_diccionario(nodo.hijoDerecho)
    return hijos if hijos else None

lista = [1, 13, 11, 5, 9, 10, 1, 12, 3, 6] 

raiz = None
for numero in lista:
    raiz = insertar_nodo(raiz, numero, numero)
resultado = {raiz.clave: arbol_a_diccionario(raiz)}

print("Diccionario del árbol:")
print(resultado)`
    },
    Grafos: {
        titulo: "Recorrido BFS en Grafos con Rastreo de Cola",
        descripcion: "Implementa el algoritmo de Búsqueda en Anchura (BFS) sobre un grafo mediante listas de adyacencia. Utiliza un conjunto para nodos visitados y una cola rápida para rastrear e imprimir la exploración.",
        consola: "Visito nodo: A\n--> Se agrega B\nCola: deque(['B'])\n--> Se agrega C\nCola: deque(['B', 'C'])\nVisito nodo: B\n--> Se agrega D\nCola: deque(['C', 'D'])\n--> Se agrega E\nCola: deque(['C', 'D', 'E'])\nVisito nodo: C\n--> Se agrega F\nCola: deque(['D', 'E', 'F'])\n--> Se agrega G\nCola: deque(['D', 'E', 'F', 'G'])\nVisito nodo: D\nVisito nodo: E\nVisito nodo: F\nVisito nodo: G\n\nLista final de nodos visitados: ['A', 'B', 'C', 'D', 'E', 'F', 'G']",
        codigo: `from collections import deque

def BFS(grafo, start):
    visited = set()
    queue = deque([start])
    
    while queue:
        node = queue.popleft()
        if node not in visited:
            print(f"Visito nodo: {node}")
            visited.add(node)
            
            for neighbor in grafo[node]:
                if neighbor not in visited:
                    queue.append(neighbor)
                    print(f"--> Se agrega {neighbor}")
                    print("Cola:", queue)

    print(f"\\nLista final de nodos visitados: {list(visited)}")


grafo = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F','G'],
    'D': [],
    'E': [],
    'F': [],
    'G': []
}

BFS(grafo, 'A')`
    },
    Matriz_de_adyacencia: {
        titulo: "Dijkstra con Caminos",
        descripcion: "Implementa el algoritmo clásico de optimización de trayectorias sobre un grafo pesado. Emplea la librería heapq para operar una cola de prioridad eficiente y reconstruye el camino exacto nodo por nodo.",
        consola: "Caminos más cortos desde el nodo 0:\n----------------------------------------\nNodo 0 (Distancia 0): 0\nNodo 1 (Distancia 9): 0 -> 1\nNodo 2 (Distancia 11): 0 -> 4 -> 2\nNodo 3 (Distancia 11): 0 -> 4 -> 6 -> 7 -> 3\nNodo 4 (Distancia 6): 0 -> 4\nNodo 5 (Distancia 12): 0 -> 4 -> 6 -> 7 -> 3 -> 5\nNodo 6 (Distancia 9): 0 -> 4 -> 6\nNodo 7 (Distancia 11): 0 -> 4 -> 6 -> 7",
        codigo: `import heapq

def dijkstra_con_caminos(grafo, inicio):
    distancias = {nodo: float('inf') for nodo in grafo}
    predecesores = {nodo: None for nodo in grafo}
    distancias[inicio] = 0
    
    pq = [(0, inicio)]
    
    while pq:
        distancia_actual, u = heapq.heappop(pq)
        
        if distancia_actual > distancias[u]:
            continue
            
        for v, peso in grafo[u]:
            distancia_nueva = distancia_actual + peso
            
            if distancia_nueva < distancias[v]:
                distancias[v] = distancia_nueva
                predecesores[v] = u  
                heapq.heappush(pq, (distancia_nueva, v))
                
    return distancias, predecesores

def obtener_camino(predecesores, destino):
    camino = []
    actual = destino
    while actual is not None:
        camino.insert(0, actual) 
        actual = predecesores[actual]
    return camino

grafo = {
    0: [(1, 9), (4, 6)],
    1: [(0, 9), (3, 8)],
    2: [(4, 5), (5, 6)],
    3: [(1, 8), (5, 1), (7, 7)],
    4: [(0, 6), (2, 5), (6, 3)],
    5: [(2, 6), (3, 1)],
    6: [(4, 3), (7, 2)],
    7: [(3, 7), (6, 2)]
}

inicio = 0
distancias, padres = dijkstra_con_caminos(grafo, inicio)

print(f"Caminos más cortos desde el nodo {inicio}:")
print("-" * 40)

for nodo in grafo:
    camino = obtener_camino(padres, nodo)
    if distancias[nodo] == float('inf'):
        print(f"Nodo {nodo}: No es alcanzable")
    else:
      
        print(f"Nodo {nodo} (Distancia {distancias[nodo]}): {' -> '.join(map(str, camino))}")`
    },
    Metodos_de_ordenamiento: {
        titulo: "Metodos de ordenamiento",
        descripcion: "Reúne múltiples paradigmas de ordenamiento en Python. Contiene algoritmos iterativos (Burbuja, Selección, Inserción), estructuras Divide y Vencerás (Merge Sort, Quick Sort) y ordenamiento lineal (Counting Sort).",
        consola: "Bubble Sort: [3, 10, 12, 23, 23, 29, 40, 43, 49, 50]\nSELECTION SORT\n[3, 10, 12, 23, 23, 29, 40, 43, 49, 50]\nINSERTION SORT\n[3, 10, 12, 23, 23, 29, 40, 43, 49, 50]\nQUICK SORT\n[3, 10, 12, 23, 23, 29, 40, 43, 49, 50]\nQUICK SORT RANDOM\n[3, 10, 12, 23, 23, 29, 40, 43, 49, 50]\n[3, 10, 12, 23, 23, 29, 40, 43, 49, 50]",
        codigo: `import random
def bubble_sort(lista):
    swap_counter = 0
    n = len(lista)

    swapped = True

    while swapped:
        swapped = False

        for i in range(0, n - 1):
            if lista[i] > lista[i + 1]:
           
                lista[i], lista[i + 1] = lista[i + 1], lista[i]
                swapped = True
                swap_counter += 1

        n -= 1  

    return lista, swap_counter



datos = [10,50,23,3,43,23,29,49,12,40]
ordenada, intercambios = bubble_sort(datos)

print("Bubble Sort:", ordenada)

def selection_sort(datos):

 n = len(datos)
 for i in range(n-1):
  min_index = i
  for j in range(i+1, n):
     if datos[j] < datos[min_index]:
      min_index = j
  min_value = datos.pop(min_index)
  datos.insert(i, min_value)
print("SELECTION SORT")
print(datos)

def insertion_sort(datos):
     
 n = len(datos)
 for i in range(1,n):
    insert_index = i
  current_value = datos.pop(i)
  for j in range(i-1, -1, -1):
    if datos[j] > current_value:
      insert_index = j
  datos.insert(insert_index, current_value)

print("INSERTION SORT")
print(datos)


def merge_sort(datos):
    if len(datos) > 1:
        mid = len(datos) // 2
        L = datos[:mid]
        R = datos[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0

        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                datos[k] = L[i]
                i += 1
            else:
                datos[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            datos[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            datos[k] = R[j]
            j += 1
            k += 1
            print("MERGE SORT")
            print(datos)     



def partition(datos, low, high):
    pivot = datos[high]
    i = low - 1
    for j in range(low, high):
        if datos[j] <= pivot:
            i += 1
            datos[i], datos[j] = datos[j], datos[i]
    datos[i + 1], datos[high] = datos[high], datos[i + 1]
    return i + 1

def quick_sort(datos, low, high):
    if low < high:
        p = partition(datos, low, high)
        quick_sort(datos, low, p - 1)
        quick_sort(datos, p + 1, high)


quick_sort(datos, 0, len(datos) - 1)
print("QUICK SORT")
print(datos)        


def quick_sort_random(datos):
    if len(datos) <= 1:
        return datos
    pivot= random.choice(datos)
    less = [x for x in datos if x < pivot]
    middle = [x for x in datos if x == pivot]
    right = [x for x in datos if x > pivot]
    return quick_sort_random(less) + middle + quick_sort_random(right)
print("QUICK SORT RANDOM")
print(quick_sort_random(datos))

def counting_sort(datos):
    if not datos:
        return []

   
    max_val = max(datos)
    count = [0] * (max_val + 1)
    output = [0] * len(datos)

    for num in datos:
        count[num] += 1

   
    for i in range(1, len(count)):
        count[i] += count[i - 1]

    for num in reversed(datos):
        output[count[num] - 1] = num
        count[num] -= 1

    return output


sorted_data = counting_sort(datos)
print(sorted_data)`
    },

    torres_hanoi: {
        titulo: "Torres de Hanói",
        descripcion: "Algoritmo clásico de la estrategia Divide y Vencerás. Resuelve el acertijo de las Torres de Hanói para 5 discos de forma óptima, imprimiendo secuencialmente la serie exacta de 31 movimientos.",
        consola: "Mover disco 1 del poste A al poste B\nMover disco 2 del poste A al poste C\nMover disco 1 del poste B al poste C\nMover disco 3 del poste A al poste B\nMover disco 1 del poste C al poste A\nMover disco 2 del poste C al poste B\nMover disco 1 del poste A al poste B\nMover disco 4 del poste A al poste C\nMover disco 1 del poste B al poste C\nMover disco 2 del poste B al poste A\nMover disco 1 del poste C al poste A\nMover disco 3 del poste B al poste C\nMover disco 1 del poste A al poste B\nMover disco 2 del poste A al poste C\nMover disco 1 del poste B al poste C\nMover disco 5 del poste A al poste B\nMover disco 1 del poste C al poste A\nMover disco 2 del poste C al poste B\nMover disco 1 del poste A al poste B\nMover disco 3 del poste C al poste A\nMover disco 1 del poste B al poste C\nMover disco 2 del poste B al poste A\nMover disco 1 del poste C al poste A\nMover disco 4 del poste C al poste B\nMover disco 1 del poste A al poste B\nMover disco 2 del poste A al poste C\nMover disco 1 del poste B al poste C\nMover disco 3 del poste A al poste B\nMover disco 1 del poste C al poste A\nMover disco 2 del poste C al poste B\nMover disco 1 del poste A al poste B",
        codigo: `def torre_de_hanoi(n, origen, destino, auxiliar):
    if n == 1:
        print("Mover disco 1 del poste", origen, "al poste", destino)
        return
    torre_de_hanoi(n-1, origen, auxiliar, destino)
    print("Mover disco", n, "del poste", origen, "al poste", destino)
    torre_de_hanoi(n-1, auxiliar, destino, origen)

n = 5
torre_de_hanoi(n, 'A', 'B', 'C')`
    },
    ColaCircular: {
        titulo: "Cola Circular",
        descripcion: "Estructura de datos que utiliza un arreglo para almacenar elementos en una secuencia circular, permitiendo la inserción y eliminación de elementos de forma eficiente.",
        consola: "Cola: [1, 2, 3, 4, 5]",
        codigo: `class ColaCircular:
    def __init__(self,capacidad):
        self.capacidad=capacidad
        self.cola=[None]*capacidad
        self.frente = -1
        self.final = -1

    def esta_vacia(self):
        return self.frente == -1
    
    def esta_llena(self):
        return (self.final + 1) % self.capacidad == self.frente
    
    def encolar(self,dato):
        if self.esta_llena():
            print("La cola está llena")
            return
        
        if self.esta_vacia():
            self.frente = 0
            self.final = 0
        else:    
           self.final = (self.final + 1) % self.capacidad
        self.cola[self.final] = dato

    def desencolar(self):
        if self.esta_vacia():
            print("La cola está vacía")
            return None
        
        dato = self.cola[self.frente]
        self.cola[self.frente] = None
        
        if self.frente == self.final:
            self.frente = -1
            self.final = -1
        else:
            self.frente = (self.frente + 1) % self.capacidad
        
        return dato    
    
    def ver_frente(self):
        if self.esta_vacia():
            return None
        return self.cola[self.frente]
    
    def mostrar(self):
        if self.esta_vacia():
            print("La cola está vacía")
            return
        elementos = []
        i = self.frente

        while True:
            elementos.append(self.cola[i])
            if i == self.final:
                break
            i = (i + 1) % self.capacidad
        print("Cola:", elementos) 



        `
    },
    
    ColaCirculardt: {
        titulo: "Cola Circular DT",
        descripcion: "Estructura de datos que utiliza un arreglo para almacenar elementos en una secuencia circular, permitiendo la inserción y eliminación de elementos de forma eficiente. Esta versión optimizada utiliza un arreglo predefinido para evitar problemas de referencia y asegura que los espacios vacíos se manejen correctamente.",
        consola: "Cola: ['A01', 'A02', 'A03', 'A04', 'A05']\nCola: ['A02', 'A03', 'A04', 'A05']\nCola: ['A02', 'A03', 'A04', 'A05', 'A06']",
        codigo: `class ColaCircular:
    def __init__(self,capacidad):
        self.capacidad=capacidad
        self.cola=[5]*capacidad
        self.frente = -1
        self.final = -1

    def esta_vacia(self):
        return self.frente == -1
    
    def esta_llena(self):
        return (self.final + 1) % self.capacidad == self.frente
    
    def encolar(self,dato):
        if self.esta_llena():
            print("La cola está llena")
            return
        
        if self.esta_vacia():
            self.frente = 0
            self.final = 0
        else:    
           self.final = (self.final + 1) % self.capacidad
        self.cola[self.final] = dato

    def desencolar(self):
        if self.esta_vacia():
            print("La cola está vacía")
            return None
        
        dato = self.cola[self.frente]
        self.cola[self.frente] = None
        
        if self.frente == self.final:
            self.frente = -1
            self.final = -1
        else:
            self.frente = (self.frente + 1) % self.capacidad
        
        return dato    
    
    def ver_frente(self):
        if self.esta_vacia():
            return None
        return self.cola[self.frente]
    
    def mostrar(self):
        if self.esta_vacia():
            print("La cola está vacía")
            return
        elementos = []
        i = self.frente

        while True:
            elementos.append(self.cola[i])
            if i == self.final:
                break
            i = (i + 1) % self.capacidad
        print("Cola:", elementos) 


Cola=ColaCircular(5)

Cola.encolar("A01")
Cola.encolar("A02")
Cola.encolar("A03")
Cola.encolar("A04")
Cola.encolar("A05")
Cola.mostrar()
Cola.desencolar()
Cola.ver_frente()
Cola.mostrar()
Cola.encolar("A06")
Cola.mostrar()

        `
    }
};


let algoritmoActual = null;

function mostrarAlgoritmo(id) {
    algoritmoActual = proyectos[id];
    
   
    document.getElementById('titulo-algoritmo').innerText = algoritmoActual.titulo;
    document.getElementById('descripcion-algoritmo').innerText = algoritmoActual.descripcion;

    const contenedorCodigo = document.getElementById('codigo-python');
    contenedorCodigo.textContent = algoritmoActual.codigo;
  
    document.getElementById('pantalla-ejecucion').innerText = "Consola lista. Presiona 'Simular Ejecución'...";
    document.getElementById('pantalla-ejecucion').style.color = "#888888";

    Prism.highlightElement(contenedorCodigo);
}

function simularEjecucion() {
    if (!algoritmoActual) {
        alert("Por favor selecciona un programa primero.");
        return;
    }
    const terminal = document.getElementById('pantalla-ejecucion');
    terminal.innerText = algoritmoActual.consola;
    terminal.style.color = "#ff0048";
}