FROM ruby:3.1.1

RUN mkdir /api
WORKDIR /api
COPY ../api/Gemfile /api/Gemfile
COPY ../api/Gemfile.lock /api/Gemfile.lock
RUN bundle install
COPY ../api /api

# Add a script to be executed every time the container starts.
COPY ../api/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3001

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
