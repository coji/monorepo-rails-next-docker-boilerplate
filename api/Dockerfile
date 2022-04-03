FROM ruby:3.1.1-alpine as builder

ENV ROOT="/api"
ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR ${ROOT}

COPY ../api/Gemfile ../api/Gemfile.lock ${ROOT}

RUN apk add \
    alpine-sdk \
    build-base \
    sqlite-dev \
    tzdata \
    git 

RUN gem install bundler
RUN bundle install

FROM ruby:3.1.1-alpine

ENV ROOT="/api"
ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

RUN apk update && \
    apk add \
        sqlite-libs \
        tzdata \
        bash

WORKDIR ${ROOT}

COPY --from=builder /usr/local/bundle /usr/local/bundle
COPY ../api ${ROOT}
COPY ../api/entrypoint.sh /usr/bin/

RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]