# Use the official Nginx image (Alpine is lightweight)
FROM nginx:alpine

# Remove default content and copy our static site
RUN rm -rf /usr/share/nginx/html/*
COPY . /usr/share/nginx/html

# Expose port 80 (container's internal port)
EXPOSE 80

# Nginx is already set to run in the foreground by default