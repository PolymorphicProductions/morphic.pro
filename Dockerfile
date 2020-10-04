FROM elixir:1.10.4

RUN apt-get update && \
  apt-get install -y postgresql-client && \
  apt-get install -y inotify-tools && \
  apt-get install -y nodejs && \
  curl -L https://npmjs.org/install.sh | sh && \
  mix local.hex --force && \
  mix archive.install hex phx_new 1.5.5 --force && \
  mix local.rebar --force

ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

CMD ["mix", "phx.server"]