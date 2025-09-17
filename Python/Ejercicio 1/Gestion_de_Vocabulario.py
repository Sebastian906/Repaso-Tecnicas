# Lista global para almacenar las palabras
vocabulario = []

def agregar_palabra(palabra, significado):
    """
    Función para agregar una nueva palabra en ingles con su significado en español
    """
    vocabulario.append({
        "palabra": palabra.lower(),
        "significado": significado.lower(),
        "aciertos": 0,
        "errores": 0
    })
    print(f'Palabra "{palabra}" agregada correctamente.')

def buscar_palabra(palabra):
    """
    Función para buscar una palabra en la lista
    """
    for item in vocabulario:
        if item["palabra"] == palabra.lower():
            print(f'{palabra} -> {item["significado"]}')
            return item
    print(f'La palabra "{palabra}" no se ha encontrado.')
    return None

def editar_palabra(palabra, nueva_palabra, nuevo_significado):
    """
    Función para editar una palabra de la lista
    """
    for item in vocabulario:
        if item["palabra"] == palabra.lower():
            item["palabra"] = nueva_palabra.lower()
            item["significado"] = nuevo_significado.lower()
            print(f'Palabra "{palabra}" editada a "{nueva_palabra}" → {nuevo_significado}')
            return
    print(f'La palabra "{palabra}" no se ha encontrado.')

def eliminar_palabra(palabra):
    """
    Función para eliminar una palabra de la lista
    """
    for item in vocabulario:
        if item["palabra"] == palabra.lower():
            vocabulario.remove(item)
            print(f' Palabra "{palabra}" eliminada correctamente.')
            return
    print(f'La palabra "{palabra}" no se ha encontrado.')