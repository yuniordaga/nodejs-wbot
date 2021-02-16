from selenium import webdriver #usanmos la libreria selenium e importamos webdriver
import time                    #importamos time 
driver_location= "/usr/bin/chromedriver"
binary_location= "/usr/bin/google-chrome"
options = webdriver.ChromeOptions() # define options
options.binary_location= binary_location
options.add_argument("headless") # pass headless argument to the options
#options.binary_location = '/usr/bin/chromium-browser' # location of the Chrome Browser binary
options.add_argument("disable-infobars") # disabling infobars
options.add_argument("--disable-extensions") # disabling extensions
options.add_argument("--disable-gpu") # applicable to windows os only
options.add_argument("--disable-dev-shm-usage") # overcome limited resource problems
options.add_argument("--no-sandbox") # Bypass OS security model
#Se obtiene el driver como controlador para la web chrome
driver = webdriver.Chrome(executable_path=driver_location,chrome_options=options)
driver.set_window_size(1700,700)
#abre la pagina web en la que se va a trabajar
driver.get('http://vasturiano.github.io/timelines-chart/example/categorical/')
#Esperamos 5 segundos para que cargue correctamente
time.sleep(5) # espera en segundos
#Toma un screenshot y lo cuarda con el nombre graficasdb3.jpg
driver.save_screenshot("graficasdb3.jpg")
#Cerramos la pagina web
driver.close()