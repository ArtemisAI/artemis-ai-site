from flask import Flask, render_template, url_for, request, jsonify, session, g # Add g
from flask_babel import Babel, gettext as _ # Add Babel and gettext

# Supported languages
LANGUAGES = {
    'en': 'English',
    'es': 'Español',
    'fr': 'Français'
}

app = Flask(__name__)
app.secret_key = 'super-secret-key-for-artemisai-dev' # Ensure this is set
babel = Babel(app)

@babel.localeselector
def get_locale():
    # 1. Try to get language from URL parameters
    lang = request.args.get('lang')
    if lang in LANGUAGES:
        session['language'] = lang # Store in session for persistence
        return lang
    # 2. Try to get language from session
    if 'language' in session and session['language'] in LANGUAGES:
        return session['language']
    # 3. Fallback to default language (can be expanded with Accept-Language header later)
    return 'en' # Default language

# Make current language available in templates and provide LANGUAGES
@app.before_request
def before_request():
    g.locale = str(get_locale())
    # This makes {{ g.locale }} available in templates to see current language

@app.context_processor
def inject_conf_var():
    return dict(LANGUAGES=LANGUAGES, CURRENT_LANG=session.get('language', str(get_locale())))


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/demos')
def demos():
    return render_template('demos.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/chat', methods=['POST'])
def chat_endpoint():
    try:
        data = request.get_json()
        user_message = data.get('message', 'No message received')
        # deep_chat_session_id = data.get('sessionId') # Can be logged or used if needed

        # Retrieve history from session or initialize if not present
        chat_history = session.get('chat_history', [])
        
        chat_history.append({"sender": "user", "text": user_message})

        # Simple AI response logic (can be expanded)
        # For now, let's make the AI mention the number of messages in history
        num_messages = len(chat_history) # Count after adding user message
        ai_response_text = f"Backend received: '{user_message}'. History has {num_messages} user message(s) so far in this session."

        chat_history.append({"sender": "ai", "text": ai_response_text})
        
        # Store updated history back in session
        session['chat_history'] = chat_history
        
        # Use a more reliable way to get Flask's session ID if available
        flask_session_id = session.sid if hasattr(session, 'sid') else 'N/A (Flask session not using custom ID)'
        app.logger.info(f"Flask Session ID: {flask_session_id}")
        app.logger.info(f"Chat history for session: {chat_history}")

        return jsonify({"text": ai_response_text})

    except Exception as e:
        app.logger.error(f"Error in /chat endpoint: {e}")
        # Consider clearing chat_history on error or specific conditions
        # session.pop('chat_history', None) 
        return jsonify({"error": "Sorry, something went wrong on our end."}), 500

# Basic error handling for 404
@app.errorhandler(404)
def page_not_found(e):
    # We will create templates/404.html later in the plan
    # For now, can return a simple message or render it if it exists
    return render_template('404.html'), 404 # Assuming 404.html will be created

if __name__ == '__main__':
    app.run(debug=True)
