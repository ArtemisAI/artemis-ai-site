FROM python:3.12-slim as base

WORKDIR /app

# Install build tools & psycopg deps
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends gcc libpq-dev && \
    rm -rf /var/lib/apt/lists/*

# Install Python deps
COPY requirements/base.txt requirements/prod.txt ./requirements/
RUN pip install --no-cache-dir -r requirements/prod.txt

# Copy application
COPY . .

# Collect static assets (will noop until Django project exists)
RUN mkdir -p /static && echo "Skipping collectstatic during initial scaffold"

# Expose port for gunicorn (nginx will sit in front)
EXPOSE 8000

# Gunicorn entrypoint configured via docker-compose
CMD ["gunicorn", "artemis.wsgi:application", "-c", "gunicorn.conf.py"]
