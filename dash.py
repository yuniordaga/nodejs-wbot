from selenium import webdriver #usanmos la libreria selenium e importamos webdriver
import time                    #importamos time 

#Se obtiene el driver como controlador para la web chrome
driver = webdriver.Chrome(executable_path=r'./chromedriver.exe')

#abre la pagina web en la que se va a trabajar
driver.get('http://localhost:5000/')

#Esperamos 5 segundos para que cargue correctamente
time.sleep(5) # espera en segundos

#Toma un screenshot y lo cuarda con el nombre graficasdb3.jpg
driver.save_screenshot("graficasdb3.jpg")

#Cerramos la pagina web
driver.close()