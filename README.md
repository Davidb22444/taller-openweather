# Taller OpenWeatherMap - ADSO 2026

## Descripción
Consumo de la API externa OpenWeatherMap usando Postman.
Taller de investigación de APIs - Programa ADSO SENA.

## API utilizada
- **Nombre:** OpenWeatherMap
- **URL oficial:** https://openweathermap.org/api
- **Autenticación:** API Key

## Endpoints consumidos
| Endpoint | Método | Descripción |
|----------|--------|-------------|
| /data/2.5/weather | GET | Clima actual por ciudad |
| /data/2.5/forecast | GET | Pronóstico 5 días |

## Pruebas realizadas
- ✅ Clima actual Bogotá - 200 OK
- ✅ Pronóstico 5 días - 200 OK
- ❌ API Key inválida - 401 Unauthorized
- ❌ Ciudad inexistente - 404 Not Found

## Herramienta de pruebas
Postman - Colección exportada disponible en este repositorio.

## Autor
Davidb22444 - ADSO 2026
