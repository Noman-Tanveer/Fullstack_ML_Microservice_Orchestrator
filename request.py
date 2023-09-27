import requests

api_url = 'http://localhost:3000/generate/'  # Replace with your API URL

# Define the question data
question_data = {
    'question': 'How can I send a POST request in Python?',
}

# Send a POST request using requests
try:
    response = requests.post(api_url, json=question_data)

    # Check if the response status code is 200 (OK)
    if response.status_code == 200:
        # Parse the JSON response
        response_data = response.json()
        print('Response data:', response_data)
    else:
        print('Network response was not OK:', response.status_code)
except requests.exceptions.RequestException as e:
    # Handle request exceptions
    print('Request error:', e)
